import { useCallback, useState } from "react";



export function useModalState(defaulValue=false){
    const [isOpen,setIsOpen]=useState(defaulValue)
    const open = useCallback(()=>setIsOpen(true),[])
    const close =useCallback(()=>setIsOpen(false),[])
    return {isOpen,open,close}
}