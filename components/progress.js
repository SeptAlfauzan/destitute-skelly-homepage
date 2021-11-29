export default function Progress(props){
    console.log('data', props.progress_data)
    return(
        <>
            <ul className="flex flex-col">
                {props.progress_data.map((progess, index)=>(
                <li key={index} className={`mx-auto pb-10 border-l-2 border-accent w-2/4 grid grid-cols-12 gap-2 ${index == props.progress_data.length - 1? 'border-opacity-0' : ''}`}>
                    <div className="w-5 h-5 bg-accent rounded-full -ml-3"/>
                    <div className="col-span-11 ">
                        <p className="font-light  text-left text-accent">
                        {progess.date} 
                        </p>
                        <p className="font-light  text-left text-gray-300">
                        {progess.content} 
                        </p>
                    </div>
                </li>
                )
                )}
            </ul>
        </>
    )
}