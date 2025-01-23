import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { PropsWithChildren } from "react";

type ScrollToTopProps={
    children:React.ReactNode
}


export default function ScrollToTop({children}:ScrollToTopProps){
    const {pathname}=useLocation();
    // console.log({pathname})

    useEffect(()=>{
    window.scrollTo(0,0);
    },[pathname]);
    return(
        <>
        {children}
        </>
    )
}