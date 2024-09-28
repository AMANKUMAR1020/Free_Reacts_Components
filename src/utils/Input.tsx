interface InputProps {
    children?: React.ReactNode;
    arg: string;
    setArg: React.Dispatch<React.SetStateAction<string>>;
  }
  
  export default function Input({
    children,
    arg,
    setArg
  }: InputProps) {
    return (
      <div>
        <input 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          required
          type="text"
          value={arg}
          onChange={(e) => setArg(e.target.value)}
        />
        {arg}
      </div>
    );
  }