interface ButtonProps {
    children: React.ReactNode;
    fun?: () => void;
  }
  
  export default function Button({
    children,
    fun = undefined,
  }: ButtonProps) {
  
    return (
      <button className= 'm-1 p-2 w-auto h-auto font-semibold bg-slate-800 text-white text-center rounded-md hover:bg-slate-900 '
        onClick={fun}>
        {children}
      </button>
    );
  }
  