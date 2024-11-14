import { Navigate, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const User = ({ singleuser }) => {
    // eslint-disable-next-line react/prop-types
    const { id, name, email, phone } = singleuser;
    console.log(singleuser);

    const Navigate = useNavigate();

    const handlshoedetails = () => {
        console.log(id)
        Navigate(`/user/${id}`)
    }
    return (
        <div className="singleUser">
            <p2>{name}</p2>
            <p2>{email}</p2>
            <p2>{phone}</p2>
            <button onClick={handlshoedetails}>show details</button>
        </div>
    );
};

export default User;