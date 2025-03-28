import { Container, Image, Nav } from "react-bootstrap";
import fabrication1 from "/img/OurServices/image4.jpg";
import planningCare from "/img/OurServices/image1.jpg";
import k1 from "/img/KitchenAndBath/1.jpg";
import { useState, useLayoutEffect } from "react";
import TestimonialCarousel from "./Partials/TestimonialCarousel";
import { NavLink } from "react-router-dom";
import Partners from "./Partials/Partners";

const Home = () => {
  const [isReady, setIsReady] = useState(false);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setIsReady(true); // Ensures the page starts at the top
  }, []);

  if (!isReady) return null;
  return (
    <>
      <div className="home-page-img-container ">
        <div className="home-page-zoom-img">
          <Image src={fabrication1} className="es-carousel-image" />
          <div className="bottom-left">
            <h1 style={{ color: "#ddd9d1" }}>FABRICATION</h1>
          </div>
        </div>
      </div>
      <div className="home-page-img-container ">
        <div className="home-page-zoom-img">
          <Image src={k1} className="es-carousel-image" />
          <div className="bottom-left">
            <h1 style={{ color: "#ddd9d1" }}>KITCHEN & BATH</h1>
          </div>
        </div>
      </div>
      <div className="home-page-img-container mb-3">
        <div className="home-page-zoom-img">
          <Image src={planningCare} className="es-carousel-image" />
          <Nav.Link as={NavLink} to="/ourServices">
            <div className="bottom-left">
              <h1 style={{ color: "#ddd9d1" }}>PLANNING & CARE</h1>
            </div>
          </Nav.Link>
        </div>
      </div>
      <Container className="my-4">
        <span className="text">
          We make your project hassle-free by connecting you with our closest
          partnered store. Our team will provide a comprehensive quote, covering
          everything from installation and templating to shipping. Get a
          seamless experience with transparent pricing—all through our trusted
          partners.
        </span>
      </Container>
      <Container className="my-4">
        <div className="pageHeading">
          <h1>Testimonials</h1>
        </div>
      </Container>
      <Container>
        <TestimonialCarousel></TestimonialCarousel>
      </Container>
      <Partners></Partners>
    </>
  );
};

export default Home;
