import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserOneInfo } from "../redux/actions/actions";
import "./User.css"; // Импорт файла стилей

function User({ userInfo }) {
    const dispatch = useDispatch();
    const [detailedInfo, setDetailedInfo] = useState(null);

    const getOneUser = () => {
        dispatch(fetchUserOneInfo(userInfo.id));
    };

    const showDetailedInfo = (data) => {
        setDetailedInfo(data);
    };

    return (
        <li className="user">
            <div className="user-info">
                <h3 className="user-name">{userInfo.name}</h3>
                <p className="user-email">Email: {userInfo.email}</p>
                <p className="user-username">Username: {userInfo.username}</p>
                <p className="user-website">Website: {userInfo.website}</p>
                <button className="get-more-button" onClick={() => { getOneUser(); showDetailedInfo(userInfo); }}>Get More</button>
            </div>
            {detailedInfo && (
                <div className="detailed-info">
                    <h3 className="detailed-info-title">Detailed Info:</h3>
                    <p className="company-name">Company: {detailedInfo.company.name}</p>
                    <p className="address-info">Address: {detailedInfo.address.street}, {detailedInfo.address.city}, {detailedInfo.address.zipcode}</p>
                </div>
            )}
        </li>
    );
}

export default User;






