import React from 'react';

const ErrorBox = ({title, children, confirmText, cancelText}) => {
    return (
        <div className='py-4 px-4 bg-[#202225] rounded-md'>
            <h4 className='text-center text-lg font-bold text-white'>{title}</h4>
            <p className='text-white text-[0.76rem] py-1 px-1'>
            {children}
            </p>
            <button className='py-1.5 w-full text-sm font-medium rounded-[0.23rem] bg-[#5360eb] hover:bg-[#4752C4] transition text-[#eee] my-2'>{confirmText}</button>
            <button className='text-[#ddd] text-sm font-medium hover:underline py-1.5 w-full'>{cancelText}</button>
        </div>
    );
};

export default ErrorBox;