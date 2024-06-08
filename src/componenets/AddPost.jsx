import React, { useState } from 'react'
import NavBar from './NavBar'

const AddPost = () => {
    const[data,setData]=useState(
        {
            "postid":"",
            "postname":"",
            "pdescrip":"",
            "pchoosef":"",
            "pcomment":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
        <br></br><h3><u><center>ADD POST</center></u></h3><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Post ID</label>
                            <input type="text" className="form-control" name='postid' value={data.postid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Post Name</label>
                            <input type="text" className="form-control" name='postname' value={data.postname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Descripition</label>
                            <textarea name="pdescrip" id="" className="form-control" value={data.pdescrip} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Choose File</label>
                            <input type="file" name="pchoosef" id="" className="form-control" value={data.pchoosef} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Comment</label>
                            <input type="text" className="form-control" name='pcomment' value={data.pcomment} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost