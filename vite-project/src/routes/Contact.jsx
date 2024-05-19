import HeroImg2 from '../components/HeroImg2';
import NavBar from '../components/NavBar';
import IntroImg from '/contact.webp';
import UploadDocumentIcon from "../assets/Upload.svg"
import AddImageIcon from "../assets/addImage.png"
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
    </>

  )
}

export default Contact;
