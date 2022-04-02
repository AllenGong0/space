import { Button, Form, Input, Switch } from "antd"
import { useForm } from "antd/lib/form/Form";

const SearchBar = ({ onFieldsChange, form}) => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };


    return <Form onFinish={onFinish} form={form} onFieldsChange={onFieldsChange}>
        <Form.Item name="filterText" initialValue={''}>
            <Input></Input>
        </Form.Item>
        <Form.Item name="inStockOnly" initialValue={false} valuePropName='checked'>
            <Switch ></Switch>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
      </Form.Item>
    </Form>
}

export default SearchBar