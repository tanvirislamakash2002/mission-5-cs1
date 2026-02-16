import { getServices } from '@/lib/data';

const team = async() => {
    await getServices()
    return (
        <div className='border-blue-400 border-2 p-10'>
            this is parallel route. teams
        </div>
    );
};

export default team;