import HeroImg2 from '../components/HeroImg2';
import NavBar from '../components/NavBar';
import IntroImg from '/service.webp';

const Services = () => {
  return (
    <>
      <NavBar />
      <main>
        <HeroImg2 heading='Our Services' image={IntroImg} />
      </main>
    </>
  )
}

export default Services;