import React,{useState} from 'react';
import {register} from '../service/service.js'
let Register=()=>{

    let [user,setUser]=useState({

        name:'',
        email:'',
        password:'',
        address:'',
        role:''
    })

    let registerUser=(e)=>{

        setUser({
            ...user,
            [e.target.name]: e.target.value

        });

    }

    let registerCall=async()=>{

            let result= await register(user.name,user.email,user.password,user.address,user.role);
            alert(result);
    }
    // console.log(user.name,user.email,user.password,user.address,user.role);
    return<>
            <div className="container border shadow mt-5 p-3 shadow-lg bg-light" style={{maxWidth:'600px'}}>
                <h1>Add User</h1>
                <div className="form">
                    <div className="form-group mb-3">
                        <label htmlFor="" className="form-label"></label>
                        <input type="text" name="name" id="name" value={user.name} className="form-control"  placeholder='Enter the Name' onChange={(e)=>{registerUser(e)}}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="form-label"></label>
                        <input type="text" name="email" value={user.email} className="form-control" placeholder='Enter the Email' onChange={(e)=>{registerUser(e)}}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="form-label"></label>
                        <input type="text"  name="address" value={user.address} className="form-control" placeholder='Enter the Address'onChange={(e)=>{registerUser(e)}}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="form-label"></label>
                        <input type="text" name="password" value={user.password} className="form-control" placeholder='Enter the Password' onChange={(e)=>{registerUser(e)}}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="form-label"></label>
                          <select className="form-control" name="role" value={user.role} onChange={(e)=>{registerUser(e)}}>
                            <option value="">Select Option</option>
                            <option value="owner">Owner</option>
                             <option value="admin">Admin</option>
                            <option value="user">User</option>
                          </select>
                    </div>
                   <div className="form-group mb-3">
                        <input type="button" className="form-control btn btn-dark" value="Register" onClick={registerCall}/>
                    </div>
                </div>
            </div>
    </>

}
export default Register ;