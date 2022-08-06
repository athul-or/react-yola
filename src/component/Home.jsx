import React from 'react'
import Products from './Products'

function Home() {
    return (
        
        <div className='hero'>
            <div className="card text-bg-dark text-white border-0 " >
                <img src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1380&t=st=1659679134~exp=1659679734~hmac=058741c10dad4c06cd501ea6c575a5032ada5b4700bc8911bb334034ff0cda84" className="card-img" alt="Background" height="600px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container" >
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
              <Products/>
        </div>
    )
}

export default Home