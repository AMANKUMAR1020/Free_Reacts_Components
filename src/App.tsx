import Alert from "./utils/Alert";
const App = () => {

  return (
    <div>
      <Alert
      msg="efihwe"
      title="akjfqk"
      show={true}
      duration={3000}
      />

    </div>
  );
};

export default App;


// import InfiniteScroll from "./utils/InfiniteScroll";

// const App = () => {

//   return (
//     <div>
//       <InfiniteScroll/>
//     </div>
//   );
// };

// export default App;





// import { useState } from "react";
// import Dialog from "./utils/Dialog";

// const App = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const openDialog = () => setIsDialogOpen(true);
//   const closeDialog = () => setIsDialogOpen(false);

//   return (
//     <div>
//       <button onClick={openDialog}>Open Dialog</button>
//       <Dialog isOpen={isDialogOpen} onClose={closeDialog} title="My Dialog">
//         <p>This is the dialog content!</p>
//       </Dialog>
//     </div>
//   );
// };

// export default App;





// import './App.css';
// // import Input from './utils/Input';
// // import { useState } from "react";
// import OTPInput from './utils/Otp';

// function App() {
//   // const [arg, setArg] = useState('');
//   const handleSubmit = (pin: string) => {
//     console.log(pin)
//   }
//   return (
//     <div className='w-screen h-screen bg-slate-500 flex items-center justify-center text-center'>
//       {/* <Input arg={arg} setArg={setArg}>.</Input> */}
//       <OTPInput length={5} onComplete={handleSubmit} />
//     </div>
//   );
// }

// export default App;










// import './App.css';
// // import Button from "./utils/Button"
// import Input from './utils/Input';
// import { useState } from "react";

// function App() {
//   const [Arg, setArg] = useState('')

//   return (
//     <div className='w-screen h-screen bg-slate-500 flex items-center justify-center text-center'>
//       {/* <Button fun={() => { alert('clicked') }}>
//         Click
//       </Button> */}

//       <Input Arg={Arg}, setArg={setArg}>Al</Input>
//     </div>
//   );
// }

// export default App;
