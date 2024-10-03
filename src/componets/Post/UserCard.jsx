import React from 'react';

const UserCard = ({ userData }) => {
    const { name, email } = userData

    return (
        <div style={{
            border: "3px solid aqua", borderRadius:"9px", padding:"20px", marginTop: "20px"
        }}>
            <h2>Name: {name}</h2>
            <h4>Email: {email}</h4>
        </div>
    );
};

export default UserCard;