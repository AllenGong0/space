import React, { useContext, useState, useEffect, useRef } from "react"
import { Table, Input, Button, Form, Radio, Alert } from "antd"
import { changeCell, generatorArray } from "./util"
import { cloneDeep } from "lodash"
import "./index.less"
import { createFileAndDownload } from "../../util"
const EditableContext = React.createContext(null)

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm()
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  )
}

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false)
  const inputRef = useRef(null)
  const form = useContext(EditableContext)
  useEffect(() => {
    if (editing) {
      inputRef.current.focus()
    }
  }, [editing])

  const toggleEdit = () => {
    setEditing(!editing)
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    })
  }

  const save = async () => {
    try {
      const values = await form.validateFields()
      toggleEdit()
      handleSave({ ...record, ...values })
    } catch (errInfo) {
      console.log("Save failed:", errInfo)
    }
  }

  let childNode = children

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    )
  }

  return <td {...restProps}>{childNode}</td>
}

const initColumns = [
  {
    title: "天数",
    dataIndex: "day",
  },
  {
    title: "数学",
    children: [
      {
        title: "音频URL",
        editable: true,
        dataIndex: "mathAudioUrl",
      },
      {
        title: "视频URL",
        editable: true,
        dataIndex: "mathVideoUrl",
      },
    ],
  },
  {
    title: "语文",
    dataIndex: "chinese",
    children: [
      {
        title: "音频URL",
        editable: true,
        dataIndex: "chineseAudioUrl",
      },
      {
        title: "视频URL",
        editable: true,
        dataIndex: "chineseVideoUrl",
      },
    ],
  },
  {
    title: "英语",
    dataIndex: "english",
    children: [
      {
        title: "音频URL",
        editable: true,
        dataIndex: "englishAudioUrl",
      },
      {
        title: "视频URL",
        editable: true,
        dataIndex: "englishVideoUrl",
      },
    ],
  },
]

const EditableTable = () => {
  const [grade, setGrade] = React.useState("primary")

  const [columns, setColumns] = useState(initColumns)

  const [dataSource, setDataSource] = useState<any[]>(
    generatorArray(30, {
      mathAudioUrl: "",
      mathVideoUrl: "",
      englishAudioUrl: "",
      englishVideoUrl: "",
      chineseAudioUrl: "",
      chineseVideoUrl: "",
    }).map((item, index) => {
      return { key: index, ...item, day: index + 1 }
    })
  )

  useEffect(() => {
    setColumns(changeCell(cloneDeep(columns), handleSave))
  }, [])

  useEffect(() => {
    setDataSource(
      generatorArray(grade === "primary" ? 30 : 14, {
        mathAudioUrl: "",
        mathVideoUrl: "",
        englishAudioUrl: "",
        englishVideoUrl: "",
        chineseAudioUrl: "",
        chineseVideoUrl: "",
      }).map((item, index) => {
        return { key: index, ...item, day: index + 1 }
      })
    )
  }, [grade])

  const handleSave = (row) => {
    const newData = [...dataSource]
    const index = newData.findIndex((item) => row.key === item.key)
    const item = newData[index]
    newData.splice(index, 1, { ...item, ...row })
    setDataSource(newData)
  }

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  }
  const save = () => {
    createFileAndDownload(dataSource, grade)
  }

  const onGradeChange = (e) => {
    setGrade(e.target.value)
  }

  return (
    <div className="container">
      <div className="header">
        <h1>资源文件生成</h1>
      </div>
      <Radio.Group onChange={onGradeChange} value={grade} buttonStyle="solid">
        <Radio value={"primary"}>小学</Radio>
        <Radio value={"middle"}>初中</Radio>
        <Radio value={"high"}>高中</Radio>
      </Radio.Group>
      <Alert banner message={"年级切换会导致已有填写字段丢失，请谨慎操作"} />
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={columns}
        pagination={{
          defaultPageSize: 15,
        }}
      />
      <Button onClick={save}>保存</Button>
    </div>
  )
}

export default EditableTable
