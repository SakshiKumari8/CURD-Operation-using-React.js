import React, { useEffect } from 'react'
import style from "./Home.module.css"
import axios from 'axios'
import { useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
  let [name,setName]=useState('')
  let [sal,setSal]=useState('')
  let [company,setCompany]=useState('')

  let obj=useParams()
    let navigate=useNavigate()
  console.log(obj);
 
 
  useEffect(()=>{
    axios.get(`http://localhost:3000/employee/${obj.ID}`)
    .then((resp)=>
    {
      console.log(resp.data);
      setName(resp.data.eName)
      setCompany(resp.data.eCompany)
      setSal(resp.data.eSalary)
    })
    .catch(()=>{console.log("ERORRRRRR");})
  },[])

   let nameData=(e)=>{
      setName(e.target.value);
     
  }

  let salData=(e)=>{
      setSal(e.target.value);
  }

  let companyData=(e)=>{
      setCompany(e.target.value);
  }

  let formHanding=(e)=>{
      e.preventDefault()
      // console.log(name,sal,company);
      let payload = {
          eName:name,
          eSalary:sal,
          eCompany:company
      }
  

  axios.put(`http://localhost:3000/employee/${obj.ID}`,payload)
  .then(()=>{console.log("Data Updated");})
  .catch(()=>{console.log("eRror");})
  navigate("/user")
    }
  return (
    
         <div id={style.frm}>
            
           
            <form action="">
                <h5>UPDATE USER</h5>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={nameData}/> <br/>
                <label htmlFor="">Salary</label>
                <input type="text" value={sal} onChange={salData}/> <br/>
                <label htmlFor="">company</label>
                <input type="text" value={company} onChange={companyData}/> <br/>
                <button onClick={formHanding} >Submit</button>
            </form>
        </div>
      
   
  )
}

export default EditUser
