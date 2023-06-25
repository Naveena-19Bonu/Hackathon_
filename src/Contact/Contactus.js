import React from "react";
import Navbar from "../Navbar/Navbar";
import img2 from "../Images/contact_image.png";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <ContactContainer>
        <LeftSection>
          <LogoImage src={img2} alt="Logo" />
        </LeftSection>
        <RightSection>
          <ContactForm>
            <ContactHeading>Contact Us</ContactHeading>
            <form>
              <FormField>
                <input type="name" id="fullname" placeholder="Fullname" />
              </FormField>
              <FormField>
                <input type="email" id="email" placeholder="Email" />
              </FormField>
              <FormField>
                <input type="text" id="query" placeholder="Query" />
              </FormField>
              <SubmitButton type="submit">Submit</SubmitButton>
            </form>
          </ContactForm>
        </RightSection>
      </ContactContainer>
    </div>
  );
};

export default ContactUs;

// Styled Components
const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const RightSection = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactForm = styled.div`
  width: 328px;
  height: 350px;
  padding: 20px;
  color: #fff;
  border-radius: 10px;
  background: rgba(1, 154, 214, 0.77);
  box-shadow: 2px 2px 75px 0px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
`;

const ContactHeading = styled.h2`
  color: #000;
  text-align: center;
  font-size: 30px;
  font-family: Lora;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  display: flex;
  color: white;
`;

const FormField = styled.div`
  margin-bottom: 10px;
  margin-left: 60px;

  input[type="name"],
  input[type="email"],
  input[type="text"] {
    width: 70%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid white;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 75px 0px rgba(0, 0, 0, 0.2);
  }
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 10px;
background: rgba(242, 242, 242, 0.63);
box-shadow: 2px 2px 75px 0px rgba(0, 0, 0, 0.20);
  color: #fff;
  border: none;
  margin-left:120px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #333;
  }
`;
