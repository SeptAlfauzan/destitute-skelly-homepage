import Progress from "./progress"

export default function ProgressContainer({progress_data}) {
    return(
        <div id="progress" className="flex   flex-wrap min-h-screen w-full mt-28 md:mt-0 mb-28 content-center">
        <div className="relative w-full z-10 -bottom-10">
          <h3 className="text-4xl w-3/4 md:mx-auto md:text-6xl text-left ml-20">
            Progress Mingguan
          </h3>
        </div>
        <div className="relative w-full bg-primary-dark py-24">
          <Progress progress_data={progress_data}/>
        </div>
      </div>
    )
}