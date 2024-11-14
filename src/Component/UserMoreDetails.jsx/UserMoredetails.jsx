import { useLoaderData } from 'react-router-dom';

const UserMoredetails = () => {
    const moredata = useLoaderData();
    console.log(moredata)
    return (
        <div className='singleUser'>
            <h2>{moredata.website}</h2>
            <h3>{moredata.company.name}</h3>
            <h4>{moredata.company.bs}</h4>
        </div>
    );
};

export default UserMoredetails;