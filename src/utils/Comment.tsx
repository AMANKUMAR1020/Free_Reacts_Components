
interface ClassProps{
    ClassA:string,
    ClassB:string,
    ClassC:string,
    ClassD:string,
}
interface CommentProps{
    date?:string,
    name:string,
    designation?:string,
    comment:string,
    classes?: ClassProps,
}
const Comment = ({date,name,designation,comment, classes }:CommentProps ) =>{
    return(<>
    <div className="m-1 p-1 text-sm rounded-lg bg-slate-900 font-sans text-gray-50">
      <div className="m-1 p-1 text-right text-slate-400">{date}</div>
      <div className="m-1 p-1 text-base font-semibold">{name}</div>
      <div className="m-1 pl-1 text-gray-200">{designation}</div>

      <div className="m-1 p-1 text-slate-500">{comment}</div>
      
      <div className=" m-1 p-1 justify-items-start ">
        {classes && <>
            <span className="m-1 p-1 text-xs font-semibold border bg-slate-200 text-gray-600 rounded-md hover:bg-slate-300">{classes.ClassA}</span>
            <span className="m-1 p-1 text-xs font-semibold border-none text-gray-600 rounded-md hover:bg-slate-300 ">{classes.ClassB}</span>
            <span className="m-1 p-1 text-xs font-semibold border-none text-gray-600 rounded-md hover:bg-slate-300 ">{classes.ClassC}</span>
            <span className="m-1 p-1 text-xs font-semibold border-none text-gray-600 rounded-md hover:bg-slate-300 ">{classes.ClassD}</span>
        </>}
      </div>
    </div> 
    </>)
}
export default Comment;