import Link from 'next/link';
import React, { ReactNode } from 'react';

const dashLayout = ({
    children,
    analytic,
    team,
}: Readonly<{
    children: React.ReactNode;
    analytic: ReactNode;
    team: ReactNode;
}>) => {
    return (
        <>

            <div className="flex w-full justify-around p-20">
                {analytic}
                {team}
            </div>
            {children}
        </>
    );
};

export default dashLayout;