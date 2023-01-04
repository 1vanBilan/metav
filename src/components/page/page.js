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
          </div>
        </>
    )
}

export default Page;