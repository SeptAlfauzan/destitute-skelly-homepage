import indraImg from './../public/images/team/nadindra.png'
import sandyImg from './../public/images/team/sandy.jpeg'
import septaImg from './../public/images/team/septa.jpg'
import zahraImg from './../public/images/team/zahra.png'
import ImageComp from './imagesHandler'

export default function Team(){
    return(
        <div id="team" className="flex flex-wrap w-full min-h-screen content-center pb-28 mt-52 md:mt-0">
        <div className="relative w-full top-0 z-10">
          <div className="text-4xl text-center border-accent border-4 border-l-transparent border-t-transparent w-1/2 md:w-1/5 mx-auto pb-5 rounded-br-3xl ">
            <h2 className="text-6xl">Anggota Tim</h2>
          </div>
        </div>
        <div className="relative mx-auto grid grid-flow-row md:grid-flow-col gap-5 mt-20 md:w-2/4 md:gap-0">
          <div className="w-3/4 mx-auto">
            <div className="w-20 h-20 rounded-full bg-gray-500 mx-auto relative overflow-hidden">
              <ImageComp img={indraImg}/>
            </div>
            <p className="text-center font-light mt-3">
              Nadindra Dwi Ariyanta
            </p>
          </div>
          <div className="w-3/4 mx-auto">
            <div className="w-20 h-20 rounded-full bg-gray-500 mx-auto relative overflow-hidden">
              <ImageComp img={sandyImg}/>
            </div>
            <p className="text-center font-light mt-3">
               Sandy Yunan Maulana
            </p>
          </div>
          <div className="w-3/4 mx-auto">
            <div className="w-20 h-20 rounded-full bg-gray-500 mx-auto relative overflow-hidden">
              <ImageComp img={septaImg}/>
            </div>
            <p className="text-center font-light mt-3">
                Septa Alfauzan
            </p>
          </div>
          <div className="w-3/4 mx-auto">
            <div className="w-20 h-20 rounded-full bg-gray-500 mx-auto relative overflow-hidden">
              <ImageComp img={zahraImg}/>
            </div>
            <p className="text-center font-light mt-3">
                Zahratur Rafi’ah
            </p>
          </div>
        </div>
      </div>
    )
}