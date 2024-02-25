import React from 'react';

const ChatCards = () => {
    return (
        <div className='grid grid-cols-2 gap-3'>
            <div className='p-3 border border-neutral-600 rounded-xl hover:bg-neutral-700'>
                <p className='text-white'>Plan an itinerary</p>
                <p className='text-neutral-500 font-semibold'>To experience the wildlife in the australian outback</p>
            </div>
            <div className='p-3 border border-neutral-600 rounded-xl hover:bg-neutral-700'>
                <p className='text-white'>Plan an itinerary</p>
                <p className='text-neutral-500 font-semibold'>To experience the wildlife in the australian outback</p>
            </div>
            <div className='p-3 border border-neutral-600 rounded-xl hover:bg-neutral-700'>
                <p className='text-white'>Plan an itinerary</p>
                <p className='text-neutral-500 font-semibold'>To experience the wildlife in the australian outback</p>
            </div>
            <div className='p-3 border border-neutral-600 rounded-xl hover:bg-neutral-700'>
                <p className='text-white'>Plan an itinerary</p>
                <p className='text-neutral-500 font-semibold'>To experience the wildlife in the australian outback</p>
            </div>
        </div>
    );
};

export default ChatCards;