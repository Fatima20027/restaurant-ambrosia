import React from 'react';
import cater1 from '../../assets/1-catering.png';
import './Catering.css';
import '../../index.css'


const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "dcbbbe00-0563-46bd-b7aa-55f920d16407");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  if (res.success) {
    console.log("Success", res);
  }
};







const Catering = () => {
  return(
    <div className='catering-wrapper'>
      <h1 className='cater-h1'>Catering Services</h1>

      <div className='cater-sections'>
        <div className='cater-section1'>
          <img src={ cater1 } alt="cater1-img" className=''/>
          <div className='cater-box1'>

              <h2 className='cater-h2'>Let Us Cater <br />Your Next Event </h2>
            <p className='cater-p'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>
        </div>
        
        <div className='cater-wrapper-2sections' > 
          <div className='cater-section2'>
          <h3 className='bg-[#bada55]'>What We Offer</h3>
            <div>
              <h3>Build Your Own Taco Bar</h3>
              <p>paragraph</p>
            </div>

            <div>
              <h3>Delivered Hot to Your Location</h3>
              <p>paragraph</p>
            </div>

            <div>
              <h3>Tailored To any Occasion</h3>
              <p>paragraph</p>
            </div>
            
          </div>

          <div className='cater-contact'>
            <h3>Contact us and get <br />our special catering offers</h3>
            <p>paragraph</p>
            <div className='contact'>
              <form onSubmit={ onSubmit }>
              <div className='input-box'>
                  <label htmlFor="">First name</label>
                  <input type="text" name='first name' className='field'/>
                  <div className='error-text'>Enter a first name.</div>
                </div>
                <div className='input-box'>
                  <label htmlFor="">Last name</label>
                  <input type="text" name='last name' className='field'/>
                  <div className='error-text'>Enter a last name.</div>
                </div>
                <div className='input-box'>
                  <label htmlFor="">Email</label>
                  <input type="email" name='email' className='field'/>
                  <div className='error-text'>Enter an email address like example@mysite.com.</div>
                </div>
                <div className='input-box'>
                  <label htmlFor="">Phone</label>
                  <input type="phone" name="phone" className='field'/>
                </div>
                <div className='input-box'>
                  <label htmlFor="">Message</label>
                  <textarea name="message" id="" className='field mess'></textarea>
                  <div className='error-text'>Message can't be blank.</div>
                </div>
                <button type='submit'>Submit</button>

              </form>
                
            </div>
            
            
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default Catering;
