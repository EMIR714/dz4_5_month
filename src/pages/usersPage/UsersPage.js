import React from "react";
import { useDispatch, useSelector  } from "react-redux";
import User from "../../components/User";
import { fetchUsersAction } from "../../redux/actions/actions";
import "./UserPage.css"


function UsersPage() {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.usersReducer)

    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

    return (
        <div>

            <button className="get-users-button" onClick={getUsers}>Get users</button>
            {users.map(user => <User userInfo={user} />)}
        </div>
    )
}

export default UsersPage

