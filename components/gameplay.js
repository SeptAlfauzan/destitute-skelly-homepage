import ImageComp from "./imagesHandler"
import img2 from '../public/images/img2.png'

export default function GamePlay() {
    return(
        <div id="gameplay" className="flex  flex-wrap w-full md:w-3/5 md:mx-auto pt-24">
        <div className="relative w-full bottom-5 md:bottom-0">
          <h3 className="absolute text-4xl text-left right-8 z-20 md:text-6xl md:-top-10">
            Game
            <span className=" bg-accent px-5 pb-3 right-0 rounded-tl-3xl rounded-br-3xl">play</span>
          </h3>
        </div>
        <div className="relative w-3/4 mx-auto h-48 md:h-80 sm:h-80 overflow-hidden">
          <div className="absolute inset-x-0 h-full  bg-gray-700  shadow-xl rounded">
            <ImageComp img={img2} />
          </div>
        </div>
      </div>
    )
}