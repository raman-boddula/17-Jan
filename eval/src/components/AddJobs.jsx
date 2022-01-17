// name, job title, salary range, job description, location, job type (remote) and anything extra you want to add
import React from "react";
import {nanoid} from "nanoid";
import { Form, Input, Button, Checkbox, Select } from 'antd';
import {Link } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux";
import { addJobError,addJobSuccess,addJobLoading,getJobError,getJobSuccess,getJobLoading } from "../redux/admin/actions";
export const AddJobs = () => {
    const [jobData, setJobData] = React.useState("");
     const handleChange = (e) => {
        console.log(e.target)
        let {id, value} = e.target;
        // id=id==="basic_email"?"email":"role"
        setJobData({ ...jobData, [id]: value ,id:nanoid(5)});
    }
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(jobData)
        dispatch(addJobSuccess(jobData))
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
        label="company"
        name="company"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                    onChange={handleChange}
      >
        <Input />
                </Form.Item>
                <Form.Item
        label="job title"
        name="job title"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                    onChange={handleChange}
      >
        <Input />
      </Form.Item>
<Form.Item
        label="salary"
        name="salary"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                    onChange={handleChange}
      >
        <Input />
      </Form.Item>
<Form.Item
        label="job description"
        name="job description"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                    onChange={handleChange}
      >
        <Input />
      </Form.Item>
<Form.Item
        label="location"
        name="location"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                    onChange={handleChange}
      >
        <Input />
      </Form.Item>



      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button onClick={handleSubmit}type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
            </Form>
            <Link to={"/"}><Button>HOME</Button></Link>
        </div>
    )
}