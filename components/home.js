import ImageComp from "./imagesHandler"
import img1 from '../public/images/img1.png'

export default function HomeComp(){
    return(
    <div id="home" className="flex flex-wrap w-full h-72 md:h-screen content-center pt-56 md:pt-20 mb-32 md:mb-16">
    <div className="order-2 w-full md:order-1 md:w-2/5  font-light px-10 sm:px-20 mt-16 md:text-left md:pl-24">
      <div className="absolute invisible md:visible bg-primary-light w-1/4 h-2/4 top-1/4 left-0 opacity-20 rounded-lg"/>
      <p className="relative md:mt-36 z-10">Ini nanti isinya buat deskripsi game, tapi karena sekarang saya bingung mau ngisi apaan, makanya saya ketik gini dulu ya, hehehe</p>
    </div>
    <div className="order-1 w-3/4 ml-auto md:order-2 md:w-3/5 md:h-full mt-10">

      <div className="relative w-full">
        <h3 className="absolute text-4xl md:text-7xl z-10 -left-10">
          Welcome
          <div className="h-2 bg-accent w-full rounded" />
        </h3>
      </div>
      <div className="relative w-full h-64 md:h-3/4 overflow-hidden top-8">
        <div className="absolute bg-gray-800  rounded shadow-lg inset-0 -right-10 text-right">
          <ImageComp img={img1} />
        </div>
      </div>

    </div>
  </div>
  )
}