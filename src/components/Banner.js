import React, { Component } from 'react'

class Banner extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active banner">
                        <img className="d-block img-fluid banner-img" src="http://cheapsasta.com/wp-content/uploads/2015/10/Snapdeal-upto-70-percent-off-on-designer-mobile-cases-and-covers.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item banner">
                        <img className="d-block img-fluid banner-img" src="https://cdn.shopify.com/s/files/1/2654/9152/files/INTL_Recon70_1920x800px_onsale_web.jpg?v=1553543529" alt="Second slide" />
                    </div>
                    <div className="carousel-item banner">
                        <img className="d-block img-fluid banner-img" src="http://www.indianonlinedealz.com/wp-content/uploads/2017/03/Amazon-Data-Storage-Sale-Grab-a-Byte.jpg" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        )
    }
}

export default Banner;