import React from 'react'
import {Col, Row} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
    <div className="row p-5 my-5">
      <div className="col-md-1"></div>
      <div className="col-md-5">
            <h4>Welcome to <span className='text-warning'>Media Player</span></h4>
            <p className='mt-4' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus ex fuga labore, nostrum velit odit. Voluptate corporis consequuntur impedit voluptates, perferendis vitae veniam illo corrupti at et incidunt atque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora tempore unde suscipit officiis autem laborum ipsa? Eaque, id blanditiis aspernatur ad veniam consequuntur inventore incidunt odio odit ab, expedita alias.</p>

            <Link to={'/home'}><button className='btn btn-warning mt-4'>Get Started</button></Link>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-5 p-4 d-flex justify-content-center align-items-center">
        <img src="https://i.gifer.com/CH7i.gif" alt="image" className='w-50' />
      </div>
    </div>
   <div className='pt-5'>
    <h3 className='my-5 text-center' >Features</h3>
      <Row className='mb-5'>
        <Col md={1}></Col>
        <Col md={3} className='p-5 p-md-0'>
        <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/3e/fe/1c/3efe1cb845954233246f60d5d8395dd0.gif" style={{width:'100%', height:'300px'}} />
        <Card.Body>
          <Card.Title>Managing Video</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={4} className='d-flex justify-content-center'>
        <Card style={{ width: '80%' }}>
        <Card.Img variant="top" src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1025.gif" style={{width:'100%', height:'300px'}} />
        <Card.Body>
          <Card.Title>Categorized Video</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={3} className='p-5 p-md-0'>
        <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src="https://cdn.dribbble.com/users/1445486/screenshots/3856847/ondas-small.gif" style={{width:'100%', height:'300px'}} />
        <Card.Body>
          <Card.Title>Watch History</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={1}></Col>
  
        
      </Row>
   </div>
   <div  className=' row pt-md-5 pb-5  '>
      <div className="col-md-1"></div>
      <div className="col-md-10 border p-4 border-2 rounded">
        <Row>
          <Col md={6} className='p-3'>
            <h3 className='text-warning mb-5'>Simple Fast and Powerful</h3>
            <p style={{textAlign:'justify'}}><span className='fs-5'>Lorem ipsum dolor:</span> sit amet consectetur adipisicing elit. Error minima necessitatibus fugiat quas, labore, veniam officia et molestiae odio asperiores tempora vitae nam nisi enim laboriosam tenetur itaque totam voluptatum?</p>
            <p style={{textAlign:'justify'}} className='mt-3'><span className='fs-5'>Lorem ipsum dolor:</span> sit amet consectetur adipisicing elit. Incidunt aut, ipsum expedita facilis odio minus accusamus perspiciatis, suscipit hic eum voluptatum molestiae officia repellendus. Nobis beatae ut maiores officiis necessitatibus.</p>
            <p style={{textAlign:'justify'}} className='mt-3'><span className='fs-5'>Lorem ipsum dolor:</span> sit amet consectetur, adipisicing elit. Nisi nesciunt officia dolores voluptatem sapiente omnis sunt, sed, suscipit delectus iure dolorum sequi. Dolore vitae natus dolorum officiis iste nulla quaerat?</p>
          </Col>
          <Col md={6} className='p-3'>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OPazrdwYAm0" title="Ruaan Full Song | Tiger 3 | Salman Khan, Katrina Kaif | Pritam, Arijit Singh, Irshad Kamil, New Song" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
      <div className="col-md-1"></div>
   </div>
    </>
  )
}

export default Landingpage
