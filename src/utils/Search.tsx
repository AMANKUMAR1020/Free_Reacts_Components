import { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";


interface SearchProps{
    arg: string,
    setArg:React.Dispatch<React.SetStateAction<string>>,
    containers: Object[];
}

const Search = ({arg,setArg, containers}:SearchProps)=>{

    useEffect(()=>{
        
    },[])

    return(<>
        <div className="m-1 flex h-auto w-screen flex-row rounded-lg bg-slate-700 p-1">
            <div className="m-1 p-1 h-auto w-auto text-center text-slate-200"><HiOutlineSearch /></div>
            <input type="text" placeholder="Search your favorites..."
                value={arg}
                onChange={(e) => setArg(e.target.value)}
                className="m-1 flex h-10 w-screen flex-row rounded-lg bg-slate-500 p-1 focus:outline-none text-slate-300 font-semibold text-base" />
        </div>

    <ul className="m-0 p-0 h-auto w-auto z-0 ">
      <li className="m-1 p-1 h-auto w-auto rounded-lg bg-slate-600 text-slate-300 text-base">
        {}
    </li>
  </ul>


    </>)
}
export default Search;