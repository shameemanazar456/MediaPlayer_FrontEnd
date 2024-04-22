import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='row p-5 mt-md-5'>
      <div className="col-md-4">
        <h3 className='mb-3'> <FontAwesomeIcon icon={faVideo} className='text-warning me-3' /> Media Player</h3>
        <p className='mt-3' style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis vitae quae voluptatum veniam similique eos enim autem vel laboriosam, hic inventore, aperiam minus, nemo quia quis commodi dolores neque.</p>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-2 ">
        <h4>Links</h4>
        <Link to={'/'}><p className='mt-3'>Landing Page</p></Link>
        <Link to={'/home'}><p>Home Page</p></Link>

        <Link to={'/watch-history'}><p>Watch History Page</p></Link>
      </div>
      <div className="col-md-2">
        <h4>Guides</h4>
        <p className='mt-3'>React</p>

        <p>React Bootstap</p>
        <p>BootsWatch</p>
      </div>
      <div className="col-md-3">
        <h4>Contacts</h4>
        <div className='d-flex mt-3'>
          <input type="text" placeholder='Email Id' className='form-control'/>
          <button className='btn btn-warning ms-3'>Subscibe</button>

        </div>
        <div className='d-flex justify-content-between mt-4'>
        <FontAwesomeIcon icon={faInstagram} size='2xl' />
        <FontAwesomeIcon icon={faFacebook} size='2xl' />
        <FontAwesomeIcon icon={faTwitter} size='2xl'/>
        <FontAwesomeIcon icon={faLinkedin} size='2xl' />

        </div>
      </div>
    </div>
  )
}

export default Footer
