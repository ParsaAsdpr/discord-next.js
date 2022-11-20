import Link from 'next/link';
import React from 'react';

const RightSide = ({icon, url}) => {
    return (
        <Link href={url} className='frs'>
            {icon}
        </Link>
    );
};

export default RightSide;