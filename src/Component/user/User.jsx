import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const User = ({ singleuser }) => {
    // eslint-disable-next-line react/prop-types
    const { id, name, email, phone } = singleuser;
    console.log(singleuser);
    return (
        <div className="singleUser">
            <p2>{name}</p2>
            <p2>{email}</p2>
            <p2>{phone}</p2>
            <Link to={`/user/${id}`}><button>Show details</button></Link>
        </div>
    );
};

export default User;