import FormRender, { useForm } from 'form-render';
import { useEffect, useRef, useState } from 'react';
import ImmutableList from '../../components/ImmutableList';
import CustomInput from '../../components/customInput';

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
        "widget": 'customArray',
        "items": {
          "type": "object",
          "properties": {
            "text": {
              "title": "输入框",
              "type": "string",
              "props": {}
            }
          }
        },
        "props": {
          "hideAdd": "true"
        },
        "dependencies": ["optionsCount"],
        "displayType": "row",
        "default": "[{text: \"\"}]"
      }
    },
    "column": 1,
    "labelWidth": 120,
    "displayType": "row"
  }


const CustomFrom = () => {
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
    return <div>
        <FormRender form={form} schema={schema as any} widgets={{customArray: ImmutableList, customInput: CustomInput}} />
    </div>;
}

export default CustomFrom