
interface TodoBoxProps{
    title?:string,
    msg:string,
    edit?:()=>void,
    del?: ()=>void
};

const TodoBox = ({ title, msg, edit, del }:TodoBoxProps)=>{
    
    return(<>
        <div className="m-1 p-1 text-sm rounded-lg bg-slate-900 font-sans">
            <div className=" m-1 p-1 flex border rounded-2xl border-slate-600">
                <div className=" m-1 p-1 w-full flex flex-row">
                        <div className=" m-1 p-1">
                            <div className=" text-start text-stone-100 font-semibold">{title}</div>
                            <div className=" flex text-slate-500 text-sm ">{msg ? msg : "null"}</div>
                        </div>

                        <div className=" m-1 p-1 ">
                            <button onClick={edit} className="m-1 p-2 font-semibold border-none text-white rounded-md hover:bg-slate-700">Edit</button>
                            <button onClick={del} className="m-1 p-2 font-semibold  border-none text-white rounded-md  border bg-red-600 hover:bg-red-500">Delete</button>
                        </div>
                </div>
            </div>
        </div>
    </>)
}
export default TodoBox;