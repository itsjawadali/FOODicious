import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from 'react'

function Carousel() {
    return (
        <div >
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?burger" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?pizza" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?pasta" alt="Third slide"/>
                    </div>
                </div>
                
            </div>




            {/* <Splide options={
                {
                    perPage: 1,
                    arrows: false,
                    pagination: false,
                }
            } aria-label="My Favorite Images">
                <SplideSlide>
                    <img
                        className="card-img-top rounded w-100 h-100"
                        src='https://source.unsplash.com/random/900x700/?cuisine'
                        alt="Card image cap"
                        style={{ objectFit: "cover" }}
                    />
                    <img
                        className="card-img-top rounded w-100 h-100"
                        src='https://source.unsplash.com/random/900x700/?meal'
                        alt="Card image cap"
                        style={{ objectFit: "cover" }}
                    />
                </SplideSlide>
                <SplideSlide>
                    <img
                        className="card-img-top rounded w-100 h-100"
                        src='https://source.unsplash.com/random/900x700/?meal'
                        alt="Card image cap"
                        style={{ objectFit: "cover" }}
                    />
                </SplideSlide>
                <SplideSlide>
                    <img
                        className="card-img-top rounded w-100 h-100"
                        src='https://source.unsplash.com/random/900x700/?meal'
                        alt="Card image cap"
                        style={{ objectFit: "cover" }}
                    />
                </SplideSlide>
            </Splide> */}
        </div>
    )
}

export default Carousel
