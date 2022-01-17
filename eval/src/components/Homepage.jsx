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
    console.log("jobss",Jobs)
    const dispatch = useDispatch();
    return (<div>
        {Jobs.map((e, i) => (
            <div>
                 
            </div>
        ))}
        <>
            {userRole==="ADMIN"?<Link to={`/addJobs`}><Button>ADD JOB</Button></Link>:null}
        </>
    </div>)
}