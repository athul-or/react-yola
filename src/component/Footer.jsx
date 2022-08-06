import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-info shadow-lg p-3 mb-5 rounded">
      <footer className="py-5 p-5">
        <div className="row">                
          <div className="col-5 md-2">
            <h5>YOLA<i className="fa fa-heart me-1 text-danger p-2"></i></h5>
            <p>Don't Waste your time.Go and grab your favourites.
              Yola is here for you to buy physical
              goods, services, and digital products over the internet
              rather than at a brick-and-mortar location.</p>
              <NavLink to="/login"><i className="fa fa-instagram me-1 text-danger fs-2 p-3"></i></NavLink>
              <NavLink to="/login"><i className="fa fa-facebook me-1 fs-2 p-3"></i></NavLink>
              <NavLink to="/login"><i className="fa fa-google me-1 text-success fs-2 p-3"></i></NavLink>
              <NavLink to="/login"><i className="fa fa-twitter me-1 text-dark fs-2 p-3"></i></NavLink>
          </div>
 
          <div className="col-6 col-md-2 mb-3 px-5 mx-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-dark">Home</NavLink></li>
              <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-dark">Features</NavLink></li>
              <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-dark">Pricing</NavLink></li>
              <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-dark">FAQs</NavLink></li>
              <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-dark">About</NavLink></li>
            </ul>
          </div>

          <div className="col-5 col-md-4 mb-3">
            <form>
              <h5>Newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button"><i className="fa fa-paper-plane"></i></button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-center py-2 pb-0 border-top">
          <p>© 2022 Company, Inc. All rights reserved.</p> </div>
      </footer>
    </div>
  )
}

export default Footer