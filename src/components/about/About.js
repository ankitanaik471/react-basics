import './About.css';
import SiteOwner from '../../Images/ankita.JPG';

const About = () => {
    return (
        <section className='about-wrapper text-center py-5'>
            <div className='container'>
                <h1 className='hero-main m-0 pb-4'>Small Brief About Myself</h1>
                <img src={SiteOwner} className="rounded-circle mx-auto d-block" alt="..."></img>
                <span className='d-block fs-3 fw-semibold hero-text-second pt-4'>Miss Ankita Naik</span>
                <span className='d-block fs-6'>( Front-End Developer )</span>
                <span className='d-block fs-4 fst-italic pt-4'>" hello, I have 2+ experience in UI designing. i had created 10 plus website with responsive. also i have knowledge of CSS preprocessor language s like scss less. i have keen knowledge of following technology bootstrap, material Design, html, CSS, scss, react js, angular js etc. this is all about my experience :-) "</span>
            </div>
        </section>
    )
}

export default About;