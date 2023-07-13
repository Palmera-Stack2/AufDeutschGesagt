import React, { useState } from 'react';
import { FaBlog } from 'react-icons/fa';
import Boat from '/assets/Robin am Hafen.jpg';
import '../sections/Blog.css'

function Blog() {
  const [showText, setShowText] = useState(false);
  const [isClicked, setIsClicked] = useState('Read More');

  const handleReadMore = () => {
    setShowText(!showText);
    setIsClicked('Read More');
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col'>
          <FaBlog size={35} />
        </div>
        <div className='col'>
          <h4 className='text-end'>Blog</h4>
        </div>
      </div>
      <hr className='first-hr'/>
      <div className='row' style={{ marginTop: '50px' }}>
        <div className='col-sm-4'>
          <img className='slide' src={Boat} alt='First slide' />
        </div>
        <div className='col-sm-8'>
          <h6 style={{ marginLeft: '-15px' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In assumenda officia ad illum fugiat. Soluta in ea
            ipsam officia nihil neque veniam vel voluptatum voluptates inventore! Laudantium quibusdam corporis nulla!
          </h6>
          <button
            className='read-more-btn'
            style={{ backgroundColor: '#D4D3D3', color: '#000000', marginTop: '30px' }}
            onClick={handleReadMore}
          >
            {isClicked ? 'Read More' : 'Read Less'}
          </button>
        </div>
      </div>
      <hr className='second-hr' style={{ marginTop: '50px' }} />
      {showText && (
        <div style={{ marginTop: '50px' }}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid distinctio earum accusantium quisquam vel debitis? Labore nobis assumenda exercitationem.</p>
          <p>consectetur adipiscing elit,</p>
          <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      )}
    </div>
  );
}

export default Blog;
