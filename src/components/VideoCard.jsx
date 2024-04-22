import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteAvideoapi } from '../services/allAPI';

function VideoCard({displayVideo, SetDeleteVideoStatus, isPresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{ 
    setShow(true)
    let caption = displayVideo?.caption
    let url = displayVideo?.embedLink
    let time = new Date()
    let timestamp = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit', day:'2-digit',day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'}).format(time)
    console.log(caption,url, timestamp);

    const reqbody={
      caption,
      url,timestamp
    }

    const response = await addToHistory(reqbody)
    console.log(response);
  };

  const handleDelete = async(id)=>{
    const response = await deleteAvideoapi(id)
    console.log(response);
    SetDeleteVideoStatus(true)
  }

  const videoDrag = (e,id)=>{
    console.log('inside video drag');
    console.log(`id is ${id}`);
    e.dataTransfer.setData("videoId",id)
  }

  return (
    <div>
      <Card onClick={handleShow}   style={{ width: '100%' }} className='mt-5' draggable onDragStart={(e)=>videoDrag(e,displayVideo?.id)}>
      {!isPresent && <Card.Img variant="top" src={displayVideo?.imgUrl} width={'100%'} height={'300px'} />}
      <Card.Body className='d-flex justify-content-between'>
        <Card.Text>{displayVideo?.caption.slice(0,10)}</Card.Text>
       
       {!isPresent && <Button variant="danger" onClick={()=>handleDelete(displayVideo?.id)} style={{height:'50px'}}><FontAwesomeIcon icon={faTrash}  /></Button>}
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="514" src={`${displayVideo?.embedLink}?autoplay=1`} title="Aadujeevitham |The GoatLife Official Trailer | A R Rahman| Prithviraj Sukumaran| Amala Paul| Blessy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
        
      </Modal>

    </div>
  )
}

export default VideoCard
