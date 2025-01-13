import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Swal from 'sweetalert2';

const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append('access_key', 'dcbbbe00-0563-46bd-b7aa-55f920d16407');

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: json,
  }).then((res) => res.json());

  if (res.success) {
    Swal.fire({
      title: "Success",
      text: "Your message has been successfully sent!",
      icon: "success"
    });
  }
};

const About = () => {
  return (
    <div className="contact-about-wrapper">
      <div className="container">
        <div className="about row ">
        <div className="about-title-wrapper col-12 col-md-6 mb-4 mb-md-0 text-start">
  <h2 className="section-title">ABOUT</h2>
  <svg
    version="1.1"
    id="restaurant"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    className="icon-about"
  >
    <g id="row1">
      <path
        id="icon"
        className="st0"
        d="M48.9 51.8c-9 2.5-16.8 8.1-21.9 15.9l1.4.9c4.9-7.4 12.4-12.8 21-15.2l-.5-1.6zm0 0c-9 2.5-16.8 8.1-21.9 15.9l1.4.9c4.9-7.4 12.4-12.8 21-15.2l-.5-1.6zM119.8 93c-.9-25.5-19.5-46.7-44.1-51.9-1.1-5.3-5.9-9.4-11.7-9.4s-10.6 4-11.7 9.4C27.7 46.2 9.1 67.4 8.3 93H0v3.4h128V93h-8.2zM64 35c3.6 0 6.7 2.2 7.9 5.3-2.6-.4-5.2-.6-7.9-.6s-5.3.2-7.9.6c1.2-3 4.3-5.3 7.9-5.3zM11.7 93c1-27.6 24.1-49.7 52.3-49.7s51.3 22.1 52.3 49.7H11.7z"
      />
    </g>
  </svg>
</div>

          <div className="col-12 col-md-5 text-start paragraph-c">
            <p>
            Welcome to our story. Our journey began with a passion for bringing people together over exceptional food and memorable experiences. From humble beginnings, we’ve grown into more than just a restaurant—we’re a place where flavors inspire and connections thrive.
            </p>
            <p>
            Our dedicated team takes pride in crafting dishes that reflect a perfect blend of tradition and innovation, using only the finest ingredients. Beyond our menu, we offer a warm, inviting space where you can relax, celebrate, or simply enjoy the moment.
            </p>
            <p>
            What sets us apart? It’s our commitment to you. We listen, adapt, and strive to exceed your expectations, ensuring every visit leaves you with a smile. Whether it’s a casual meal, a family gathering, or a special event, we’re here to make it unforgettable.
            </p>

            <p>
              We’re not just about food; we’re about creating an experience that stays with you long after the last bite. Thank you for letting us be a part of your journey.
            </p>
          </div>
        </div>

        <div className="contact row mt-5">
          <h2 id='contact-title' className="col-12 col-md-6 mb-4 mb-md-0 text-start section-title " >CONTACT</h2>
          <div className="col-12 col-md-6 text-start">
            <div className="contact-info row">
              <div className="col-12 col-md-6">
                <p>500 Terry Francine St. <br /> San Francisco CA 94158</p>
                <p>123 - 456 - 7890</p>
              </div>
              <div className="col-12 col-md-6">
                <p>MON - FRI: 5PM - 12AM <br /> SAT - SUN: 4PM - 1AM</p>
                <Link to="/book-a-table" className='fs-3 text-black'>BOOK A TABLE</Link>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-8 catering text-start  ">
  <form onSubmit={onSubmit}>
    <div className="input-box row">
      <div className="col-12 col-md-6">
        <label htmlFor="first-name">First name</label>
        <input
          type="text"
          name="first name"
          className="field"
          id="first-name"
        />
        <div className="error-text">Enter a first name.</div>
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="last-name">Last name</label>
        <input
          type="text"
          name="last name"
          className="field"
          id="last-name"
        />
        <div className="error-text">Enter a last name.</div>
      </div>
    </div>
    <div className="input-box row">
      <div className="col-12 col-md-6">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="field"
          id="email"
        />
        <div className="error-text">
          Enter an email address like example@mysite.com.
        </div>
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          name="phone"
          className="field"
          id="phone"
        />
      </div>
    </div>
    <div className="input-box">
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        className="field mess"
        
      ></textarea>
      <div className="error-text">Message can't be blank.</div>
    </div>
    <div className='contact-btn'>
      <button type="submit">SUBMIT</button>

    </div>
    
  </form>
</div>

        </div>
      </div>
    </div>
  );
};

export default About;
