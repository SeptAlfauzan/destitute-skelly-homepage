import { useState } from "react"

export default function ModalProgress({ title, content, isActive, handleCloseModal }) {
    if(!isActive) console.log("asdasdasdasd");    
    // const [active, setActive] = useState(isActive);
    const handleClose = () => {
        handleCloseModal(false)
    }
    return (
        <div className={` transition-all ease-linear duration-100 fixed z-10 inset-0 overflow-y-auto ${isActive? 'opacity-100' : ' opacity-0 invisible'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-center  justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
               
                <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                    {title}
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                       {content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" onClick={handleClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}