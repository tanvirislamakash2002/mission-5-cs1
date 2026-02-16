import React from 'react';

const testPage = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const id = await params
    console.log(id);
    return (
        <div>
catch all...
        </div>
    );
};

export default testPage;