import Link from 'next/link';
import React, { ReactNode } from 'react';

const dashLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <nav className='flex justify-around w-full bg-blue-400'>
                <ul>
                    <li><Link href={"/next-level"}>next level</Link></li>
                    <li>programming hero</li>
                </ul>
            </nav>
            {children}
        </>
    );
};

export default dashLayout;