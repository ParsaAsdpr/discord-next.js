import Image from 'next/image';
import React from 'react';
import {IoMdMic} from 'react-icons/io'
import {MdHeadset} from 'react-icons/md'
import {RiSettings5Fill} from 'react-icons/ri'

const ProfileBar = () => {
    return (
        <div className='absolute bg-[#232428] right-0 translate-x-full w-[15rem] bottom-0 py-2.5 px-2 flex justify-between'>
            <div className='flex'>
            <span className="h-full"><Image className="rounded-full" alt='pfp' src='/Avatars/danihit.jpeg' width={32} height={32} /></span>
                <div className='flex flex-col pl-2'>
                <p className='text-slate-100 font-bold text-[13px]'>Parsa</p>
                <p className='text-slate-300 text-[10.5px]'>Parsa$1336</p>
                </div>
            </div>
            <div className='flex gap-3 text-xl text-gray-400 items-center mr-1.5'>
                <IoMdMic />
                <MdHeadset className='text-[22px] translate-y-0.5' />
                <RiSettings5Fill />
            </div>
        </div>
    );
};

export default ProfileBar;