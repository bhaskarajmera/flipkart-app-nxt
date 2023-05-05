import React from 'react'
import '../../../styles/styles.module.css'
// import $ from 'jquery'

const Header = () => {

  return (
    <>
        <nav className="navbar-nav navbar-dark navbar-expand p-2" style={{backgroundColor: '#2874f0'}}>
            <div className="row text-center align-items-center font-weight-bold">
                <div className="navbar-brand col-12 offset-md-1 col-md-1">
                    <img width={80} src={"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"} />
                    <a style={{fontSize: '10px', textDecoration: 'none', color: 'white'}} className='flipkart-plus d-flex align-items-center'>
                        Explore 
                        <span style={{color: '#f4c61d', padding: '0px 4px'}}>Plus</span>
                        <img width={10} height={10} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" />
                    </a>
                </div>
                <div className="col-md-4 d-flex">
                    <input type="search" className="w-90 form-control" placeholder="Search for products brand and more"/>
                    <button className='btn'>
                        <i className="fas fa-search text-white"></i>
                    </button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-light px-4">Login</button>
                </div>
                <div className="col-md-4">
                    <ul className="m-0 row list-unstyled text-white fw-bold text-center">
                        <li className='col-10 col-md-4'>Become a Seller</li>
                        <li className='col-md-3'>
                        <button className="dropdown-toggle"id="dropdownMenuButton" datatoggle="dropdown" type="button" >More</button>
                        </li>
                        <li className='col-md-3'>
                            <a>
                                <i className="fa fa-shopping-cart p-2"></i>Cart
                            </a>
                        </li>
                    </ul>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header