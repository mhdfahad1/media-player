import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div style={{height:'100%'}} className='bg-primary text-light'>
      <div  className='d-flex ' style={{ width: '100%' ,padding:'10px'}}>
      <hr className='fs-3'/>
      <div style={{marginLeft:'100px'}} className='w-25 align-item-center '>
        <h4>
          <i className="fa-solid fa-cloud-arrow-up fa-bounce"></i>{' '}
          Media Player   <br />
        </h4>
        <p>
          Designed and built with all the love in the world by the bootstrap team <br />
          code licensed MIT,docs CC BY 3.0

        </p>
      </div>

      <div style={{marginLeft:'100px'}}  className=''>
        <h4>Links</h4>
        <Link style={{textDecoration:'none',color:'white'}} to={'/'}>Landing Page</Link><br />
        <Link style={{textDecoration:'none',color:'white'}} to={'/home'}>Home</Link><br />
        <Link style={{textDecoration:'none',color:'white'}} to={'/watch-history'}>watch history</Link>

      </div>

      <div style={{marginLeft:'100px'}}   className=''>
        <h4>Guides</h4>
        <Link style={{textDecoration:'none',color:'white'}} to={'https://react.dev/'}>React</Link><br />
        <Link style={{textDecoration:'none',color:'white'}} to={'https://react-bootstrap.netlify.app/'}>React Bootstrap</Link><br />
        <Link style={{textDecoration:'none',color:'white'}} to={'/'}>Routing</Link>
      </div>
      </div>
      <p  className='justify-content-center text-center align-item-center'>Copyright @ 2023 Media Player. Built with React</p>


    </div>
  )
}

export default Footer