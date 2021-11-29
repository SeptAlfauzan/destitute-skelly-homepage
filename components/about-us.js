export default function AboutUs(){
    return(
        <div id="about-us" className="flex  flex-wrap w-full h-96  mt-40 mb-40 md:mb-20 md:pt-24">
        <div className="relative w-full md:w-1/2 md:mx-auto z-10 -top-24">
          <h3 className="absolute text-5xl text-left -bottom-8 ml-10 md:-left-20">
            <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
              Tentang <span className="text-accent">Kami</span>
            </div>
            <div className="flex flex-row gap-2 mt-2">
              <div className="bg-accent h-2 w-5/6 rounded-full" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000"/>
              <div className="bg-accent h-2 w-1/6 rounded-full" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800"/>
            </div>
          </h3>
        </div>
        <div className="relative w-full -top-24">
          <div className="absolute inset-x-0 bg-primary-light pb-10 ">
            <p className="w-4/6 md:w-1/2 text-left font-light mx-auto my-20" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800">
              Kami merupakan sekelompok mahasiswa prodi S1 Teknik Informatika. Tujuan dibentuknya tim ini adalah untuk membuat sebuah game sebagai tugas besar dari matakuliah grafika komputer yang diampu oleh Bapak  Muis Muhtadi, S.T., M.T., M.Sc, Ph.D.
            </p>
          </div>
        </div>
      </div>
    )
}