import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

interface Props {
    inputValue: string;
  }

const Message: React.FC<Props> = ({inputValue}) => {
    return (
        <div className='text-white'>
            <p className='flex gap-1 items-center'><FaUserCircle className='text-white' /> You</p>
            <p className='pl-5'>{inputValue}</p>
        </div>
    );
};

export default Message;