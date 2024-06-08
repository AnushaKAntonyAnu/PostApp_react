import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewallPost = () => {
    const[data,cahngeData]=useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (response)=>{
                cahngeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <br></br>
            <NavBar/>
            <br></br><h3><u><center>VIEWALL POST</center></u></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table table-bordered border-primary">
                            <table class="table">
                                <thead>
                                    <tr>
                                        
                                        <th scope="col">User ID</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {data.map(
                                    (value,index)=>
                                        {
                                            return<tr>
                                        
                                            <td>{value.id}</td>
                                            <td>{value.userId}</td>
                                            <td>{value.title}</td>
                                        </tr>
                                        }
                                   )}
                                </tbody>
                            </table>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewallPost