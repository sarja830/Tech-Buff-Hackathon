import React from 'react';
import {TbSquareRoundedArrowRightFilled} from "react-icons/tb";

const AddText = () => {
  return (
    <div className='pl-12 py-10'>
        <h1 className='text-4xl'><strong>Let's get started</strong></h1>
        <label htmlFor='prompt' className='mt-4 block text-lg text-gray-500 mb-2'>Enter a prompt</label>
        <div className='flex flex-row items-end'>
            <textarea type='textarea' id='prompt' placeholder='Enter your prompt...' className=' focus:outline-blue-400 break-words rounded-md px-4 py-2 text-base w-3/4 h-96' />
            <button><TbSquareRoundedArrowRightFilled size={35} /></button>
        </div>
    </div>
  );
};

export default AddText;