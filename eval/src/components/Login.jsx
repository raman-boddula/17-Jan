import { Form, Input, Button, Checkbox, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess,loginError } from '../redux/Auth/actions';
import React from "react";
export const Login = () => {
    const [form, setForm] = React.useState([]);
    const { Option } = Select;
    const dispatch = useDispatch();

    const handleChange = (e) => {
        // console.log(e.target)
        let {id, type, value} = e.target;
        id=id==="basic_email"?"email":"role"
        setForm({ ...form, [id]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(res => dispatch(loginSuccess(form.password)));
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
                <select name="role" onChange={handleChange}>
                    <option value="ADMIN">ADMIN</option>
                    <option value="CLIENT">CLIENT</option>  
                </select>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button onClick={handleSubmit}type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </div>
    )
}