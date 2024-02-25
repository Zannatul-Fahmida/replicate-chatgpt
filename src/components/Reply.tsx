import React from 'react';

interface Reply {
    title: string;
    description: string;
  }
  
  interface Props {
    replies: Reply[];
  }

const Reply: React.FC<Props> = ({ replies }) => {
    return (
        <div className='grid grid-cols-2 gap-3'>
            {replies.map((reply, index) => (
              <div key={index} className='p-3 border border-neutral-600 rounded-xl hover:bg-neutral-700'>
                  <p className='text-white'>{reply.title}</p>
                  <p className='text-neutral-500 font-semibold'>{reply.description}</p>
              </div>
            ))}
        </div>
    );
};

export default Reply;