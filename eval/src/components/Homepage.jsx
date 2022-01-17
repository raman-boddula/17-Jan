import React from 'react';
import { Button } from "antd";
import { Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

import { applyJobSuccess ,applyJobError,applyJobLoading} from "../redux/client/action";
export const Homepage = () => {
    const [data, setData] = React.useState([]);
    const { userRole } = useSelector((state) => ({
        userRole: state.authState.userRole
    }))
    const { Jobs, error, loading } = useSelector((state) => (
        {
            loading : state.adminState.loading,
            Jobs : state.adminState.Jobs,
            error : state.adminState.error,
        }))
    const dispatch=useDispatch()
    const apply= (id)=>{
        dispatch(applyJobLoading());
        try {
            dispatch(applyJobSuccess(id));            
        } catch (e) {
            dispatch(applyJobError());        
        }
        
    }
    console.log("jobss", Jobs,userRole)
    console.log("eve.holt@reqres.in",userRole)
    // const dispatch = useDispatch();
    return (<div>
        <h1>Homepage</h1>
        {Jobs.length>0?Jobs.map((e, i) => (
            <div>
                 <h1>{e.basic_company} || {e.basic_location} || {e.basic_salary}</h1>
                 {/* <h1>{e.basic_job description}</h1> */}
                 {/* <h1>{e.basic_job title}</h1> */}
               {userRole!=="ADMIN"?<button onClick={()=>apply(e.id)}>Apply</button>:null }
            </div>
        )):<h1>NOJOBS NOW</h1>}
        <>
            {userRole === "ADMIN" ? <Link to={`/addJobs`}><Button>ADD JOB</Button></Link> : null}
            <Link to={`/login`}><Button>Logout here</Button></Link>
        </>
    </div>)
}