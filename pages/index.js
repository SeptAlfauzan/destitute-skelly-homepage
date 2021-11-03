import Head from 'next/head'
import imagesHandler from '../components/imagesHandler'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Progress from '../components/progress'
import img1 from '../public/images/img1.png'
import img2 from '../public/images/img2.png'
import ImageComp from '../components/imagesHandler'

export default function Home() {
  return (
    <Layout>
      {/* welcome banner */}
      <Navbar />
      <div id="home" className="flex flex-wrap w-full h-72 md:h-screen content-center pt-56 md:pt-20 mb-32 md:mb-16">
        <div className="order-2 w-full md:order-1 md:w-2/5  font-light px-10 sm:px-20 mt-16 md:text-left md:pl-24">
          <div className="absolute invisible md:visible bg-primary-light w-1/4 h-2/4 top-1/4 left-0 opacity-20 rounded-lg"/>
          <p className="md:mt-36">Ini nanti isinya buat deskripsi game, tapi karena sekarang saya bingung mau ngisi apaan, makanya saya ketik gini dulu ya, hehehe</p>
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

      <div id="progress" className="flex   flex-wrap min-h-screen w-full mt-28 md:mt-0 mb-28 content-center">
        <div className="relative w-full z-10 -bottom-10">
          <h3 className="text-4xl w-3/4 md:mx-auto md:text-6xl text-left ml-20">
            Our Work Weekly Progress
          </h3>
        </div>
        <div className="relative w-full bg-primary-dark py-24">
          <Progress />
        </div>
      </div>

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

      <div id="about-us" className="flex  flex-wrap w-full h-96  mt-40 mb-40 md:mb-20 md:pt-24">
        <div className="relative w-full md:w-1/2 md:mx-auto z-10 -top-24">
          <h3 className="absolute text-5xl text-left -bottom-8 ml-10 md:-left-20">
            About <span className="text-accent">Us</span>
            <div className="flex flex-row gap-2 mt-2">
              <div className="bg-accent h-2 w-5/6 rounded-full" />
              <div className="bg-accent h-2 w-1/6 rounded-full" />
            </div>
          </h3>
        </div>
        <div className="relative w-full -top-24">
          <div className="absolute inset-x-0 bg-primary-light pb-10 ">
            <p className="w-4/6 md:w-1/2 text-left font-light mx-auto my-20">
              gim ini dibuat untuk bla bla bla bla bla gim ini dibuat untuk bla bla bla bla bla gim ini dibuat untuk bla bla bla bla bla gim ini dibuat untuk bla bla bla bla bla
              gim ini dibuat untuk bla bla bla bla bla gim ini dibuat untuk bla bla bla bla bla gim ini dibuat untuk bla bla bla bla bla gim ini dibuat untuk bla bla bla bla bla
              gim ini dibuat untuk bla bla bla bla bla gim ini dibuat untuk bla bla bla bla bla gim ini dibuat untuk bla bla bla bla bla gim ini dibuat untuk bla bla bla bla bla
            </p>
          </div>
        </div>
      </div>

      <div id="team" className="flex flex-wrap w-full min-h-screen content-center pb-28 mt-52 md:mt-0">
        <div className="relative w-full top-0 z-10">
          <div className="text-4xl text-center border-accent border-4 border-l-transparent border-t-transparent w-1/2 md:w-1/5 mx-auto pb-5 rounded-br-3xl ">Our Team</div>
        </div>
        <div className="relative mx-auto grid grid-flow-row md:grid-flow-col gap-16 mt-20 md:w-3/4 md:gap-0">
          <div className="w-3/4 mx-auto">
            <div className="w-20 h-20 rounded-full bg-gray-500 mx-auto" />
            <p className="text-center font-light mt-3">
              lorem ipsum dolor emet lorem ipsum dolor emet
              lorem ipsum dolor emet
              lorem ipsum dolor emet
              lorem ipsum dolor emet
              lore
            </p>
          </div>
          <div className="w-3/4 mx-auto">
            <div className="w-20 h-20 rounded-full bg-gray-500 mx-auto" />
            <p className="text-center font-light mt-3">
              lorem ipsum dolor emet lorem ipsum dolor emet
              lorem ipsum dolor emet
              lorem ipsum dolor emet
              lorem ipsum dolor emet
              lore
            </p>
          </div>
          <div className="w-3/4 mx-auto">
            <div className="w-20 h-20 rounded-full bg-gray-500 mx-auto" />
            <p className="text-center font-light mt-3">
              lorem ipsum dolor emet lorem ipsum dolor emet
              lorem ipsum dolor emet
              lorem ipsum dolor emet
              lorem ipsum dolor emet
              lore
            </p>
          </div>
          <div className="w-3/4 mx-auto">
            <div className="w-20 h-20 rounded-full bg-gray-500 mx-auto" />
            <p className="text-center font-light mt-3">
              lorem ipsum dolor emet lorem ipsum dolor emet
              lorem ipsum dolor emet
              lorem ipsum dolor emet
              lorem ipsum dolor emet
              lore
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
