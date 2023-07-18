import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import HafenImage from '../../assets/Hafen.jpg';
import blogStyle from './Blog.module.css';

function Blog() {
  const [showText, setShowText] = useState(false);
  const [isClicked, setIsClicked] = useState(true);


  const handleReadMore = () => {
    setShowText(!showText);
    setIsClicked('Read Less');
  };

  return (
    <div className={blogStyle.blogSection} >
      <div  className={blogStyle.blogHeader}>
        <div>
          <FontAwesomeIcon className={blogStyle.iconBlog} icon={faBlog} size="2x" />
        </div>
        <div className={blogStyle.blogHeader} >
          <h4 className={blogStyle.heading}>Blog</h4>
        </div> 
      </div>
        <div className={blogStyle.hrDiv}>
          <hr className={blogStyle.Hr} />
        </div>
        <div className={blogStyle.blogContent}>
          <div className={blogStyle.blogImage}>
            <img src={HafenImage} alt="Hafen" />
          </div>
          <div className={blogStyle.blogText}>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. In assumenda officia ad illum fugiat, assumenda!</p> 
            <button className={blogStyle.readMoreBtn}
                onClick={handleReadMore}
              >
                {isClicked ? 'Read More ' : 'Read Less'}
              </button>
          </div>
          </div>
            <div className={blogStyle.line}>
              <hr className={blogStyle.linee} />
            </div>
          {showText && (
          <div className={blogStyle.para}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid distinctio earum accusantium quisquam vel debitis? Labore nobis assumenda exercitationem, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid distinctio earum accusantium quisquam vel debitis?.</p>
          </div>
          )}
    </div>
  );
}

export default Blog;

















 {/* <div className='container-2'>
            <div className='image'>
              <img src={HafenImage} alt="Hafen" />
            </div>
          </div>  
            <div className='content'>
              <h6>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In assumenda officia ad illum fugiat. Soluta in ea
                ipsam officia nihil neque veniam vel voluptatum voluptates inventore! Laudantium quibusdam corporis nulla!
              </h6>
              <button className='read-more-btn'
                onClick={handleReadMore}
              >
                {isClicked ? 'Read More' : 'Read Less'}
              </button>
            </div>
        <hr className='second-hr' />
        {showText && (
        <div className='para'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid distinctio earum accusantium quisquam vel debitis? Labore nobis assumenda exercitationem.</p>
          <p>consectetur adipiscing elit,</p>
          <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        )} */}