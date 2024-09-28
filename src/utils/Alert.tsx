import { useState,useEffect } from "react";

interface AlertProps {
  msg:string,
  title:string,
  emogi?:string,
  duration?:number,
  show:boolean
}
  
  export default function Alert({msg, emogi,title, duration, show}:AlertProps) {
    console.log(duration)
    const [isVisible, setIsVisible] = useState<boolean>(show);

    useEffect(() => {
      if (duration && duration > 0) {
        const timer = setTimeout(() => {
          console.log("Alert duration ended");
          setIsVisible(false)
        }, duration);
  
        return () => clearTimeout(timer);
      }
    }, [duration, msg]);
  
    useEffect(() => {
      setIsVisible(show); // Update local visibility state based on show prop
    }, [show]);

    
    if(!isVisible){
      return (<>show is closed </>)
    }
    if(duration === 0){
      return (<>Null </>)
    }
    
    return (
      <>
        <div className="m-1 p-1 text-sm rounded-lg bg-slate-900 font-sans">
          <div className=" m-1 p-1 flex border rounded-2xl border-slate-600">
            <div className=" m-1 p-1 text-2xl ">🚀{emogi}</div>
            <div className=" m-1 p-1">
              <div className=" text-start text-stone-100 font-semibold">{title}</div>
              <div className=" flex text-slate-500 text-sm ">{msg}</div>
            </div>
          </div>
        </div>

        {/* <div className="m-1 p-1 text-sm rounded-lg bg-slate-900 font-sans">
          <div className=" m-1 p-1 flex border rounded-2xl border-red-600">
            <div className=" m-1 p-1 text-2xl ">☢️</div>
            <div className=" m-1 p-1">
              <div className=" text-start text-red-600 font-semibold">Massage Title</div>
              <div className=" flex text-red-500 text-sm ">This is alert massage . try  ot fis this as soon as possible</div>
            </div>
          </div>
        </div> */}
      </>
    );
  }
