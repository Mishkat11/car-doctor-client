import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src={person} className="w-3/4 max-w-sm rounded-lg shadow-2xl" />
    <img src={parts} className="max-w-sm rounded-lg shadow-2xl absolute w-1/2 border-8 right-4 top-1/2" />
    </div>
    <div className='lg:w-1/2 space-y-4'>
        <h1 className='font-bold text-[#FF3811] text-lg'>About us</h1>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
      <button className="btn btn-secondary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;