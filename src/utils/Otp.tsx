import React, { useRef, useState } from 'react';

type InputProps = {
  length?: number;
  onComplete: (pin: string) => void;
};


const OTPInput = ({ length = 4, onComplete }: InputProps) => {

    const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));

    const [OTP, setOTP] = useState<string[]>(Array(length).fill(''));

    const handleTextChange = (input: string, index: number) => {
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    if (input.length === 1 && index < length - 1) {inputRef.current[index + 1]?.focus();}
    if (input.length === 0 && index > 0) {inputRef.current[index - 1]?.focus();}
    if (newPin.every((digit) => digit !== '')) {onComplete(newPin.join(''));}
  };

  return (
    <div className={`grid grid-cols-4 gap-5`}>
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={OTP[index]}
          onChange={(e) => handleTextChange(e.target.value, index)}
          ref={(ref) => (inputRef.current[index] = ref as HTMLInputElement)}
          className={`p-2 m-2 w-10 h-10 rounded-lg text-center text-lg text-slate-400 bg-slate-700 outline-blue-700 border-blue-600`}
          style={{ marginRight: index === length - 1 ? '0' : '10px' }}
        />
      ))}
    </div>
  );
};


export default OTPInput;















{/*
  
  <div class="m-1 p-1 text-sm rounded-lg bg-slate-900 font-sans max-w-80">
  <input type="text" maxLength="1" max="0" min="9" class=" p-2 m-2 w-10 h-10 rounded-lg text-center text-lg text-slate-400 bg-slate-700 outline-blue-700 border-blue-600"/>
  <input type="text" class=" p-2 m-2 w-10 h-10 rounded-lg text-center text-lg text-slate-400 bg-slate-700 outline-blue-700 border-blue-600"/>
</div>

<div class="m-1 p-1 text-sm rounded-lg bg-slate-900 font-sans max-w-80">
    <input type="date" class=" text-base text-center font-semibold text-slate-500 bg-slate-700 rounded-full outline-neutral-200 place-content-center"/>
</div>





<div class="m-1 p-1 text-sm rounded-lg bg-slate-900 font-sans max-w-80">
  <div class="m-2 p-2 flex flex-col">
    <div class="text-xl text-start text-stone-100 font-semibold">Are you absolutely sure?</div>
    <div class=" text-slate-500 text-base text text-left">
      This action cannot be undone. This will permanently delete your account and remove your data from our servers.
    </div>
    <div class=" m-1 p-1 text-sm flex justify-end">
      <button class="m-1 p-2 font-semibold border-none text-gray-600 rounded-md hover:bg-slate-700">Cancel</button>
      <button class="m-1 p-2 font-semibold  border-none text-gray-600 rounded-md  border bg-slate-200 hover:bg-slate-300">Continue</button>
    </div>
  </div>
</div>


    <div class="m-1 p-1 text-sm rounded-lg bg-slate-900 font-sans text-gray-50">
      <div class="m-1 p-1 text-right text-slate-400">Date:12/12/2020</div>

      <div class="flex items-center gap-0">
        <div class="m-1 p-1 text-base font-semibold">Name Jhon Smith</div>
        <span class=" flex h-2 w-2 rounded-full bg-blue-600"></span>
      </div>

      <div class="m-1 pl-1 text-gray-200">Designation Team Manager</div>

      <div class="m-1 p-1 text-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus autem magni expedita quaerat tempora iure soluta aperiam obcaecati. Sint praesentium et dignissimos placeat unde rem at tempore ab saepe.lore Lorem ipsum 
      </div>
      
      <div class=" m-1 p-1 justify-items-start ">
        <span class="m-1 p-1 text-xs font-semibold border bg-slate-200 text-gray-600 rounded-md hover:bg-slate-300 ">ClassA</span>
        <span class="m-1 p-1 text-xs font-semibold border-none text-gray-600 rounded-md hover:bg-slate-300 ">ClassB</span>
        <span class="m-1 p-1 text-xs font-semibold border-none text-gray-600 rounded-md hover:bg-slate-300 ">ClassC</span>
        <span class="m-1 p-1 text-xs font-semibold border-none text-gray-600 rounded-md hover:bg-slate-300 ">ClassD</span>
      </div>
    </div>

 */}