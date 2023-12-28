import React from 'react';
import { Link } from 'react-router-dom';
import { FaMobileScreenButton } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiSpacex } from "react-icons/si";
import { useSpring, animated } from 'react-spring';
import styles from './styles.module.css';

export const Home = () => {
  const text = "Transforming Vision Into Realities";

  const animationProps = useSpring({
    from: { opacity: 0 },
    to: async (next) => {
      for (let i = 0; i < text.length; i++) {
        await next({ opacity: 1 });
      }
    },
    config: { duration: 2000 },
  });
  return (
    <div>
      <nav class={`navbar navbar-expand-lg navbar-dark ${styles.bgc} ${styles.nbht}`}aria-label="Ninth navbar example">
    <div class="container-xl">
      <Link class="navbar-brand" to="#"><h3>C {`{ }`}B I N</h3></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExample07XL">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <Link class="nav-link active me-3 fs-5" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link active me-3 fs-5" href="#">Services</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link active  me-3 fs-5" href="#" >Portfolio</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link active me-3 fs-5" href="#">Products</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link  active me-3 fs-5" href="#">Blog</Link>
        </li>
        
    </ul>
    <button type="button" class="btn btn-warning fs-5">Contact Us</button>

</div>

    </div>
  </nav>
  <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
    <div class="col-md-6 p-lg-5 mx-auto my-5">
    <animated.h1
      className="display-3 fw-bold py-5"
      style={{
        color: "#116466",
        ...animationProps,
      }}
    >
      {text.split("").map((char, index) => (
        <animated.span key={index}>{char}</animated.span>
      ))}
    </animated.h1>
      
      <div class="d-flex gap-3 justify-content-center lead fw-normal">
        
      </div>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>




  <div class="p-5 mt-2 text-center " style={{ backgroundImage: "url('/bgi.svg')" }}>
    <div class="container py-5">
      <h5 style={{color:"#f8c92a"}}>Mission</h5>
      <h4 class="col-lg-8 mx-auto " style={{color:" #e7f0f0"}}>
      Help customers achieve their business goals by delivering transformative excellence with 
      pioneering technology solutions, crafted with patience and that stands the test of time.
       </h4>
    </div>
  </div>


  <div class="container px-4 py-5" id="icon-grid">
    <h2 class="pb-2 text-center display-4">Our Competencies</h2>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div class="col d-flex align-items-start">

      <div class={`card border-success mb-3 ${styles.csize}`}>
      
      <div class="card-body ">
      <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3 m-2">
             <div class="container px-3 py-2"> 
              <FaMobileScreenButton />
              </div> 
             
              
            </div>
      <h2 class="card-title m-2 mt-3">Mobile Application</h2>
       
       </div>
      </div>

      </div>
      <div class="col d-flex align-items-start">
      <div class={`card border-warning mb-3 ${styles.csize}`} >
  
     <div class="card-body">
     <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-warning bg-gradient fs-4 rounded-3 m-2">
             <div class="container px-3 py-2"> 
             <CgWebsite />
              </div> 
             
              
            </div>
       <h2 class="card-title m-2 mt-3">Website Development</h2>
   
      </div>
     </div>
      </div>
      <div class="col d-flex align-items-start">
       

      <div class={`card border-success mb-3 ${styles.csize}`}>
      
      <div class="card-body ">
      <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3 m-2">
             <div class="container px-3 py-2"> 
             <MdOutlineDesignServices />
              </div> 
             
              
            </div>
      <h2 class="card-title m-2 mt-3">UI/UX</h2>
       
       </div>
      </div>
      </div>
      <div class="col d-flex align-items-start">

      <div class={`card border-warning mb-3 ${styles.csize}`} >
  
  <div class="card-body ">
  <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-warning bg-gradient fs-4 rounded-3 m-2 ">
             <div class="container px-3 py-2 "> 
             <HiOutlineSpeakerphone />
              </div> 
             
              
            </div>
    <h2 class="card-title m-2 mt-3">Branding</h2>

   </div>
  </div>
      </div>
  
    </div>
  </div>


  <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 text-center display-4">Blogs</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
         
        </div>
        <img src="https://source.unsplash.com/random/?technology" class="img-thumbnail" alt="..." style={{width:"400px", height:"200px"}}/> 
        <p class="card-text mt-1"><small class="text-body-secondary">November 27, 2023</small></p>
        <h3 class="fs-2 text-body-emphasis">We Increase More Traffic & More Sales</h3>
        <Link to="#"  style={{color: "#418385"}}>
        <h4>Read More</h4>
        </Link>
      </div>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          
        </div>
        <img src="https://source.unsplash.com/random/?technology" class="img-thumbnail" alt="..." style={{width:"400px", height:"200px"}}/>
        <p class="card-text mt-1"><small class="text-body-secondary">November 27, 2023</small></p>
        <h3 class="fs-2 text-body-emphasis">5 Content Management System You Should Know</h3>
        
        <Link to="#"  style={{color: "#418385"}}>
        <h4>Read More</h4>
        </Link>
      </div>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          
        </div>
        <img src="https://source.unsplash.com/random/?technology" class="img-thumbnail" alt="..." style={{width:"400px", height:"200px"}}/>
        <p class="card-text mt-1"><small class="text-body-secondary">November 27, 2023</small></p>
        <h3 class="fs-2 text-body-emphasis">We Increase More Traffic & More Sales</h3>
        
        <Link to="#"  style={{color: "#418385"}}>
        <h4>Read More</h4>
        </Link>
      </div>
    </div>
  </div>

  <div class="container my-5" style={{ backgroundImage: "url('/bgi2.svg')" }}>
  <div class="p-5 text-centerrounded-3">
    <h1 class="text-body-emphasis">Let's Connect!</h1>
    <p class="mt-5 d-flex justify-content-end">
    <button type="button" class="btn btn-outline-dark p-2 px-3 mx-2"><h5>Let's talk</h5></button>
    <button type="button" class="btn btn-outline-warning p-2 px-3 mx-2"><h5>Call Back</h5></button>
    </p>
  </div>
</div>

<div class={` ${styles.fbgc}`}>
<footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
    <div class="col mb-2 ms-5 mt-5">
      <Link to="#" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
      <h1  style={{ color: "#ffffff" }}>C {`{ }`}B I N</h1>
      </Link>
      <p style={{ color: "#ffffff" }}>We are Mumbai Based Mobile Applications
       Development, UI/UX Designing and
       Websites Development Company.</p>
       <p  style={{ color: "#ffffff" }}>hello@corbintech.co.in</p>
       <p  style={{ color: "#ffffff" }}>7304858067</p>
      
    </div>

    <div class="col mb-2">

    </div>

    <div class="col mb-2 ms-5">
      <h3 style={{ color: "#f8c92a" }}>Section</h3>
      <ul class="nav flex-column">
      <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 link-light">Mobile Application</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 link-light">Website Development</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 link-light">Pricing</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 link-light">UI/UX</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 link-light">Branding</Link></li>
      </ul>
    </div>



    <div class="col mb-2 ms-5">
      <h3 style={{ color: "#f8c92a" }}>Company</h3>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 link-light">About us</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 link-light">Projects</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 link-light">Contact us</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 link-light">Blogs</Link></li>
       
      </ul>
    </div>

    

  </footer>
  <div class="d-flex flex-column flex-sm-row justify-content-center py-2 ">
      <h3 class="mb-3"> 
       
        <Link class="m-2" style={{color:"#f8c92a"}}  to="#"><FaInstagram /></Link>
        <Link class="m-2" style={{color:"#f8c92a"}} to="#"><FaLinkedin /></Link>
        <Link class="m-2" style={{color:"#f8c92a"}} to="#"><SiSpacex /></Link>
      
      </h3>
    </div>
       <p class="text-center" style={{color:"#ffffff"}}>© 2023 Corbin Technology Solution. All Rights Reserved</p>
    </div>
    </div>
  );
};

export default Home;
