import Head from 'next/head'
import Navbar from './navbar'
import ImageComp from './imagesHandler'
import githubImage from './../public/images/github (1).png'
import gameIcon from './../public/images/launcher icon.png'

export default function Layout({ children, title = "The Destitute Skelly" }) {
  return (
    <div className="min-h-screen text-white  bg-primary">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/images/launcher icon.png" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        </style>
        
      </Head>

      <main className="mt-0 pt-0 flex flex-col  w-full text-center">
      <Navbar />
        {children}
      </main>

      <footer className="flex flex-wrap items-center justify-center w-full bg-black text-gray-100 pt-20 pb-10">
        <div className="flex flex-wrap md:w-3/4 w-4/5 ml-auto md:m-auto">
          <div className="w-full md:w-1/3 mb-6 flex flex-row gap-2">
            <div className="w-10 h-10 relative mr-2">
                <ImageComp img={gameIcon}/>
            </div>
            <h5 className="text-2xl mb-4">The Destitute Skelly</h5>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h5 className="text-xl mb-4">Download dan mainkan sekarang!</h5>
            <a className="transition-all duration-399 md:border-l-0 md:border-b-2  border-opacity-0 hover:bg-green-600 rounded bg-green-500 px-5 py-2 text-center" href="https://github.com/SeptAlfauzan/Computer-Graphic-s-Project/releases/download/v1.1.0/TheDestituteSkelly.v1.1.0.zip" download>Download</a>
          </div>
          <div className="w-full md:w-1/3 mb-6 justify-center">
            <h5 className="text-xl mb-4">Github kami</h5>
          <div className="w-16 h-16  relative bg-white rounded-full">
              <a href="https://github.com/SeptAlfauzan/Computer-Graphic-s-Project" target="_blank" >
                      <ImageComp img={githubImage}/>
              </a>
          </div>
          </div>
        </div>
          <p className="flex w-full items-center justify-center text-center text-gray-400 mt-10">
            copyright &copy; {new Date().getFullYear()}
          </p>
      </footer>
    </div>
  )
}