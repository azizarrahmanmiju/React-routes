import { useLoaderData } from "react-router-dom";
import User from "../user/user";


const Users = () => {

    const usersdata = useLoaderData();


    return (
        <div>
            <h1>Total Users : {usersdata.length}</h1>
            <div className="container">
                {
                    usersdata.map((user, index) => {
                        return (
                            <User key={index} singleuser={user}></User>
                        )


                    }
                    )
                }
            </div>

        </div>
    );
};

export default Users;