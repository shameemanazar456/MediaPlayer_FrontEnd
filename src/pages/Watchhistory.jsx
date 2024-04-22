import { faArrowLeft, faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllVideoHistoryApi,deleteVideoHistoryApi } from '../services/allAPI'

function Watchhistory() {
  const [videoHistory, setVideoHistory] = useState([])
  const [deletevideostatus, setdeletevideostatus] = useState(false)

  //function to get all video from backend
  const getAllVideo = async()=>{
    const response = await getAllVideoHistoryApi()
    console.log(response);
    setVideoHistory(response.data)
  }

  //function to delete a video
  const deleteVideoHistory = async(id)=>{
    //console.log('inside delete');
    const response = await deleteVideoHistoryApi(id)
    console.log(response);
    setdeletevideostatus(true)
  }

  console.log(videoHistory);

  useEffect(()=>{
    getAllVideo()
    setdeletevideostatus(false)
  },[deletevideostatus])

  return (
    <>
        <div className='d-flex align-items-center mx-4 mb-5 mt-5'>
          <h4>Watch History</h4>
          <Link className='ms-auto' to={'/home'} style={{textDecoration:'none'}}><h5><FontAwesomeIcon icon={faArrowLeft} className='me-2' beat /><span id='back'>Back Home</span><FontAwesomeIcon className='ms-2' icon={faHouse} /></h5></Link>
        </div>
        <div className='row mx-3 mt-5'>
          <div className="col-md-1"></div>
          <div className="col-md-10 p-4" style={{overflowX:'auto'}}>
            {videoHistory?.length>0?
              <table className='table p-3'>
              <thead className='bg-info '>
                <th>#</th>
                <th>CAPTION</th>
                <th>URL</th>
                <th>TIME STAMP</th>
                <th>ACTION</th>
              </thead>
              <tbody>
               { videoHistory?.map((item,index)=>(
               <tr>
                  <td>{index+1}</td>
                  <td>{item?.caption}</td>
                  <td><a href={item?.url} target='_blank'>{item?.url}</a></td>
                  <td>{item?.timestamp}</td>
                  <td onClick={()=>deleteVideoHistory(item?.id)}><FontAwesomeIcon icon={faTrash} className='btn btn-outline-danger' /></td>
                </tr>))
                }
              </tbody>

            </table>:
            <p className='text-warning mt-5 fs-5'>Watch History is clean....</p>
      
            }
          </div>
          <div className="col-md-1"></div>
        </div>
    </>
  )
}

export default Watchhistory
