import { useEffect } from 'react';

const Nav = () => {
  useEffect(()=>{
    (function ($) {
      $.fn.classyNav = function (options) {
          // Variables
          var navContainer = $('.classy-nav-container');
          var classy_nav = $('.classynav ul');
          var classy_navli = $('.classynav > ul > li');
          var navbarToggler = $('.classy-navbar-toggler');
          var closeIcon = $('.classycloseIcon');
          var navToggler = $('.navbarToggler');
          var classyMenu = $('.classy-menu');
          var var_window = $(window);
  
          // default options
          var defaultOpt = $.extend({
              breakpoint: 991,
              openCloseSpeed: 500,
              megaopenCloseSpeed: 800
          }, options);
  
          return this.each(function () {
  
              // navbar toggler
              navbarToggler.on('click', function () {
                  navToggler.toggleClass('active');
                  classyMenu.toggleClass('menu-on');
              });
  
              // close icon
              closeIcon.on('click', function () {
                  classyMenu.removeClass('menu-on');
                  navToggler.removeClass('active');
              });
  
              // add dropdown & megamenu class in parent li class
              classy_navli.has('.dropdown').addClass('cn-dropdown-item');
              classy_navli.has('.megamenu').addClass('megamenu-item');
  
              // adds toggle button to li items that have children
              classy_nav.find('li a').each(function () {
                  if ($(this).next().length > 0) {
                      $(this).parent('li').addClass('has-down').append('<span class="dd-trigger"></span>');
                  }
              });
  
              // expands the dropdown menu on each click
              classy_nav.find('li .dd-trigger').on('click', function (e) {
                  e.preventDefault();
                  $(this).parent('li').children('ul').stop(true, true).slideToggle(defaultOpt.openCloseSpeed);
                  $(this).parent('li').toggleClass('active');
              });
  
              // add padding in dropdown & megamenu item
              $('.megamenu-item').removeClass('has-down');
  
              // expands the megamenu on each click
              classy_nav.find('li .dd-trigger').on('click', function (e) {
                  e.preventDefault();
                  $(this).parent('li').children('.megamenu').slideToggle(defaultOpt.megaopenCloseSpeed);
              });
  
              // check browser width in real-time
              function breakpointCheck() {
                  var windoWidth = window.innerWidth;
                  if (windoWidth <= defaultOpt.breakpoint) {
                      navContainer.removeClass('breakpoint-off').addClass('breakpoint-on');
                  } else {
                      navContainer.removeClass('breakpoint-on').addClass('breakpoint-off');
                  }
              }
  
              breakpointCheck();
  
              var_window.on('resize', function () {
                  breakpointCheck();
              });
  
              // sidebar menu enable
              if (defaultOpt.sideMenu === true) {
                  navContainer.addClass('sidebar-menu-on').removeClass('breakpoint-off');
              }
          });
      };
      
  }(jQuery));
    $('#alimeNav').classyNav();
  },[])
    return (
      <header className="header-area">
        <div className="main-header-area">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              <nav
                className="classy-navbar justify-content-between"
                id="alimeNav"
              >
                <a className="nav-brand" href="./index.html">
                  <img src="img/moldecor-logo-white.png" alt="" />
                </a>

                <div className="classy-navbar-toggler">
                  <span className="navbarToggler">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>

                <div className="classy-menu">
                  <div className="classycloseIcon">
                    <div className="cross-wrap">
                      <span className="top"></span>
                      <span className="bottom"></span>
                    </div>
                  </div>
                  <div className="classynav">
                    <ul id="nav">
                      <li className="active">
                        <a href="./index.html">Home</a>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                        <ul className="dropdown">
                          <li>
                            <a href="./index.html">- Home</a>
                          </li>
                          <li>
                            <a href="./about.html">- About</a>
                          </li>
                          <li>
                            <a href="./gallery.html">- Gallery</a>
                          </li>
                          <li>
                            <a href="./blog.html">- Blog</a>
                          </li>
                          <li>
                            <a href="./single-blog.html">- Blog Details</a>
                          </li>
                          <li>
                            <a href="./contact.html">- Contact</a>
                          </li>
                          <li>
                            <a href="#">- Dropdown</a>
                            <ul className="dropdown">
                              <li>
                                <a href="#">- Dropdown Item</a>
                              </li>
                              <li>
                                <a href="#">- Dropdown Item</a>
                              </li>
                              <li>
                                <a href="#">- Dropdown Item</a>
                              </li>
                              <li>
                                <a href="#">- Dropdown Item</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="./about.html">About</a>
                      </li>
                      <li>
                        <a href="./gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="./blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="./contact.html">Contact</a>
                      </li>
                    </ul>

                    <div
                      className="search-icon"
                      data-toggle="modal"
                      data-target="#searchModal"
                    >
                      <i className="ti-search"></i>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Nav;