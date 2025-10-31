import React,{useEffect,useState} from 'react';
import {viewUsers} from "../service/service.js"
let ViewUser=({user})=>{

let [view,setView]=useState([]);

let viewUser=async()=>{
    let users=await viewUsers();
    setView(users);
}

useEffect(()=>{
    viewUser();
},[]);
console.log(view);
    return<>
          <div className="container w-75 p-3 mt-5 border rounded shadow">
            <h1 className='text-center m-3 text-danger'>All Register member</h1>
           
            <div className="table-responsive">
            <table className="table table-striped bg-light border shadow-lg">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {view.map((data, index) => (
                        <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.address}</td>
                        <td>{data.role}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>

    </div>
    </>

}
export default ViewUser;