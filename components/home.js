import ImageComp from "./imagesHandler"
import img1 from '../public/images/img1.png'

export default function HomeComp(){
   
  return(
    <div id="home" className="flex flex-wrap w-full h-72 md:h-screen content-center pt-56 md:pt-20 mb-32 md:mb-16">
    <div className="order-2 w-full md:order-1 md:w-2/5  font-light px-10 sm:px-20 mt-16 md:text-left md:pl-24">
      <div className="absolute invisible md:visible bg-primary-light w-1/4 h-2/4 top-1/4 left-0 opacity-20 rounded-lg"/>
      <p className="relative md:mt-36 z-10">
        The Destitute Skelly merupakan sebuah game bergenre <i>action platformer</i> yang didalam game ini player akan memainkan karakter skelly dan player harus mengumpulkan semua koin pada setiap level untuk dapat melanjutkan ke level yang lebih tinggi.
      </p>
    </div>
    <div className="order-1 w-3/4 ml-auto md:order-2 md:w-3/5 md:h-full mt-10">

      <div className="relative w-full">
        <h3 className="absolute text-5xl md:text-7xl z-10 -left-10 text-left mt-6">
          The Detitute Skelly
          <div className="flex flex-row gap-3 invisible md:visible">
          <div className="h-2 bg-accent w-3/4 rounded" />
          <div className="h-2 bg-accent w-1/4 rounded" />
          </div>
        </h3>
      </div>
      <div className="relative w-full h-64 md:h-3/4 overflow-hidden top-8">
        <div className="absolute bg-gray-800  rounded shadow-lg inset-0 -right-10 text-right" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          {/* <ImageComp img={img1} /> */}
          <video className="w-full h-full object-cover" autoPlay loop   muted>
            <source src="https://res.cloudinary.com/dsclsqamv/video/upload/v1638152758/2021-11-28_20-42-57_online-video-cutter.com_1_sw5vek.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>

    </div>
  </div>
  )
}