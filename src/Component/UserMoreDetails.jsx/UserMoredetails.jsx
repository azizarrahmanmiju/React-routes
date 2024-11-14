import { useLoaderData, useNavigate } from 'react-router-dom';

const UserMoredetails = () => {
    const moredata = useLoaderData();
    const navigate = useNavigate();
    console.log(moredata)
    const handlegoback = () => {
        navigate(-1)
    }
    return (
        <div className='singleUser'>
            <h2>{moredata.website}</h2>
            <h3>{moredata.company.name}</h3>
            <h4>{moredata.company.bs}</h4>
            <button onClick={handlegoback}>Go back</button>
        </div>
    );
};

export default UserMoredetails;