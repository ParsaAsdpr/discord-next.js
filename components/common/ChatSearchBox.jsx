import React from 'react';

const ChatSearchBox = () => {
    return (
        <div className='bg-[#202225] rounded-md'>
            <input className='bg-transparent outline-none px-2 w-36 text-sm focus:w-60 ease-out duration-200' type='text' placeholder='Search' />
        </div>
    );
};

export default ChatSearchBox;