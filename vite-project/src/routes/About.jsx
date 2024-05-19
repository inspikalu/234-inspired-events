import HeroImg2 from '../components/HeroImg2';
import NavBar from '../components/NavBar';
import IntroImg from '/about.webp';
import PhoneImg from '../assets/phone.svg'
import Line from "../assets/Vector-1.svg"
import Line2 from "../assets/Vector.svg"

const About = () => {
  return (
    <>
      <NavBar />
      <main>
        <HeroImg2 heading='About Us' image={IntroImg} />
      </main>
      <section className="aboutBody">
        <section className="whoAreWe">
          <h2 className='headerRedText'>Who are we</h2>
          <p>
            <span className='greenText'>234 Inspired</span> is a visionary brand entity dedicated to curtailing unforgettable experiences as the leading event management, rentals, and travel and tours company.
          </p>
          <p>
            Established in 2018. with firm roots in the United Kingdom and a thriving branch office in Nigeria, we have swiftly ascended to the forefront of our industries. Officailly registered with the UK authorities in 2020 our journey is marked by a commitment to excelence and innovation. We are the Luxe Event Connoisserus
          </p>
        </section>
        <section>
          <h2 className="headerRedText">Our Mission</h2>
          <p>
            Our mission is to craft exceptional events, provide top-tier event rentals, and deliver unforgettable travel experieces, all while exceeding client expectiations and enriching lives
          </p>
        </section>

        <section>
          <h2 className="headerRedText">Our Vision</h2>
          <p>To be the epitome of sophistication and excellence in the events management, event rentals and travel and tours industries, setting new standards for luxury and innovation.</p>
        </section>

      </section>
      <footer className='sectionFooter'>
        <span>24/7 Guest Communication</span>
        <p>
          Our team serves as your digital front desk, handling guest inquireis, booking confirmations and providding 24/7 support
        </p>

        <button>
          <div>
            <img src={PhoneImg} alt="Phone image" />
            <span>Talk to Us</span>
          </div>
        </button>
        <img src={Line} alt="" className="line line1" />
        <img src={Line2} alt="" className="line line2" />
        <div className="line line3"></div>
        <div className="line line4"></div>
      </footer>
    </>
  )
}

export default About;