import React, { useEffect } from 'react'
import { useState } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { addCategory, deletecategory, getAllCategory, getAvideos, updatecategory } from '../services/allAPI';
import 'react-toastify/dist/ReactToastify.css';
import Videocard from './Videocard';




function Category() {
  const  [categories,setCategories]=useState([])
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const insertCategory = async () => {
    if (categoryName) {
      const body = {
        categoryName,allVideos:[]
      }
      // make api call
      const response = await addCategory(body)
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        // reset state

        setCategoryName("")
        // modal hide
        handleClose()
        // all categories
        getCategories()
        // toast
        toast.success("successfully added")
      } else {
        toast.warning("uploading error!!try again later")
      }
    } else {
      // alert
      toast.info("please fill the form completely")
    }
  }
  // get category
  const getCategories=async()=>{
    const {data}=await getAllCategory()
    setCategories(data)
  }
  // delete category
  const removeCategory=async(id)=>{
    // make api call
    await deletecategory(id)

     // get getCategories
     getCategories()
  }

  const dragOverCategory=(e)=>{
    console.log("Dragging over category");
    e.preventDefault()
  }
  const videoDrop=async(e,categoryId)=>{
    console.log("inside drop function");
    console.log("Category id:"+categoryId);
    const videoCardId=e.dataTransfer.getData("cardId")
    console.log("video card id:"+videoCardId);
    // get video details
    const {data}=await getAvideos(videoCardId)
    let selectedCategory=categories.find(item=>item.id===categoryId)
     selectedCategory.allVideos.push(data)
     await updatecategory(categoryId,selectedCategory)

     getCategories()
      }
  useEffect(()=>{
    getCategories()
  },[])


  return (
    <>
      <div className='d-grid'>
        <button onClick={handleShow} className='btn btn-info'>Add New Category</button>

      </div>
      {
        categories?categories.map(item=>(
          <div className='border p-3 rounded mt-3 mb-3 shadow' droppable onDragOver={(e)=>dragOverCategory(e)}
          onDrop={(e)=>videoDrop(e,item?.id)}> 
            <div className='d-flex justify-content-between'>
              <h5>{item?.categoryName}</h5>
              <button onClick={()=>removeCategory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>

            </div>
            <Row>
              {
                item?.allVideos&&item?.allVideos.map(card=>(
                  <Col sm={12} className='p-1 mb-2'>
                    <Videocard displayData={card} insideCategory={true}/>
                  </Col>
                ))
              }
            </Row>
          </div>
        )):
        <p className='fw-bolder fs-5 text-danger mt-3'>Sorry nothing to display!!!</p>


      }
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill The Following Details!!</p>
          <Form className='border p-3 rounded border-secondary'>
          
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Enter Category Name" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button onClick={insertCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>


      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
      />
    </>
  )
}

export default Category