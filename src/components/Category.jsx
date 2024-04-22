import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoCard from './VideoCard';
import { Col, Row } from 'react-bootstrap';
import { addCategoryApi, deleteCategoryApi, getAVideo, getAllCategoryApi, updateCategoryApi } from '../services/allAPI';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Category({dragOutVideoStatus, setVideoDragOutStatus}) {
  const [show, setShow] = useState(false);
  const [categoryName, setcategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [addCategoryStaus, setAddCAtegoryStatus] = useState(false)
  const [deleteCategoryStaus, setDeletecategoryStatus] = useState(false)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async()=>{
    let reqBody = {
      category : categoryName,
      allVideos : []
    }
    if(allCategory?.length==0){
      
    const response = await addCategoryApi(reqBody)
    console.log(response);
    if(response.status>=200 && response.status<300){
      alert('added successfully')
      toast.success('Category Added Successfully')
      setcategoryName("")
      setAddCAtegoryStatus(true)
        handleClose()
    }
    else{
      toast.error('Something went wrong')
    }
    }
    else{
      const exisitingCategory = allCategory.find(item =>item.category ==categoryName)
      if(exisitingCategory){
        toast.warning('Category Already Exist')
        setcategoryName("")
        handleClose()
      }
      else{
        const response = await addCategoryApi(reqBody)
        console.log(response);
        if(response.status>=200 && response.status<300){
         // alert('added successfully')
         toast.success(" Category Added Successfully !", {
          position: toast.POSITION.TOP_CENTER,
        })
                  setcategoryName("")
          setAddCAtegoryStatus(true)
            handleClose()
        }
        else{
          toast.error('Something went wrong')
        }
      }
    }
  }

  //function to get all category
  const getAllCategory = async()=>{
    const response = await getAllCategoryApi()
    setAllCategory(response.data)
  }

  //function to delete category
  const handleDelete = async(id)=>{
    const result = await deleteCategoryApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setDeletecategoryStatus(true)
    }
  }
  console.log(allCategory);

  //function to prevent dataloose
  const dragOver=(e)=>{
    e.preventDefault()
  }

  // function to drop
  const videoDrop =async(e,catid)=>{
    console.log('inside drop function');
    console.log(`category id is ${catid}`);
    const videoId = e.dataTransfer.getData("videoId")
    console.log(videoId);
    const {data} = await getAVideo(videoId)
    console.log(data);

    const selectedCategory = allCategory.find(item =>item.id==catid)
    console.log(selectedCategory);

    if(selectedCategory.allVideos.find(item => item.id == data.id)){
      toast.error('Video Already Exist')
    }
    else{
      console.log(selectedCategory);
      selectedCategory.allVideos.push(data)
    }
    await updateCategoryApi(catid, selectedCategory)

    getAllCategory()

  }
//function to send the details of card to view 
const dragStart = (e, categoryId, videoId)=>{
  console.log(categoryId);
  console.log(videoId);
  let sharedData  ={
    categoryId,
    videoId
  }
  e.dataTransfer.setData("sharedData",JSON.stringify(sharedData))

}

  useEffect(()=>{
    getAllCategory()
    setAddCAtegoryStatus(false)
    setDeletecategoryStatus(false)
    setVideoDragOutStatus(false)
  },[addCategoryStaus, deleteCategoryStaus,dragOutVideoStatus])



  return (
    <>
    <div className='d-flex justify-content-center align-items-center mt-5 mt-md-0 mb-5'>
      <button className='btn btn-warning w-100'  onClick={handleShow}>Add New Category</button>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <FontAwesomeIcon className='text-warning' icon={faPen} />Add New category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='my-3 border rounded p-4'>
            <label htmlFor="cname" className='mb-3'>Category Name</label>
            <input id='cname' type="text" placeholder='Enter Category Name' className='form-control'  onChange={(e)=>setcategoryName(e.target.value)}/>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="Warning" onClick={handleAddCategory}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>

      {allCategory?.length>0?
      allCategory?.map((video)=>( 
      <div className='border border-secondary w-100 p-3 rounded mt-3'droppable="true" onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,video?.id)}>
      <div className='d-flex justify-content-between align-items-center'>
        <p>{video?.category}</p>
        <button onClick={()=>handleDelete(video?.id)} className='btn btn-warning'><FontAwesomeIcon icon={faTrash} /></button>
      </div>
      <Row>
      { video.allVideos.length>0?
      video.allVideos.map((card)=>( <Col sm={12} draggable onDragStart={(e)=>dragStart(e, video.id, card.id)}>
        <VideoCard displayVideo={card} isPresent ={true}/>
      </Col>))
      :null
      }
      </Row>
    </div>))
       
      :
      <p className='text-warning mt-5'>No Category Added Yet ...</p>}
    <ToastContainer />
      {/* <ToastContainer theme='colored' position='top-centered' autoClose={2000} /> */}

    </>
  )
}

export default Category
