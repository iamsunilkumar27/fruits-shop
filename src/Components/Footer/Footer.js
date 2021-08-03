import Google from './google.png';
import logo from './logo.png';
import './Footer.css'
function Footer (){
    return (
        <div className='container-fluid footer-'>
            <div className='row ps-md-5'>
                <div className='col-12 col-md-4  pt-md-5  '>
                  <img src={logo}></img>
                    <div>
                        <p className='mt-2'>Contact No:<span> 8072746707</span></p>
                        <p className='mt-2'>Email :<span> sunilkumarseshadri@gmail.com</span></p>
                        <p className='mt-2'>Address :<span> Sri rama kuppam</span></p>
                    </div>
                </div>
                <div className='col-12 col-md-4 pt-md-5'>
                    <p>About</p>
                     <p>Info</p>
                     <p>Carriers</p>
                     <p>Stroes</p>
                     <p>Policies</p>
                </div>
                <div className='col-12 col-md-4 pt-md-5 '>
                    <p>Download Our App</p>
                    <div>
                   <a href='https://chrome.google.com/webstore/category/extensions' target='_blank'> <img src={Google} height='47px' width='150px'></img></a>
                  
                    </div>
                    <div>
                    <a href='https://www.facebook.com/' target='_blank' className='me-2'><i class="bi bi-facebook fbicon"></i></a>
                    <a href='https://www.instagram.com/' target='_blank'><i class="bi bi-instagram instaicon"></i></a>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Footer;