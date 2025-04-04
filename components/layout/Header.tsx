
import Image from 'next/image';
import pageStyles from "@/styles/page.module.css"
import { urlFor } from '@/sanity/libs/sanity';
import { SiteData } from '@/sanity/types';
// import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

interface HeaderProps {
  site: SiteData[];
}
const Header = ({ site }: HeaderProps) => {


  console.log("header data: ",site);
  
  if (!site || !site[0]) {
    console.error("Invalid site data:", site);
    return null; 
  }
  

  return (
    <>
      {/* <div className='w-100 navColor' style={{ backgroundColor: "#F3EEE7 !important" }}>
        <div className={`${pageStyles.contactContainer} ${pageStyles.mobile_width} navColor`} style={{ backgroundColor: "#F3EEE7 !important" }}>
          <Navbar expand="lg" className="p-3 navStyleMobile" style={{ backgroundColor: "#F3EEE7 !important" }} >
            <Navbar.Brand href="/">
              {site[0]?.logo && (
                <Image src={urlFor(site[0]?.logo).url() || "/interior.png"} alt="Breathe Logo" width={317} height={33} className='img-fluid ' />
              )}
              
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link className='nav-item' href="/">Home</Nav.Link>
                <Nav.Link className='nav-item' href="/services">Our Services</Nav.Link>
                <Nav.Link className='nav-item' href="/about-breath">About Breathe </Nav.Link>
                <Nav.Link className='nav-item' href="/blog">Blog</Nav.Link>
                <Nav.Link className='nav-item' href="/contact">Contact Us</Nav.Link>
                <Nav.Link className='nav-item' href="/terms">T & C</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div> */}
      <div className="w-100 navColor" style={{ backgroundColor: "#F3EEE7 !important" }}>
      <div className={`${pageStyles.contactContainer} ${pageStyles.mobile_width} navColor`} style={{ backgroundColor: "#F3EEE7 !important" }}>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#F3EEE7 !important" }}>
          <Link className="navbar-brand" href="/">
          {site[0]?.logo && (
                <Image src={urlFor(site[0]?.logo).url() || "/interior.png"} alt="Breathe Logo" width={317} height={33} className='img-fluid ' />
              )}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/services">Our Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about-breath">About Breathe</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/terms">T & C</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    </>
  );
};

export default Header;
