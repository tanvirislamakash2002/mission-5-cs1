import React from 'react';

const blog = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params;
    console.log({id});
    return (
        <div>
            <h1>we got a dynamic id: {id}</h1>
        </div>
    );
};

export default blog;