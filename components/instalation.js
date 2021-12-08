import React, { useState } from 'react'
import ImageComp from './imagesHandler'

export default function Instalation({instalations_data}){
    const listData = Array.from(instalations_data)
    const [pagination, setPagination] = useState(1)
    const notActive = 'bg-primary-light text-accent hover:bg-accent hover:text-white'
    
    const handlePagination = (index) => setPagination(index+1)

    return(
        <>
        <div id="instalation"  className="mt-20 flex flex-col items-center  h-screen pt-20">
            <div className="px-10 md:w-3/4">
            <h3 className="text-4xl text-left mb-2">Instalasi Game</h3>
            <div id="button-container" className="w-full flex align-start gap-1">
                {listData.map((data, index)=>(
                <button onClick={()=>handlePagination(index)} className={`w-10 h-10 rounded ${index+1 == pagination? 'bg-accent': notActive}`}>
                    {index+1}
                </button>
                ))}
            </div>
                {listData.map((data, index)=>(
                    <div className={`mt-10 bg-primary-medium p-10 rounded ${index+1 == pagination? 'block' : 'hidden'}`}>
                        <h3 className="text-2xl text-left">{data.title}</h3>
                        <img src={data.url}/>
                        <div className="mt-10 text-left text-gray-300">{data.content}</div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
} 