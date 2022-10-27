import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ReactTypingEffect from 'react-typing-effect'


const Home = () => {
    return (
      <div className='py-1'>
      <div className='max-w-[1080px] mt-[-96px] w-full py-52 mx-auto text-center flex flex-col justify-center'>
    <ReactTypingEffect text={["Ryo Eiamrerai","Bangkok,Thailand","Nice to meet you"]} speed={80} eraseDelay={100} className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 text-gray-700" />
    <Slide>
        <img  src="./RyoU.jpg" className='object-cover h-96 mx-auto w-96 py-8'/>
        <img  src="./RyoU2.jpg" className='object-cover w-96 h-96 mx-auto py-8' />
    </Slide>
    </div>
    </div>
        )
}
export default Home