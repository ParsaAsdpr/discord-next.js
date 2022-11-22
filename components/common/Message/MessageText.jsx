import React from 'react';

const MessageText = ({children}) => {
    return (
        <div>
            <p className='text-[#ccc] text-[14px]'>{children}</p>
        </div>
    );
};

export default MessageText;