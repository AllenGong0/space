import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const CustomComA = props => {
  const { schema, addons } = props;
  console.log(addons,"addons")
  if (schema.$id === '#') {
    return <div>{props.children}</div>;
  }
  return (
    <div>
      {props.children}
    </div>
  );
};

const schema = {
  type: 'object',
  properties: {
    "options": {
        "title": "数组",
        "type": "array",
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
        default: `new Array(3)`,
        "props": {
        },
    },
  },
  labelWidth: 120,
  displayType: 'row',
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };
  return (
    <div>
      <FormRender
        form={form}
        schema={schema as any}
        onFinish={onFinish}
        mapping={{ array: 'CustomComA' }}
        widgets={{ CustomComA }}
      />
      <Button type="primary" onClick={form.submit}>
        提交
      </Button>
    </div>
  );
};

export default Demo;