import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoApi } from '../services/allAPI';

function Add({setVideoUploadStatus}) {
    const [show, setShow] = useState(false);
    //state to store video details
    const [video, setVideo] = useState({
      caption:"",
      imgUrl:"",
      embedLink:""
    })
    console.log(video);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getEmbedLink = (e)=>{
      let text = e.target.value 
      console.log(text);
      if(text.startsWith('https://youtu.be/')){
        const link = `https://www.youtube.com/embed/${text.slice(17,28)}`
        setVideo({...video, embedLink:link})
      }
      else{
        const link = `https://www.youtube.com/embed/${text.slice(-11)}`
        setVideo({...video, embedLink:link})
      }
    
    }

    /* https://www.youtube.com/watch?v=2jop1IKpw74

    https://youtu.be/2jop1IKpw74?si=iTRunvu0Bbi97-ER

    https://www.youtube.com/watch?v=2jop1IKpw74 */

    //function to upload the video details

    const handleUpload = async ()=>{
      const {caption,imgUrl,embedLink} =video
      if(!caption || !imgUrl || !embedLink){
        toast.info('please fill the form completly')
      }
      else{
          const response = await uploadVideoApi(video)
          if(response.status >=200 && response.status<300){
        toast.success('Video Uploaded Successfully')
        setVideoUploadStatus(response.data)
        setVideo({
          caption:"",
          imgUrl:"",
          embedLink:""
        })
        handleClose()
          }
          else{
            console.log(response);
            toast.error('Something Went Wrong')
          }
      }
    }

  return (
    <>
        <div>
       
          <h5>Upload New Video <FontAwesomeIcon  onClick={handleShow} icon={faCloudArrowUp} className='ms-2'/></h5>
        </div>
         <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
           <Modal.Title><FontAwesomeIcon icon={faFilm} className='text-warning me-2' />Upload Videos</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <p>Please fill the following details</p>
            <form action="" className='mt-3 border p-3 rounded'>
                <div className='mb-3'>
                    <input type="text" placeholder='Enter Video Caption ' className='form-control' onChange={(e)=>setVideo({...video,caption:e.target.value})} />
                </div>
                <div className='mb-3'>
                    <input type="text" placeholder='Enter Image Url ' className='form-control' onChange={(e)=>setVideo({...video,imgUrl:e.target.value})} />
                </div>
                <div className='mb-3'>
                    <input type="text" onChange={(e)=>getEmbedLink(e)} placeholder='Enter Youtube Video Link ' className='form-control' />
                </div>
            </form>
         </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
             Cancel
           </Button>
           <Button variant="warning" onClick={handleUpload}>
             Upload
           </Button>
         </Modal.Footer>
       </Modal>

       <ToastContainer theme='colored' position='top-centered' autoclose={2000} />
    </>

  )
}

export default Add
