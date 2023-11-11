import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoStatus}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Videos , setVideos] = useState({
      id:"",
      caption:"",
      url:"",
      embedLink:""

    })

    const embedVideoLink = (e)=>{
        const {value} = e.target
        console.log(value.slice(-11));
        const link = `https://www.youtube.com/embed/${value.slice(-11)}`
        setVideos({...Videos , embedLink:link})
    }
console.log(Videos);


const handleUpload = async()=>{
     
      const {id , caption , url , embedLink} = Videos
      if(!id || !caption || !url || !embedLink){
        toast.warning("Please fill the form completely")
      }
      else{
        const response = await uploadVideo(Videos)
        console.log(response);
        if(response.status>=200 && response.status<300){

          setUploadVideoStatus(response.data)
          toast.success("Uploaded successfully")


          //close modal
          handleClose()
        }
        else{
          console.log(response);
          toast.error("Something went wrong. Try again later")
        }
      }
}

  return (
    <>
     <div className='d-flex align-items-center'>
       <h5>Upload New Video</h5>
       <button onClick={handleShow} className='btn'><i class='fa-solid fa-cloud-arrow-up fs-5'></i></button>
     </div>

     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class='fa-solid fa-film me-2 text-warning'></i>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-secondary p-3 rounded'>

               <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideos({...Videos,id:e.target.value})}/>
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideos({...Videos,caption:e.target.value})}/>
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Control type="text" placeholder="Enter Video Image URL"  onChange={(e)=>setVideos({...Videos,url:e.target.value})}/>
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Control type="text" placeholder="Enter YouTube Video Link" onChange={embedVideoLink} />
               </Form.Group>

            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Add