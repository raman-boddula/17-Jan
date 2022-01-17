import React from 'react';
import { Button } from "antd";
import { Link} from "react-router-dom"
import { useSelector, useDispatch} from "react-redux";
export const Homepage = () => {
    const [data, setData] = React.useState([]);
    const { userRole } = useSelector((state) => ({
        userRole: state.authReducer.userRole
    }))
    const { Jobs, error, loading } = useSelector((state) => (
        {
            loading : state.adminReducer.loading,
            Jobs : state.adminReducer.Jobs,
            error : state.adminReducer.error,
        }))
    console.log("jobss", Jobs)
    console.log("eve.holt@reqres.in",userRole)
    const dispatch = useDispatch();
    return (<div>
        {Jobs.length>0?Jobs.map((e, i) => (
            <div>
                 <h1>{e.basic_company} || {e.basic_location} || {e.basic_salary}</h1>
                 {/* <h1>{e.basic_job description}</h1> */}
                 {/* <h1>{e.basic_job title}</h1> */}
                
            </div>
        )):null}
        <>
            {userRole[0]==="ADMIN"?<Link to={`/addJobs`}><Button>ADD JOB</Button></Link>:null}
        </>
    </div>)
}