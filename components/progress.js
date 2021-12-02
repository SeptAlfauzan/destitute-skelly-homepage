import { useState } from "react"
import ModalProgress from "./ModalProgress";

export default function Progress(props){
    console.log('data', Array.from(props.progress_data).length)
    const dataActivations = Array.from(props.progress_data).map((data, index)=>{
        return {id:index, active:false}
    })
    console.log(dataActivations)
    if(props.progress_data == null) return null;
    // const lenProgress = props.progess
    const [progressModals, setProgressModals] = useState(dataActivations)

    const [modalActive, setmodalActive] = useState(null)
    const activateModal = (index) => {
        setmodalActive(index)
    }
    const closeModal = () => {
        setmodalActive(null)
    }

    const shorten = (str, len) => {
        if(str.length <= len) return str
        return str.substr(0, str.lastIndexOf(' ', len))
    }

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
                        <p className="text-left text-lg text-gray-300 mb-3">
                        {progess.title} 
                        </p>
                        <p className="font-light  text-left text-gray-300 md:block hidden">
                        {progess.content} 
                        </p>
                        <p className="font-light  text-left text-gray-300 md:hidden">
                        {shorten(progess.content, 100)} ...
                        <button className="text-blue-400" onClick={() => activateModal(index)}>click more</button>
                        </p>
                        <ModalProgress key={index} title={progess.title} content={progess.content} isActive={index == modalActive} handleCloseModal={closeModal}/>
                    </div>
                </li>
                )
                )}
            </ul>
        </>
    )
}