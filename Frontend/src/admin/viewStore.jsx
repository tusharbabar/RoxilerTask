import React,{useState,useEffect} from 'react';
import {viewstore,deleteStore} from '../service/service.js'
import { Await } from 'react-router-dom';
let ViewStore=({user})=>{

    let [store,setStore]=useState([]);

    let storeDetail=async()=>{
        let data= await viewstore();
        setStore(data);
    }

    useEffect(()=>{
        storeDetail();
    },[]);

        let deleteStoreData=async(id)=>{
                let result=await deleteStore(id);
                alert(result);
        }
    return<>
            <div className="container w-75 mt-5 p-3 border rounded shadow-lg">
                <h1 className='text-center text-danger m-3'>Store Name and it's Owner</h1>
 
            <div className="table-responsive">
               <table className="table table-striped bg-light">
                    <thead>
                        <tr>
                            <th>Store Name</th>
                            <th>Address</th>
                            <th>Owner</th>
                            <th>delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            store.map((data)=>(
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.address}</td>
                                    <td>{data.owner}</td>
                                    <td><button type="button" className='btn btn-danger p-1' onClick={()=>{deleteStoreData(data.id)}}>Delete</button></td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
            </div>
    </>

}
export default ViewStore;