import React from 'react';

interface Reply {
    reply: string;
  }
  
  interface Props {
    replies: Reply[];
  }

const Reply: React.FC<Props> = ({ replies }) => {
    return (
        <div className='grid grid-cols-2 gap-3'>
            {replies.map((rply, index) => (
              <div key={index} className='p-3 border border-neutral-600 rounded-xl hover:bg-neutral-700'>
                  <p className='text-white'>ChatGPT</p>
                  <p className='text-neutral-500 font-semibold'>{rply.reply}</p>
              </div>
            ))}
        </div>
    );
};

export default Reply;