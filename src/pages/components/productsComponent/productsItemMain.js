import React from 'react'

const ProductsItemMain = () => {
    return (
		<div className='p-3 h-100 w-100 bg-white'>
			<div aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item text-xs"><a href="#">Home</a></li>
					<li className="breadcrumb-item text-xs"><a href="#">Mobile Accessories</a></li>
					<li className="breadcrumb-item active text-xs" aria-current="page">Mobile Phones</li>
				</ol>
			</div>
			<div>

			</div>
			<h5 className="fw-bold">Name of the category</h5>
			<div>
				<ul className="nav border-bottom" id="myTab" role="tablist">
					<li className="nav-item" role="presentation">
						<button className="nav-link active pl-0" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Popularity</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Price - Low to High</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Price - High to Low</button>
					</li>
				</ul>
			</div>
			<div className="tab-content" id="myTabContent">
				<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
					<div className="row px-4 py-4 border-bottom">
						<div className="col-md-3">
							<div>
								<img style={{width: '150px', height: '200px'}} className="img-responsive mx-3" src="https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70" />
							</div>
						</div>
						<div className="col-md-6">
							<div>
								<div className="text-lg fw-bold">Apple iphone 14 (Midnight, 128GB)</div>
								<div className="text-muted text-sm fw-bold">
									<span style={{padding: '2px 5px'}} className='bg-success text-white fw-normal rounded mr-3'>4.6<i className="fa-solid fa-star text-xs pl-1"></i></span>30,667 Rating & 1766 Reviews
								</div>
								<ul className="py-3 text-sm">
									<li>
										<p>128 GB ROM</p>
									</li>
									<li>
										<p>15.49 cm(6.1 inch) Super Retina XDR Display</p>
									</li>
									<li>
										<p>12MP + 12MP | 12MP Front Camera</p>
									</li>
									<li>
										<p>A15 Bionic Chip, 6 Core Processor Processor</p>
									</li>
									<li>
										<p>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3">
							<div className="d-flex flex-column">
								<div className='text-xl fw-bold py-1'>{'\u20B9'}69,999 <span><img /></span></div>
								<div className='text-sm py-1'><del className='text-muted'>79,900</del><span className='text-success pl-2'>12% off</span></div>
								<div className='text-xs'>Free Delivery</div>
								<div className='text-xs py-1'><span className='text-success fw-bold'>Saver Deal</span></div>
								<div className='text-sm'> Upto <span className='fw-bold'>{'\u20B9'}29,250</span> off on Exchange</div>
							</div>
						</div>
					</div>
					<div className="row px-4 py-4">
						<div className="col-md-3">
							<div>
								<img style={{width: '150px', height: '200px'}} className="img-responsive mx-3" src="https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/v/8/-original-imaghx9qudmydgc4.jpeg?q=70" />
							</div>
						</div>
						<div className="col-md-6">
							<div>
								<div className="text-lg fw-bold">Apple iphone 14 Plus (Starlight, 128GB)</div>
								<div className="text-muted text-sm fw-bold">
									<span style={{padding: '2px 5px'}} className='bg-success text-white fw-normal rounded mr-3'>4.7<i className="fa-solid fa-star text-xs pl-1"></i></span>9,391 Rating & 578 Reviews
								</div>
								<ul className="py-3 text-sm">
									<li>
										<p>128 GB ROM</p>
									</li>
									<li>
										<p>17.02 cm (6.7 inch) Super Retina XDR Display</p>
									</li>
									<li>
										<p>12MP + 12MP | 12MP Front Camera</p>
									</li>
									<li>
										<p>A15 Bionic Chip, 6 Core Processor Processor</p>
									</li>
									<li>
										<p>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3">
							<div className="d-flex flex-column">
								<div className='text-xl fw-bold py-1'>{'\u20B9'}79,999 <span><img /></span></div>
								<div className='text-sm py-1'><del className='text-muted'>89,900</del><span className='text-success pl-2'>11% off</span></div>
								<div className='text-xs'>Free Delivery</div>
								<div className='text-xs py-1'><span className='text-success fw-bold'>Saver Deal</span></div>
								<div className='text-sm'> Upto <span className='fw-bold'>{'\u20B9'}29,250</span> off on Exchange</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">This is some placeholder content the Contact tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
				<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">This is some placeholder content the Contact tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
			</div>
			<div></div>
		</div>
    )
}

export default ProductsItemMain