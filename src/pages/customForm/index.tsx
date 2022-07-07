import FormRender, { useForm } from 'form-render';
import { useEffect, useRef, useState } from 'react';
import ImmutableList from '../../components/ImmutableList';
import CustomInput from '../../components/customInput';
import { Select } from 'antd';

const schema = {
    "type": "object",
    "properties": {
      "optionsCount": {
        "title": "单选",
        "type": "string",
        "enum": [
          "1",
          "2",
          "3"
        ],
        "enumNames": [
          "1",
          "2",
          "3"
        ],
        "widget": "radio",
        "default": "3"
      },
      "options": {
        "title": "数组",
        "type": "array",
        "hidden": true,
        "items": {
          "type": "object",
          "properties": {
            "text": {
              "required": true,
              "title": "输入框",
              "type": "string",
              "props": {}
            }
          }
        },
        "props": {
          "hideAdd": "true",
          "prefix": "A"
        },
        "dependencies": ["optionsCount"],
        "displayType": "row",
        "default": "[{text: \"\"}]"
      },
      "object_hhNlN_": {
        "title": "对象",
        "type": "object",
        "hidden": true,
        "properties": {
          "textarea_XMZoaH": {
            "title": "编辑框",
            "type": "string",
            "format": "textarea",
            "required": true,
            "props": {}
          }
        }
      }
    },
    "column": 1,
    "labelWidth": 120,
    "displayType": "row"
  }


const CustomForm = () => {
    const form = useForm();
    // const defaultOptions = schema.properties.options.default
    // useEffect(()=>{
    //     console.log('渲染')
    // },[])
    // const watch = {
    //   // # 为全局
    //   "optionsCount": val => {
    //       form.setValueByPath('options',new Array(Number(val || 1)).fill(defaultOptions))
    //       console.log(form.getSchemaByPath('options'))
    //   },
    // }

    const onSubmit = async () => {
      const { errors } = await form.submit()
      console.log(errors,"errors")
    }
    const [count] = useState(0)
    return <div>
        <FormRender form={form} schema={schema as any} widgets={{customInput: CustomInput}} />
        <button onClick={onSubmit}>提交</button>
    </div>;
}

export default CustomForm