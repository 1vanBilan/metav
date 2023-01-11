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
            <div className="banner">
                <h1>car looking <span>scruffy?</span></h1>
                <h2>Time for a scrub!</h2>
                <h3>Need a good detailing? We do that too.</h3>
                <button className="services-btn">View Our Services</button>
            </div>
            <h2 className="selection">Select Your Wash</h2>
            <div className="buttons-section">
                <button className="select-button">Small Suds</button>
                <button className="select-button">Premium Suds</button>
                <button className="select-button">Members Only</button>
                <button className="select-button">Extreme Suds</button>
            </div>
            <div className="services">
                <div className="interior-service design">
                    <div className="service-header">
                        Interior
                    </div>
                </div>
                <div className="exterior-service design">
                    <div className="service-header">
                        exterior
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Page;