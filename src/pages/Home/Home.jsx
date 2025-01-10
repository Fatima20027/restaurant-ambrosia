import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import home2 from '../../assets/2-home.png';
import home3 from '../../assets/3-home.png';
import { Parallax } from 'react-parallax';
import bgImage from '../../assets/0-home.png';
import home4 from '../../assets/home4.webp';
import home5 from '../../assets/home5.webp';
import home6 from '../../assets/home6.webp';
import home7 from '../../assets/home7.webp';
import home8 from '../../assets/home8.webp';
import home9 from '../../assets/home9.webp';
import home10 from '../../assets/home10.webp';
import home11 from '../../assets/home11.webp';
import home12 from '../../assets/home12.webp';
import home13 from '../../assets/home13.webp';


const Home = () => {
  return (
    <div className="home-container">
      <Parallax
        className='parallax'
        bgImage={bgImage}
        strength={600}
        bgImageStyle={{
          width: '100%',
          height: '120%',
        }}
      >
        <div style={{ height: '100vh', alignItems: 'start', paddingTop: '3rem', paddingLeft: '3rem' }}>
          <h1 style={{ color: '#000', fontSize: '2.5rem', paddingTop: '1rem'}}>
            BRASSERIE <br /> & BAR
          </h1>
        </div>
      </Parallax>

      <div className="container-fluid">
        <div className="d-flex flex-column flex-md-row p-5 text-center text-md-start">
          <h2 className="section2-title col-md-6 mb-4 mb-md-0">OUR MENU</h2>
          <div className="col-md-5">
            <p>
            Discover a delightful selection of dishes crafted with the freshest ingredients and inspired by flavors from around the world. Our menu caters to all tastes, offering everything from classic comfort food to innovative culinary creations. Whether you're stopping by for a casual lunch, a celebratory dinner, or a quick bite, you'll find something to satisfy your cravings.
            </p>
            <Link to="/menu" className="fs-3 text-black">
              EXPLORE MORE
            </Link>
          </div>
        </div>

        <div className="row section3-img">
          <div className="col-12 col-md-6">
            <img src={home2} alt="img-home2" className="img-fluid mb-2" />
          </div>
          <div className="col-12 col-md-6">
            <img src={home3} alt="img-home3" className="img-fluid" />
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row p-5 text-center text-md-center sec3">
          <h2 className="section2-title col-md-6 mb-4 mb-md-0 text-center">IT'S ALWAYS MORE THAN GOOD FOOD</h2>
          <div className="col-md-4 text-start fs-6">
            <p>
            At our restaurant, we believe that a meal is more than just food on a plate—it's an experience. From the moment you walk through our doors, you're welcomed into an atmosphere of warmth, care, and passion for exceptional dining. Every dish we serve is a reflection of our dedication to quality, creativity, and unforgettable moments shared over a table.
            </p>
            <Link to="/menu" className="fs-3 text-black btn-menu">
              ABOUT US
            </Link>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row p-5 text-center text-md-start">
          <h2 className='section2-title col-md-10 mb-4 mb-md-0'>PUREMENT MOMENTS</h2>
          <Link to='/' className="fs-3 text-black btn-menu " >FOLLOW US</Link>
        </div>

        

      </div>

      <div className="gallery horizontal-scrollable">
          <img src={home4} alt="Image 1" />
          <img src={home5} alt="Image 2" />
          <img src={home6} alt="Image 3" />  
          <img src={home7} alt="Image 4" />
          <img src={home8} alt="Image 5" />
          <img src={home9} alt="Image 6" />
          <img src={home10} alt="Image 7" />
          <img src={home11} alt="Image 8" />
          <img src={home12} alt="Image 9" />
          <img src={ home13 } alt="Image 10" />
        </div>
    </div>
  );
};

export default Home;
