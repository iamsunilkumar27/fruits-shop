import logo from './logo.png';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img className="navbar-brand ps-lg-5" src={logo}></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    2/718,Kazura Garen 2nd street...
                                </a>
                            </li>
                        </ul>
                        <form className="d-md-flex pe-lg-4 me-lg-4">
                            <div className='d-flex search'>
                                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary" type="submit">Search</button>                            </div>
                            <div>
                                <a className='text-decoration-none login text-body m-3 btn ' href='#' >Login</a>
                            </div>
                            <div>
                                <a className='text-decoration-none text-body m-3 btn ' href='#' >Sign Up</a>
                            </div>
                            <div>
                                <a className='text-decoration-none text-body m-3 btn ' href='#' >Cart</a>
                            </div>

                        </form>
                    </div>
                </div>
            </nav>

            <nav className="navbar d-none d-md-block navbar-light bg-light ps-lg-5 ">
                <div className="container-fluid">
                    <a className="navbar-brand">Store Location</a>
                    <form className="d-flex  pe-lg-4 me-lg-4">
                        <div>
                            <a className='text-decoration-none text-body m-3 btn ' href='#' >Home</a>
                        </div>
                        <div>
                            <a className='text-decoration-none text-body m-3 btn ' href='#' >About Us</a>
                        </div>
                        <div>
                            <a className='text-decoration-none text-body m-3 btn ' href='#' >Cotact</a>
                        </div>
                        <div>
                            <a className='text-decoration-none text-body m-3 btn ' href='#' >My Account</a>
                        </div>

                    </form>
                </div>
            </nav>


        </div>


    );
}
export default Navbar;