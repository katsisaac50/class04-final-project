import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="flex-rw">
  
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">About AMA</h4></li>
    <li><a href='/shop/about-mission' className="generic-anchor footer-list-anchor" >GET TO KNOW US</a></li>
    <li><a href='/promos.html' className="generic-anchor footer-list-anchor" >PROMOS</a></li>
    <li><a href='/retailers/new-retailers.html' className="generic-anchor footer-list-anchor" >BECOME A RETAILER</a></li>

    <li><a href='/job-openings.html'  className="generic-anchor footer-list-anchor">JOB OPENINGS</a></li>

    <li><a href='/shop/about-show-schedule' className="generic-anchor footer-list-anchor" >EVENTS</a></li>
  </ul>
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">Contributors</h4></li>


    <li><a href='/Isaac' className="generic-anchor footer-list-anchor">KATONGOLE ISAAC</a></li>
    <li><a href='/Magdy' className="generic-anchor footer-list-anchor">MAGDY AHMED</a></li>
    <li><a href='/Emil' className="generic-anchor footer-list-anchor">EMILBAYES</a></li>
  </ul>
  <ul className="footer-list-top">
    <li id='help'>
      <h4 className="footer-list-header">Please Help Me</h4></li>
    <li><a href='/shop/about-contact' className="generic-anchor footer-list-anchor">CONTACT</a></li>
    <li><a href='/faq.html' className="generic-anchor footer-list-anchor" >FAQ</a></li>
    <li id='find-a-store'><a href='/shop/store-locator' className="generic-anchor footer-list-anchor" >STORE LOCATOR</a></li>
    <li id='user-registration'><a href='/shop/user-registration?URL=' className="generic-anchor footer-list-anchor" >NEW USERS</a></li>
    <li id='order-tracking'><a href='/shop/order-status'  className="generic-anchor footer-list-anchor">ORDER STATUS</a></li>
  </ul>
  <section className="footer-social-section flex-rw">
      <span className="footer-social-overlap footer-social-connect">
      CONTACT US
      </span>
      <span className="footer-social-overlap footer-social-icons-wrapper">
      <a href="https://www.pinterest.com/" className="generic-anchor" target="_blank" title="Pinterest" ><i className="fa fa-pinterest"></i></a>
      <a href="https://www.facebook.com/" className="generic-anchor" target="_blank" title="Facebook" ><i className="fa fa-facebook"></i></a>
      <a href="https://twitter.com/" className="generic-anchor" target="_blank" title="Twitter" ><i className="fa fa-twitter"></i></a>
      <a href="http://instagram.com/" className="generic-anchor" target="_blank" title="Instagram" ><i className="fa fa-instagram"></i></a>
      <a href="https://www.youtube.com/" className="generic-anchor" target="_blank" title="Youtube" ><i className="fa fa-youtube"></i></a>
      <a href="https://plus.google.com/" className="generic-anchor" target="_blank" title="Google Plus" ><i className="fa fa-google-plus"></i></a>
      </span>
  </section>
  <section className="footer-bottom-section flex-rw">
<div className="footer-bottom-wrapper">   
<i className="fa fa-copyright" role="copyright">
 
</i> 2018 HackYourFutureProject <address className="footer-address" role="company address">Denmark, CPH</address><span className="footer-bottom-rights"> - All Rights Reserved - </span>
    </div>
    <div className="footer-bottom-wrapper">
    <a href="/terms-of-use.html" className="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html" className="generic-anchor" rel="nofollow">Privacy</a>
      </div>
  </section>
</footer>
    );
  }
}

export default Footer;
