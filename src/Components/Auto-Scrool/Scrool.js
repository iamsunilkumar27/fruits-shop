import  scroll_image_1  from './vegetables-1.jpg';
import  scroll_image_2  from './vegetables-2.jpg';
import  scroll_image_3  from './vegetables-4.jpg';
import './Scrool.css';

function Scrool() {
    return (
        <div className='container'>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active " data-bs-interval="10000">
                        <img src={scroll_image_1} className="d-block w-100 height" alt="vegetable images" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={scroll_image_2} className="d-block w-100 height" alt="vegetable images" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={scroll_image_3} className="d-block w-100 height" alt="vegetable images" />
                    </div>
                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-primary " aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
}
export default Scrool;