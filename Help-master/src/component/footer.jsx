import React from 'react';
import './Text.css';

const footer = () => {
    return (
      
      <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4 className='footer-heading'>Contant Us</h4>
            <h6 className="list-unstyled">
              <li><i class="fa fa-map-marker"></i> Street Name &amp; Number, Town, Postcode/Zip</li>
              <li><i class="fa fa-phone"></i> +00 (123) 456 7890</li>
              <li><i class="fa fa-envelope-o"></i> info@domain.com</li>
            </h6>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4 className='footer-heading'>Quick Links</h4>
            <ui className="list-unstyled">
              <li><a href='#'>Link 1</a></li>
              <li><a href='#'>Link 1</a></li>
              <li><a href='#'>Link 1</a></li>
              <li><a href='#'>Link 1</a></li>   
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4 className='footer-heading'>Social</h4>
            <ui className="list-unstyled">
              <li><a class="faicon-facebook" href="#"><i class="fa fa-facebook-square" ></i> Facebook</a></li>
              <li><a class="faicon-twitter" href="#"><i class="fa fa-twitter-square"></i> twitter</a></li>
              <li><a class="faicon-linkedin" href="#"><i class="fa fa-linkedin-square"></i> linkedin</a></li>
              <li><a class="faicon-linkedin" href="#"><i class="fa fa-instagram"></i> Instagram</a></li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>

    );
};

export default footer;