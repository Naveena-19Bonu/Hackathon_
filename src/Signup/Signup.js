import React, { useState } from 'react';
import './Signup.css';


const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [education, setEducation] = useState('');
  const [nationality, setNationality] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    // You can add your own validation logic based on your requirements
    if (
      fullName.trim() === '' ||
      email.trim() === '' ||
      phoneNumber.trim() === '' ||
      password.trim() === '' ||
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
    setPassword('');
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

  return (
    <div className="signupbackground-image">
      <div className="signupcontainer">
        <h2 className="signup-heading">Signup</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <table className="signup-table">
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="Signup-input"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="Signup-input"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className="Signup-input"
                  />
                </td>
                <td>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="Signup-input"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="" disabled selected>
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Age"
                    value={age}
                    onChange={handleAgeChange}
                    className="Signup-input"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <select
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                  >
                    <option value="" disabled selected>
                      Education
                    </option>
                    <option value="highschool">School</option>
                    <option value="undergraduate">College</option>
                    <option value="graduate">Job</option>
                  </select>
                </td>
                <td>
                  <select
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                  >
                    <option value="" disabled selected>
                      Nationality
                    </option>
                    <option value="in">India</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="signup-button">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
