import React from 'react'
import styled from 'styled-components';
import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const TeacherProfile = () => {
  const { currentUser, response, error } = useSelector((state) => state.user);

  if (response) { console.log(response) }
  else if (error) { console.log(error) }

  const teachSclass = currentUser.teachSclass
  const teachSubject = currentUser.teachSubject
  const teachSchool = currentUser.school

  return (
    <Container>
      <ProfileCard>
      <BackgroundImage />
        <ProfileCardContent>
          <ProfileText><strong>Name: </strong>{currentUser.name}</ProfileText>
          <ProfileText><strong>Email:</strong> {currentUser.email}</ProfileText>
          <ProfileText><strong>Class: </strong>{teachSclass.sclassName}</ProfileText>
          <ProfileText><strong>Subject: </strong>{teachSubject.subName}</ProfileText>
          <ProfileText><strong>School: </strong>{teachSchool.schoolName}</ProfileText>
        </ProfileCardContent>
      </ProfileCard>
    </Container>
  )
}



export default TeacherProfile

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg,#87bdd8, #333);
`;

const ProfileCard = styled(Card)`
  margin: 20px auto;
  width: 500px;
  height: 250px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('src/assets/bg1.png');
  background-size: cover;
  background-position: center;
  filter: blur(5px);
  z-index: -1;
`;
const ProfileCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center items vertically */
  align-items: flex-start; /* Center items horizontally */
  height: 100%; /* Ensure it takes full height of the card */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  font-family: 'Roboto', sans-serif;

`;

const ProfileText = styled(Typography)`
  margin: 10px 0;
  font-family: 'Roboto', sans-serif; /* Apply font family to each text element */
  font-weight: 400; /* Normal weight for regular text */
  font-size: 18px; /* Adjust font size as needed */
  font-style: italic;
  text-align: left;
  width:100%;
`;