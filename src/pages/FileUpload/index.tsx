import { Button, Input, Upload } from "antd"
import { useEffect, useState } from "react"
import axios from "axios"
import "./index.less"

const FileUpload = () => {
  const [val, setVal] = useState<any>()
  const fileReader = new FileReader()
  useEffect(() => {
    console.log(val)
  }, [val])

  const imageOssOptions = ({
    bucket,
    directory,
    sourceId,
    sourceType,
  }: {
    bucket: string
    directory: string
    sourceId: string
    sourceType: string
  }) => {
    return axios.get<any>(
      `https://m.yuanfudao.biz/tutor-exercise-oss/api/buckets/${bucket}/uploadToken?directory=${directory}&sourceType=${sourceType}&sourceId=${sourceId}`,
      {
        withCredentials: true,
      }
    )
  }
  return (
    <>
      <Upload
        onChange={(info) => {
          console.log("info", info)
          setVal(info.fileList[0])
        }}
      >
        <Button>Click to Upload</Button>
      </Upload>
      <div className="bg"></div>
    </>
  )
}
export default FileUpload
