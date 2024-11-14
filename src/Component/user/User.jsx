
const User = ({ singleuser }) => {
    const { name, email, phone } = singleuser;
    console.log(singleuser);
    return (
        <div className="singleUser">
            <p2>{name}</p2>
            <p2>{email}</p2>
            <p2>{phone}</p2>
        </div>
    );
};

export default User;