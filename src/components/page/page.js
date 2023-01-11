import carWash from '../../img/car-wash.svg';
import reason1 from '../../img/reason1.svg';
import reason2 from '../../img/reason2.svg';
import reason3 from '../../img/reason3.svg';
import './page.css';



const Page = () => {
    return (
        <>
          <div className="container">
            <header>
                <div className="header-logo">
                    <div className="name">suds up</div>
                </div>
                <nav>
                    <ul className='nav-items'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Memberships</a></li>
                        <li><a href="/">Location</a></li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
            <section className="banner">
                <h1>car looking <span>scruffy?</span></h1>
                <h2>Time for a scrub!</h2>
                <h3>Need a good detailing? We do that too.</h3>
                <button className="services-btn">View Our Services</button>
            </section>
            <h2 className="selection">Select Your Wash</h2>
            <div className="buttons-section">
                <button className="select-button">Small Suds</button>
                <button className="select-button">Premium Suds</button>
                <button className="select-button">Members Only</button>
                <button className="select-button">Extreme Suds</button>
            </div>
            <section className="services">
                <div className="interior-service design">
                    <div className="service-header">
                        Interior
                    </div>
                    <div className="interior-content">
                        No Interior Cleaning
                    </div>
                </div>
                <div className="exterior-service design">
                    <div className="service-header">
                        exterior
                    </div>
                    <div className="exterior-content">
                        <img className='car-img' src={carWash} alt="car" />
                        <div className="exterior-text">Simple wash with our <span>suds formula</span>.</div>
                    </div>
                </div>
            </section>
            <section className="reasons">
                <h2>Why choose suds?</h2>
                <div className="reason-banners">
                    <div className="reason-banner">
                        <img src={reason1} alt="reason" className="reason-img" />
                        <h3 className='banner-title'>Eco-Friendly Solutions</h3>
                        <div className="banner-text">
                        Our suds formulas are safe for the <br /> environment and cost effective, <br /> keeping our prices low for you.
                        </div>
                    </div>
                    <div className="reason-banner">
                        <img src={reason2} alt="reason" className="reason-img" />
                        <h3 className='banner-title'>We Love Your Car</h3>
                        <div className="banner-text">
                        Our team members pride <br /> themselves in safe handling of your <br /> car. No chips, scratches, or bruises <br /> permitted.
                        </div>
                    </div>
                    <div className="reason-banner">
                        <img src={reason3} alt="reason" className="reason-img" />
                        <h3 className='banner-title'>Top Rated Machinery</h3>
                        <div className="banner-text">
                        Our car wash tunnel provides a <br /> clean sudsy scrub each time. 
                        </div>
                    </div>
                </div>
            </section>
          </div>
        </>
    )
}

export default Page;