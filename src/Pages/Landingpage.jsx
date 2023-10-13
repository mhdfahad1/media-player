import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Landingpage() {
  return (
    <>
      <Row className='mb-5 align-items-center'>
        <Col></Col>
        <Col md={4}>
          <h3 className='mb-3'>Welcome to <span className='text-warning '>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque blanditiis, dicta, recusandae facilis exercitationem veritatis sed quam quidem nesciunt dolorum assumenda, reiciendis repudiandae ipsa ullam fugiat excepturi quis in porro.</p>
          <Link to='/home'>          <button className='btn btn-success fw-bolder'>Get Started</button>
          </Link>
        </Col>
        <Col></Col>

        <Col md={6}>
          <img className='img-fluid' src="https://th.bing.com/th/id/OIP.-lvoPlkomIUeKLaB4LwRTQHaIR?pid=ImgDet&rs=1" alt="" />
        </Col>

      </Row>
      <div className='container mt-5 mb-5 d-flex flex-column justify-content-center align-items-center'>
        <h3>Features</h3>
        <div className='features mt-5 d-flex justify-content-between w-100' >
          <Card style={{ width: '20rem' }}>
            <Card.Img style={{ height: '300px', width: '300px' }} variant="top" src="https://www.bing.com/ck/a?!&&p=233635488e759230JmltdHM9MTY5NjExODQwMCZpZ3VpZD0wNDI4OTk2OC01YjJkLTY5NTctMWI2ZC04YTQ4NWFiNjY4ZmUmaW5zaWQ9NTYwMQ&ptn=3&hsh=3&fclid=04289968-5b2d-6957-1b6d-8a485ab668fe&u=a1L2ltYWdlcy9zZWFyY2g_cT1zZXR0aW5nIGNvbG91cmVkIGljb24gZ2lmJkZPUk09SVFGUkJBJmlkPTRBRUY5ODkyQTYxRTAwNTQ0RjNFQ0IyRTg1QkU5Q0Y3NUNCRDAxNDg&ntb=1" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '20rem' }}>
            <Card.Img style={{ height: '300px', width: '300px' }} variant="top" src="https://www.bing.com/ck/a?!&&p=233635488e759230JmltdHM9MTY5NjExODQwMCZpZ3VpZD0wNDI4OTk2OC01YjJkLTY5NTctMWI2ZC04YTQ4NWFiNjY4ZmUmaW5zaWQ9NTYwMQ&ptn=3&hsh=3&fclid=04289968-5b2d-6957-1b6d-8a485ab668fe&u=a1L2ltYWdlcy9zZWFyY2g_cT1zZXR0aW5nIGNvbG91cmVkIGljb24gZ2lmJkZPUk09SVFGUkJBJmlkPTRBRUY5ODkyQTYxRTAwNTQ0RjNFQ0IyRTg1QkU5Q0Y3NUNCRDAxNDg&ntb=1" />
            <Card.Body>
              <Card.Title>Categorise Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '20rem' }}>
            <Card.Img style={{ height: '300px', width: '300px' }} variant="top" src="https://www.bing.com/ck/a?!&&p=233635488e759230JmltdHM9MTY5NjExODQwMCZpZ3VpZD0wNDI4OTk2OC01YjJkLTY5NTctMWI2ZC04YTQ4NWFiNjY4ZmUmaW5zaWQ9NTYwMQ&ptn=3&hsh=3&fclid=04289968-5b2d-6957-1b6d-8a485ab668fe&u=a1L2ltYWdlcy9zZWFyY2g_cT1zZXR0aW5nIGNvbG91cmVkIGljb24gZ2lmJkZPUk09SVFGUkJBJmlkPTRBRUY5ODkyQTYxRTAwNTQ0RjNFQ0IyRTg1QkU5Q0Y3NUNCRDAxNDg&ntb=1" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>


        <div className='container border rounded p-5 border-secondary shadow mt-5 mb-5 d-flex justify-content-between align-items-center'>
          <div className="content">
            <h4 className='text-warning'>Simple, Fast and powerful</h4>
            <h6><span className='fs-5 me-3'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus labore fugit aut quas facere quam laborum possimus nihil qui vel
              unde reiciendis deserunt, magnam earum quos excepturi explicabo! Inventore.</h6>
            <h4 className='text-warning'>Simple, Fast and powerful</h4>
            <h6><span className='fs-5 me-3'>Categories Videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus labore fugit aut quas facere quam laborum possimus nihil qui vel
              unde reiciendis deserunt, magnam earum quos excepturi explicabo! Inventore.</h6>
            <h4 className='text-warning'>Simple, Fast and powerful</h4>
            <h6><span className='fs-5 me-3'>Managing History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus labore fugit aut quas facere quam laborum possimus nihil qui vel
              unde reiciendis deserunt, magnam earum quos excepturi explicabo! Inventore.</h6>

          </div>

          <div className='video'>
            <iframe width="688" height="315" src="https://www.youtube.com/embed/coO17J1b8-I?si=ozy_sk9nM41ruVNm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

      </div>
    </>
  )
}

export default Landingpage