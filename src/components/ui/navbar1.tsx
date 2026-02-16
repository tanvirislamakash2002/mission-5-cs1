import Link from 'next/link';
import React from 'react';
import { ModeToggle } from '../theme/Toggler';

const Navbar1 = () => {
    return (
        <nav className='flex justify-around w-full bg-amber-400'>
            <ul>
                <li><Link href={"/next-level"}>next level</Link></li>
                <li>programming hero</li>
            </ul>
            <ModeToggle></ModeToggle>
        </nav>
    );
};

export default Navbar1;