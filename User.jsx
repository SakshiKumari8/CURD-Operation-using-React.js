import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import style from "./Home.module.css"
import style from "./User.module.css"
import axios from "axios"
const User = (x)=>{
    let [result , setResult]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/employee")
    .then((resp)=>{
        setResult(resp.data);
        console.log("Got the data");
    })
    .catch(()=>{console.log("Error");})

    },[])
    let deleteUser=(x)=>{
        axios.delete(`http://localhost:3000/employee/${x}`)
        window.location.assign("/user")
    }
    
    return(
        <div id={style.pg}>
            <section>

                {result.map((x)=>{
                    return(
                        <div>
                            <table>
                                <tr>
                                    <th colSpan="2">Employee {x.id}</th>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>:{x.eName}</td>
                                </tr>
                                <tr>
                                    <td>Salary</td>
                                    <td>:{x.eSalary}</td>
                                </tr>
                                <tr>
                                    <td>Company</td>
                                    <td>:{x.eCompany}</td>
                                </tr>
                                <tr>
                                    <td><button><Link to={`/edit/${x.id}`}>Edit</Link></button></td>
                                    <td>
                                        <button onClick={()=>{deleteUser(x.id)}}>Delete</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    )

                })}



                {/* {result.map((x)=>{
                    let edit=(y)=>{

                        

                    }
                    let del=(y)=>{
                        if(y.target.innerText==="Delete"){
                            alert("you want to delete?")
                           
                            
                        }

                    }
                    return(
                        <div key={x.id}>
                            <h1>Name: {x.eName}</h1>
                            <h1>Salary: {x.eSalary}</h1>
                            <h1>Company: {x.eCompany}</h1>
                            <button onClick={edit}>Edit</button>
                            <button onClick={del}>Delete</button>

                        </div>
                    )
                })} */}
            </section>
        </div>
    )
}
export default User