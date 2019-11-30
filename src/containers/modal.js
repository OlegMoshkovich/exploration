import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';


const Modal = ({ children }) => {
    const elRef = useRef(null) // create an element and alwyas refer to the same element
    // use ref allows us to refer to the same dom elements accross renders
    if (!elRef.current) {
        const div = document.createElement('div')
        elRef.current = div// elRef is an object and it is always going to be pointing to this div
    }
    useEffect(() => {
        const modalRoot = document.getElementById('modal');
        modalRoot.appendChild(elRef.current)
        //if you return a function - it runs as a clean up when compoenent unmounts
        // it only going to run this function whenever the modalRoot gets closed
        return () => modalRoot.removeChild(elRef.current)
    }, [])
    return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal