import { useState } from "react"
import style from "./Home.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const CreateUser = ()=>{
    let [name,setName]=useState('')
    let [sal,setSal]=useState('')
    let [company,setCompany]=useState('')

    let navigate=useNavigate()
   
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
        axios.post("http://localhost:3000/employee",payload)
        .then(()=>{console.log("DATA HAS BEEN STORED");})
        .catch(()=>{console.log("ERRRRRRORRRRRRR");})

        navigate("/user")
    }

    return(
        <div id={style.frm}>
            {/* CreateUSer */}
            
           
            <form action="">
                <h5>CREATE USER</h5>
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
export default CreateUser