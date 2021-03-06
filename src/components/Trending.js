import React from 'react'
import Slider from "react-slick";

const Trending = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "blue", borderRadius: '80%' }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "blue", borderRadius: '80%',fontSize:'20px' }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="container">
                <div className="row mt-3 mb-5 ">
                    <Slider {...settings}>
                        <div>
                            <img src="images/A1.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />

                        </div>
                        <div>
                            <img src="images/A2.jfif" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/A3.jfif" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/A4.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/A5.jfif" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/A6.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/A7.jfif" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/A8.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/A8.jpg" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/A9.jfif" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/A10.jfif" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/A11.jfif" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>
                        <div>
                            <img src="images/A12.jfif" className="img-fluid" alt="" style={{ height: '200px' }} />
                        </div>

                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Trending
