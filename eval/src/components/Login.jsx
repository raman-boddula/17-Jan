import { Form, Input, Button, Checkbox } from 'antd';
import React from "react";
export const Login = () => {
    const [form, setForm] = React.useState([])
    const handleChange = (e) => {
        // console.log(e.target)
        let {name, id, type, value} = e.target;
        // id=type==="basic_email"?"email":"password"
        setForm({ ...form, [id]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }
    return (
        <div>
            <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                    onChange={handleChange}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    onChange={handleChange}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button onClick={handleSubmit}type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </div>
    )
}