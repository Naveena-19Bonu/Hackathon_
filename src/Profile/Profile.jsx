import React, { useState } from 'react';
import './Profile.css';
import NavBar from '../Navbar/Navbar';
import img1 from '../Images/profile_image.jpg';

const Profile = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [education, setEducation] = useState('');
    const [nationality, setNationality] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (

            fullName.trim() === '' ||

            email.trim() === '' ||

            phoneNumber.trim() === '' ||

            gender.trim() === '' ||

            age.trim() === '' ||

            education.trim() === '' ||

            nationality.trim() === ''

        ) {

            alert('Please fill in all fields');

            return;

        }




        // If form is valid, you can proceed with further actions

        // For example, you can send the form data to a server or perform any other desired actions

        alert('Form submitted successfully');

        // Reset form fields

        setFullName('');

        setEmail('');

        setPhoneNumber('');
        setGender('');

        setAge('');

        setEducation('');

        setNationality('');

    };

    const handlePhoneNumberChange = (e) => {

        const inputValue = e.target.value;

        const formattedValue = inputValue.replace(/[^0-9]/g, '').slice(0, 10); // Restrict to 10 numbers

        setPhoneNumber(formattedValue);

    };




    const handleAgeChange = (e) => {

        const inputValue = e.target.value;

        const formattedValue = inputValue.replace(/[^0-9]/g, '');

        setAge(formattedValue);

    };
    // Handle form submission here
    // You can access the form values using the state variables
    // Perform validation or other necessary actions



return (
    <div>
        <NavBar />
        <div className="box-details">
           
            <div className="profile-picture-container">
                <img src={img1} alt="Profile" className="profile-picture" />
            </div>
            <form className="profile-form" onSubmit={handleSubmit}>
                <h2>Update Profile Now</h2>
                <div className="form-grid">
                    <div className="form-column">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="form-column">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-column">
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-column">
                        <input
                            type="text"
                            placeholder="Gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </div>
                    <div className="form-column">
                        <input
                            type="text"
                            placeholder="Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="form-column">
                        <input
                            type="text"
                            placeholder="Education"
                            value={education}
                            onChange={(e) => setEducation(e.target.value)}
                        />
                    </div>
                    <div className="form-column">
                        <input
                            type="text"
                            placeholder="Nationality"
                            value={nationality}
                            onChange={(e) => setNationality(e.target.value)}
                        />
                    </div>
                    <div className="picupdate">
                        <input
                            type="file"
                            placeholder="Profile Picture Update"
                            onChange={(e) => setProfilePicture(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
);
};

export default Profile;
