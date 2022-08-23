import $RefParser from "@apidevtools/json-schema-ref-parser"
import { useEffect } from "react"
import mySchema from "../../t.json"


const JsonScheam = () => {
  const parseJson = async () => {
    try {
      let schema = await $RefParser.dereference(mySchema)
      console.log(schema)
    } catch (err) {
      console.error(err)
    }
  }
    useEffect(() => {
        parseJson()
    })
    return (<></>)
}

export default JsonScheam
