import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  // State to hold profile data
  const [profile, setProfile] = useState({
    name: 'Tasfiq Jahid',
    email: 'abc@gmail.com',
    phone: '+880 175766747',
    address: 'Savar, Dhaka',
    gender: 'Male',
    birthday: '6 October, 1998',
  });

  const [isEditing, setIsEditing] = useState(false); // Tracks if we're in edit mode
  const [tempProfile, setTempProfile] = useState(profile); // Temporary state for edits

  // Handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
    setTempProfile(profile);
  };

  // Handle save button click
  const handleSaveClick = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempProfile({ ...tempProfile, [name]: value });
  };

  return (
    <div>
      <div>
        <img
          className="w-[20%] lg:w-[10%] rounded-xl mb-4"
          src={assets.profile_pic}
          alt="Profile"
        />
      </div>

      <div>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={tempProfile.name}
            onChange={handleChange}
            className="font-bold text-2xl mb-2 border p-1 rounded"
          />
        ) : (
          <h1 className="font-bold text-2xl mb-2">{profile.name}</h1>
        )}
        <hr />
      </div>

      <p className="font-light my-2">CONTACT INFORMATION</p>
      <hr className="w-1/4" />

      {/* Email */}
      <div className="flex space-x-6 my-4">
        <p>Email id:</p>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={tempProfile.email}
            onChange={handleChange}
            className="text-green-700 border p-1 rounded"
          />
        ) : (
          <p className="text-green-700">{profile.email}</p>
        )}
      </div>

      {/* Phone */}
      <div className="flex space-x-6 my-4">
        <p>Phone:</p>
        {isEditing ? (
          <input
            type="text"
            name="phone"
            value={tempProfile.phone}
            onChange={handleChange}
            className="text-green-700 border p-1 rounded"
          />
        ) : (
          <p className="text-green-700">{profile.phone}</p>
        )}
      </div>

      {/* Address */}
      <div className="flex space-x-6 my-4">
        <p>Address:</p>
        {isEditing ? (
          <input
            type="text"
            name="address"
            value={tempProfile.address}
            onChange={handleChange}
            className="text-green-700 border p-1 rounded"
          />
        ) : (
          <p className="text-green-700">{profile.address}</p>
        )}
      </div>

      {/* Gender */}
      <div className="flex space-x-6 my-4">
        <p>Gender:</p>
        {isEditing ? (
          <select
            name="gender"
            value={tempProfile.gender}
            onChange={handleChange}
            className="text-green-700 border p-1 rounded"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        ) : (
          <p className="text-green-700">{profile.gender}</p>
        )}
      </div>

      {/* Birthday */}
      <div className="flex space-x-6 my-4">
        <p>Birthday:</p>
        {isEditing ? (
          <input
            type="text"
            name="birthday"
            value={tempProfile.birthday}
            onChange={handleChange}
            className="text-green-700 border p-1 rounded"
          />
        ) : (
          <p className="text-green-700">{profile.birthday}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="mt-6">
        {isEditing ? (
          <button
            onClick={handleSaveClick}
            className="btn btn-success mr-6 rounded-xl px-6"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEditClick}
            className="btn btn-success mr-6 rounded-xl px-6"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
