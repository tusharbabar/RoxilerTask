import React,{useState,useEffect} from 'react';
import {ownerData,saveStore} from '../service/service.js'

let AddStore=({User})=>{

    let [owner,setOwner]=useState([]);

            let ownerDetail=async()=>{
                let data=await ownerData();
                setOwner(data);
            }

            useEffect(()=>{
                ownerDetail()
            },[]);
        
    let [store,setStore]=useState({
        sname:'',
        s_address:'',
        owner_id:''

    });

   let setStoreData=(e)=>{
        setStore({
             ...store,
             [e.target.name]: e.target.value
        });
    }
    

    let saveStoreDetail=async()=>{
            let result=await saveStore(store.sname,store.s_address,store.owner_id);

            alert(result);
    }
    return<>
           <div className="container p-3 mt-5 border shadow-lg bg-light" style={{ maxWidth: "600px" }}>

              <h1>Add Store</h1>
            <div className="form">
                <div className="form-group mb-3">
                    <label htmlFor="" className="form-label">Store name</label>
                    <input type="text" className="form-control" name="sname" value={store.sname} placeholder='Enter the Stroe name' onChange={(e)=>{setStoreData(e)}} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="" className="form-label">Stroe Address</label>
                    <input type="text" className="form-control" id="s_address" name="s_address"  value={store.s_address} placeholder='Enter the Stroe Address' onChange={(e)=>{setStoreData(e)}} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor=" owner_id" className="form-label">Select Store Owner</label>
                    <select name="owner_id" id="owner_id" value={store.owner_id} className='form-control' onChange={setStoreData}>
                        <option value="">select Owner</option>
                       {
                            owner.map((data)=>(
                                <option value={data.id}>{data.name}</option>
                            ))
                       }

                        
                    </select>
                </div>
                <div className="form-group mb-3 mt-5">
                    <input type="button" className="form-control btn btn-dark"  value="Add Store" onClick={saveStoreDetail} />
                </div>
                </div>
           </div> 
    </>

}
export default AddStore;


