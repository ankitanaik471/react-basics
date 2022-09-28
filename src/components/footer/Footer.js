import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <hr className='m-0' />
            <div className='p-5 text-center'>
                <div className='footer-link'>
                    <span><a className='fs-4 text-dark pe-3' href='https://github.com/ankitanaik471' alt='Github'><i className="fa-brands fa-github"></i></a></span>
                    <span><a className='fs-4 text-dark pe-3' href='https://www.linkedin.com/in/ankita-naik-284a33116/' alt='Github'><i className="fa-brands fa-linkedin"></i></a></span>
                    <span><a className='fs-4 text-dark' href='mailto:ankitanaik471@gmail.com' alt='Mail'><i className="fa-solid fa-envelope"></i></a></span>
                </div>
                <div className='py-3'>
                    <span className='text-dark fw-bold'>Copyrights @2022 Ankita Naik.All rights reserved.</span>
                </div>
            </div>
            

            
        </footer>
    )
}

export default Footer;