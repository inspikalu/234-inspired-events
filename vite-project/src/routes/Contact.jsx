import HeroImg2 from '../components/HeroImg2';
import NavBar from '../components/NavBar';
import IntroImg from '/contact.webp';
import UploadDocumentIcon from "../assets/Upload.svg"
import AddImageIcon from "../assets/addImage.png"
import FacebookIcon from "../assets/facebook.svg"
import Xicon from "../assets/x.svg"
import LinkedinIcon from "../assets/linkedin.svg"
import InstagramIcon from "../assets/instagram.svg"
const Contact = () => {
  return (
    <>
      <NavBar />
      <main>
        <HeroImg2 heading='Contact Us' image={IntroImg} />
      </main>
      <section className='contact'>
        <form action="">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" name='fullName' id='fullName' placeholder='Input Full Name' />

          <label htmlFor="email">Email Adress</label>
          <input type="email" name='email' id='email' placeholder='Input Email Address' />

          <label htmlFor="eventDescription">Event Description</label>
          <textarea name="eventDescription" id="eventDescription" placeholder='Event Description'></textarea>
          <div>
            <label>
              <img src={UploadDocumentIcon} alt="Upload Icon" />
              <span>Upload Document</span>
              <input type="file" accept="application/*" className='hidden' />
            </label>
            <label>
              <img src={AddImageIcon} alt="Add Image Icon" />
              <span>Add Image</span>
              <input type="file" accept='image/*' className='hidden' />
            </label>
          </div>

          <button>Create Event</button>
        </form>

        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </section>

      <footer className="contactFooter">
        <div className="leftSide">
          <div>
            <h2>General Enquiries</h2>
            <p>
              <span className="bold">Gmail Address:</span>
              <span>
                <a href="mailto:theluxeeventconnoisseurs@gmail.com">theluxeeventconnoisseurs@gmail.com</a>
              </span>
            </p>
            <p>
              <span className="bold">Website:</span>
              <span>
                <a href="https://theluxeeventconnoisseurs.com">@theluxeeventconnoisseurs.com</a>
              </span>
            </p><p>
              <span className="bold">Phone Number:</span>
              <span>
                <a href="tel:+19865432154">(001) 98654 32154</a>
              </span>
            </p>
          </div>
          <div>
            <h2>Follow Us</h2>
            <ul>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src={FacebookIcon} alt="Social Icon" /><span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramIcon} alt="Social Icon" /><span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src={Xicon} alt="Social Icon" /><span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src={LinkedinIcon} alt="Social Icon" /><span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightSide">
          <span className="thanks">Thank you for your time</span>
        </div>
      </footer>
    </>

  )
}

export default Contact;
