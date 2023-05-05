import React from 'react'

const FeaturedCarouselMain = () => {
  return (
    <>
        <div className="p-2">
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/2150/2150/image/6028435fe811455a.jpg?q=50" alt="Los Angeles" className="d-block" style={{width:'100%'}} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/2150/2150/image/58d73d396dac89cb.jpg?q=50" alt="Chicago" className="d-block" style={{width:'100%'}} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/2150/2150/image/896ed9280bc59601.jpg?q=50" alt="New York" className="d-block" style={{width:'100%'}} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/2150/2150/image/d270b2200cf84203.jpg?q=50" alt="New York" className="d-block" style={{width:'100%'}} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
        <div className="px-2">
            <a href="#">
                <img src="https://rukminim1.flixcart.com/flap/4000/576/image/e69d03a985bed59b.jpg" />
            </a>
        </div>
    </>
  )
}

export default FeaturedCarouselMain