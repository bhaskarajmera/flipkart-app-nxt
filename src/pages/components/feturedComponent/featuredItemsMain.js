import React from 'react'
import Link from 'next/link'
const FeaturedItemsMain = () => {
  return (
    <>
        <div className="px-2 py-2">
            <div className="shadow-sm bg-white">
                <div className="row py-4">
                    <div className="col-12 col-md-2 d-flex justify-content-center">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <h2 className='text-2xl text-center p-2'>Top Deals on Today</h2>
                            <div className="p-2">
                                <Link href="/components/mainComponent/productsMain" className="btn btn-primary">VIEW ALL</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div id="featuredItemCarousel" className="carousel slide" data-bs-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row justify-content-between">
                                        <div className="col-12 col-md-2 featured-item-wrapper">
                                            <div className='d-flex flex-column align-items-center'>
                                                <div className='featured-items-img'>
                                                    <img style={{width: '150px', height: '140px'}}  className="img-responsive" src="https://rukminim1.flixcart.com/image/200/200/kyag87k0/computer/7/r/u/raider-ge66-12ugs-gaming-laptop-msi-original-imagakb9zw7gqzcm.jpeg?q=70" />
                                                </div>
                                                <div className="d-flex flex-column align-items-center py-4">
                                                    <div className="text-sm fw-bold">
                                                        12th Gen Laptop
                                                    </div>
                                                    <div className='text-success'>
                                                        From 4700
                                                    </div>
                                                    <div className="text-sm text-muted text-center">
                                                        High Performance laptop
                                                    </div>
                                                </div>                                
                                            </div>
                                        </div>
                                        <div className="col-md-2 featured-item-wrapper">
                                            <div className='d-flex flex-column align-items-center'>
                                                <div className='featured-items-img'>
                                                    <img style={{width: '150px', height: '140px'}}  className="img-responsive" src="https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70" />
                                                </div>
                                                <div className="d-flex flex-column align-items-center py-4">
                                                    <div className="text-sm fw-bold">
                                                        Top Mirrorless Cameras
                                                    </div>
                                                    <div className='text-success'>
                                                        Shop Now
                                                    </div>
                                                    <div className="text-sm text-muted text-center">
                                                        Canon, Sony, Fujifilm...
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2 featured-item-wrapper">
                                            <div className='d-flex flex-column align-items-center'>
                                                <div className='featured-items-img'>
                                                    <img style={{width: '150px', height: '140px'}}  className="img-responsive" src="https://rukminim1.flixcart.com/image/200/200/l3khsi80/projector/z/h/4/-original-imagenqrzfcgwqk7.jpeg?q=70" />
                                                </div>
                                                <div className="d-flex flex-column align-items-center py-4">
                                                    <div className="text-sm fw-bold">
                                                        Projectors
                                                    </div>
                                                    <div className='text-success'>
                                                        From 9999
                                                    </div>
                                                    <div className="text-sm text-muted text-center">
                                                        Zebronics
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2 featured-item-wrapper">
                                            <div className='d-flex flex-column align-items-center'>
                                                <div className='featured-items-img'>
                                                    <img style={{width: '150px', height: '140px'}}  className="img-responsive" src="https://rukminim1.flixcart.com/image/200/200/l4x2rgw0/monitor/n/y/y/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxzsk8ef26.jpeg?q=70" />
                                                </div>
                                                <div className="d-flex flex-column align-items-center py-4">
                                                    <div className="text-sm fw-bold">
                                                        Monitors
                                                    </div>
                                                    <div className='text-success'>
                                                        From 7949
                                                    </div>
                                                    <div className="text-sm text-muted text-center">
                                                        Lenovo
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2 featured-item-wrapper">
                                            <div className='d-flex flex-column align-items-center'>
                                                <div className='featured-items-img'>
                                                    <img style={{width: '150px', height: '140px'}} className="img-responsive" src="https://rukminim1.flixcart.com/image/200/200/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70" />
                                                </div>
                                                <div className="d-flex flex-column align-items-center py-4">
                                                    <div className="text-sm fw-bold">
                                                        Hair Dryer
                                                    </div>
                                                    <div className='text-success'>
                                                        From 549
                                                    </div>
                                                    <div className="text-sm text-muted text-center">
                                                        realme, Phillips & more
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                <div className="row justify-content-between">
                                        <div className="col-12 col-md-2 featured-item-wrapper">
                                            <div className='d-flex flex-column align-items-center'>
                                                <div className='featured-items-img'>
                                                    <img style={{width: '150px', height: '140px'}}  className="img-responsive" src="https://rukminim1.flixcart.com/image/200/200/kyag87k0/computer/7/r/u/raider-ge66-12ugs-gaming-laptop-msi-original-imagakb9zw7gqzcm.jpeg?q=70" />
                                                </div>
                                                <div className="d-flex flex-column align-items-center py-4">
                                                    <div className="text-sm fw-bold">
                                                        12th Gen Laptop
                                                    </div>
                                                    <div className='text-success'>
                                                        From 4700
                                                    </div>
                                                    <div className="text-sm text-muted text-center">
                                                        High Performance laptop
                                                    </div>
                                                </div>                                
                                            </div>
                                        </div>
                                        <div className="col-md-2 featured-item-wrapper">
                                            <div className='d-flex flex-column align-items-center'>
                                                <div className='featured-items-img'>
                                                    <img style={{width: '150px', height: '140px'}}  className="img-responsive" src="https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70" />
                                                </div>
                                                <div className="d-flex flex-column align-items-center py-4">
                                                    <div className="text-sm fw-bold">
                                                        Top Mirrorless Cameras
                                                    </div>
                                                    <div className='text-success'>
                                                        Shop Now
                                                    </div>
                                                    <div className="text-sm text-muted text-center">
                                                        Canon, Sony, Fujifilm...
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2 featured-item-wrapper">
                                            <div className='d-flex flex-column align-items-center'>
                                                <div className='featured-items-img'>
                                                    <img style={{width: '150px', height: '140px'}}  className="img-responsive" src="https://rukminim1.flixcart.com/image/200/200/l3khsi80/projector/z/h/4/-original-imagenqrzfcgwqk7.jpeg?q=70" />
                                                </div>
                                                <div className="d-flex flex-column align-items-center py-4">
                                                    <div className="text-sm fw-bold">
                                                        Projectors
                                                    </div>
                                                    <div className='text-success'>
                                                        From 9999
                                                    </div>
                                                    <div className="text-sm text-muted text-center">
                                                        Zebronics
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2 featured-item-wrapper">
                                            <div className='d-flex flex-column align-items-center'>
                                                <div className='featured-items-img'>
                                                    <img style={{width: '150px', height: '140px'}}  className="img-responsive" src="https://rukminim1.flixcart.com/image/200/200/l4x2rgw0/monitor/n/y/y/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxzsk8ef26.jpeg?q=70" />
                                                </div>
                                                <div className="d-flex flex-column align-items-center py-4">
                                                    <div className="text-sm fw-bold">
                                                        Monitors
                                                    </div>
                                                    <div className='text-success'>
                                                        From 7949
                                                    </div>
                                                    <div className="text-sm text-muted text-center">
                                                        Lenovo
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2 featured-item-wrapper">
                                            <div className='d-flex flex-column align-items-center'>
                                                <div className='featured-items-img'>
                                                    <img style={{width: '150px', height: '140px'}} className="img-responsive" src="https://rukminim1.flixcart.com/image/200/200/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70" />
                                                </div>
                                                <div className="d-flex flex-column align-items-center py-4">
                                                    <div className="text-sm fw-bold">
                                                        Hair Dryer
                                                    </div>
                                                    <div className='text-success'>
                                                        From 549
                                                    </div>
                                                    <div className="text-sm text-muted text-center">
                                                        realme, Phillips & more
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#featuredItemCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#featuredItemCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex py-2">
                <div className="">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/0e5d1a3a3d52c6c1.jpg?q=50" />
                </div>
                <div className="">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/af1679c7c77321c0.jpg?q=50" />
                </div>
                <div className="">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/273f3eaccb62700c.jpeg?q=50" />
                </div>
            </div>
        </div> 
        </>
    )
}

export default FeaturedItemsMain