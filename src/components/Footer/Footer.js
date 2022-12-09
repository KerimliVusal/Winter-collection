import React from 'react'
import './style.scss'
function Footer() {
  return (
    <div>
      <section className="services-section py-96">
      <div className="wrapper flex services">
        <div className="service-box">
          <img src="images/services1.svg" alt="" />
          <h3 className="mt-20">Fast & Free Delivery</h3>
          <p>Free delivery on all orders</p>
        </div>
        <div className="service-box">
          <img src="images/services2.svg" alt="" />
          <h3 className="mt-20">Secure Payment</h3>
          <p>Free delivery on all orders</p>
        </div>
        <div className="service-box">
          <img src="images/services3.svg" alt="" />
          <h3 className="mt-20">Money Back Guarantee</h3>
          <p>Free delivery on all orders</p>
        </div>
        <div className="service-box">
          <img src="images/services4.svg" alt="" />
          <h3 className="mt-20">Online Support</h3>
          <p>Free delivery on all orders</p>
        </div>
      </div>
    </section>
    <footer className="py-72">
      <div className="wrapper flex">
        <div className="footer-column">
          <h1 className="Footer-heading">Fashion</h1>
          <ul className="footerUl mt-30">
            <li>
              The wise man therefore always holds selection. The wise man
              therefore always rejects pleasures to secure other greater
            </li>
            <li className="mt-20">
              <i className="far fa-envelope"></i
              ><a href="mailto:Fashion@gmail.com">Fashion@gmail.com</a>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i
              ><a href="tel:+994514084879">(+994)51 408 48 79</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>CATEGORIES</h3>
          <ul className="footerUl mt-30">
            <li><a href="#dxdvfbg">Women</a></li>
            <li><a href="#dxdvfbg">Men</a></li>
            <li><a href="#dxdvfbg">Bag</a></li>
            <li><a href="#dxdvfbg">Shoes</a></li>
            <li><a href="#dxdvfbg">Watches</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>NEWSLETTER</h3>
          <div className="F-input-group mt-30">
            <input type="text" name="" id="Footer-subs" />
            <button className="Subscribe">Subscribe</button>
          </div>
          <ul className="footer-icons flex mt-20">
            <li>
              <a href="#dvf"><i className="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="#sdc"><i className="fab fa-instagram"></i></a>
            </li>
            <li>
              <a href="#sdc"><i className="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="#scs"><i className="fab fa-youtube"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer