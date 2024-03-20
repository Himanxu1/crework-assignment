import logo from '../assets/logo.png'
import dribble from '../assets/dribbble.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import behance from '../assets/behance.png'

const Footer = () => {
  return (
    <div>

    <div className='flex justify-between flex-col items-center p-10 lg:flex-row'>
        <div>
            <img src={logo} alt="logo" className="w-24 h-12 mx-auto" />
        </div>

    <div className='flex w-[400px] justify-around text-gray-300'>
        <div className='mt-10'>
            <p>Newsletter</p>
            <p className='mt-4'>Builders Cohort</p>
        </div>
        <div className='mt-10'>
            <p>30 Days of PM</p>
            <p className='mt-4'>Transition to PM role</p>
        </div>
    </div>
    <div className='flex p-8'>

       <img src={dribble} alt="dribble" className="w-6 h-6 mx-2" />
         <img src={facebook} alt="facebook" className="w-6 h-6 mx-2" />
    <img src={linkedin} alt="linkedin" className="w-6 h-6 mx-2" />
        <img src={behance} alt="behance" className="w-6 h-6 mx-2" />  
    </div>
    </div>
    <p className='mb-10'>Copyright @2024 Crework</p>
    </div>
  )
}

export default Footer