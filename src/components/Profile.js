import React from "react";
import data from "../data.json";
import "../styles/profile.scss";
import Header from "./Header";

const Profile = () => {
    const profile = data.profile;

    return (
        <div className="container">
            <Header/>
            <table>
                <caption>Profile</caption>
                <tbody>
                    <tr>
                        <td rowSpan="5">
                            <img className="profile-pic" src={profile.avatarImage} />
                        </td>
                        <th>First Name</th>
                        <td>{profile.firstName}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>{profile.lastName}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{profile.phone}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{profile.email}</td>
                    </tr>
                    <tr>
                        <th>Bio</th>
                        <td>{profile.bio}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Profile;