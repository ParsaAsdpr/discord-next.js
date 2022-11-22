import React from 'react';

const ChatTextBox = ({channel}) => {
    return (
        <div className='w-full px-4'>
            <input type='text' className='bg-[#40444B] text-base py-2.5 px-4 w-full rounded-lg outline-none text-[#ddd] placeholder:text-[#808080d8] placeholder:text-[0.92rem]' autoFocus placeholder={`Message @${channel}`} />
            <div className='px-5 h-6 w-full'></div>
        </div>
    );
};

export default ChatTextBox;