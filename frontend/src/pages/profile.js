import React, { useState } from 'react';

const profilePageStyles = {
  profilePage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '900px',
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    width: '400px',
  },
  profilePicture: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  
  profileDetails: {
    margin: '20px 0',
    textAlign: 'center',
  },
  editInput: {
    width: '100%',
    padding: '5px',
    marginBottom: '10px',
  },
  userText: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  contactText: {
    fontSize: '14px',
    color: '#555',
  },
  editButtons: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },

};
const profile={
    profilePage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '900px',
      },
      profileInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        width: '400px',
        
      },
      profilePicture: {
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        objectFit: 'cover',
      },
}

const ProfilePage = () => {
  // Sample user data (you can replace this with your own data)
  const initialUserData = {
    name: 'John Doe',
    contactNumber: '123-456-7890',
  };

  const [userData, setUserData] = useState(initialUserData);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingContactNumber, setIsEditingContactNumber] = useState(false);

  const handleNameChange = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };

  const handleContactNumberChange = (e) => {
    setUserData({ ...userData, contactNumber: e.target.value });
  };

  return (
    <div style={profile.profilePage}>
      <div style={profile.profileInfo}>
        <div>
          <img
             src={require("../assets/user.png")}
            alt="Profile"
            style={profile.profilePicture}
          />
        </div>
        <div style={profilePageStyles.profileDetails}>
          {isEditingName ? (
            <input
              type="text"
              value={userData.name}
              onChange={handleNameChange}
              style={profilePageStyles.editInput}
            />
          ) : (
            <h2 style={profilePageStyles.userText}>{userData.name}</h2>
          )}
          {isEditingContactNumber ? (
            <input
              type="text"
              value={userData.contactNumber}
              onChange={handleContactNumberChange}
              style={profilePageStyles.editInput}
            />
          ) : (
            <p style={profilePageStyles.contactText}>
              Contact Number: {userData.contactNumber}
            </p>
          )}
        </div>
        <div style={profilePageStyles.editButtons}>
          {isEditingName ? (
            <button
              onClick={() => setIsEditingName(false)}
              style={profilePageStyles.button}
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditingName(true)}
              style={profilePageStyles.button}
            >
              Edit Name
            </button>
          )}
          {isEditingContactNumber ? (
            <button
              onClick={() => setIsEditingContactNumber(false)}
              style={profilePageStyles.button}
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditingContactNumber(true)}
              style={profilePageStyles.button}
            >
              Edit Contact Number
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
