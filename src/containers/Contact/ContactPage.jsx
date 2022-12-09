import React from 'react'
import './style.scss'
import phone from '../../assets/images/contact/phone.gif'
function ContactPage() {
  return (
    <div>
        <section class="contact-hero py-96">
          <h1 class="titleforSection">
Bizimlə Əlaqə Saxlayın</h1>
        </section>

        <section class="py-72" style={{backgroundColor: "#f5f5f5"}}>
    <div class="wrapper">
  
        <div class="Contact-container flex ">
          <div class="contact-image">
            <img src={phone} alt=""/>
          </div>
          <div class="contact-text">
              <h2 class="mb-40">Məlumat</h2>
              <ul class="contact-information">
                <li><span><i class="fa-solid fa-location-dot"></i></span> 
                    <div class="sub-inform">
                      <h3>Məkan:</h3>
                      <p class="sub-inform">Gənclik Mall, Fətəli Xan Xoyski, Bakı</p>
                    </div>
                 </li>
                <li>
                  <span><i class="fa-solid fa-clock"></i></span> 
                    <div>
                      <h3>Açıq Saatlar:</h3>
                     
                       <p>bazar-cümə:</p>
                       <p>09:00 - 18:00</p>
                     
                    </div>
                 </li>
                 
                 <li><span><i class="fa-solid fa-envelope"></i></span> 
                  <div>
                    <h3>Email:</h3>
                    <p>t_ulvi@mail.ru</p>
                  </div>
               </li>

                 <li><span><i class="fa-solid fa-phone"></i></span> 
                  <div>
                    <h3>Call:</h3>
                    <a href="tel:+994514084879">(+994)51-408-48-79</a>
                  </div>
               </li>

              </ul>
          </div>
        </div>

        <div class="flex py-72">
          <div class="contact-comment ">
            <h2>Şərh yaz</h2>
            <div class="contact-form">
              <div class="contact-input-groups">
                <input type="text" placeholder="Your Name" name="" id=""/>  
                <input type="text" placeholder="Your Email" name="" id=""/>
              </div>
              <textarea id="contact-text" placeholder="Describe yourself here..." ></textarea>
            </div>
            <a href="#dsc" class="messageBtn">Mesaj Göndər</a>
          </div>
          <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.452663158461!2d49.85571399791438!3d40.400702150458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5d5a2c1005%3A0x5ede1cc1418ccc54!2sG%C9%99nclik%20Mall!5e0!3m2!1saz!2s!4v1644512167478!5m2!1saz!2s"
               style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>

          </div>
        </div>
        
    </div>
  </section>
    </div>
  )
}

export default ContactPage