// import React, { useState } from 'react';
// import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteUser, updateUser } from '../../redux/userRelated/userHandle';
// import { useNavigate } from 'react-router-dom'
// import { authLogout } from '../../redux/userRelated/userSlice';
// import { Button, Collapse } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const AdminProfile = () => {
    // const [showTab, setShowTab] = useState(false);
    // const buttonText = showTab ? 'Cancel' : 'Edit profile';

    // const navigate = useNavigate()
    // const dispatch = useDispatch();
        const { currentUser } = useSelector((state) => state.user);
    // const { currentUser, response, error } = useSelector((state) => state.user);
    // const address = "Admin"

    // if (response) { console.log(response) }
    // else if (error) { console.log(error) }

    // const [name, setName] = useState(currentUser.name);
    // const [email, setEmail] = useState(currentUser.email);
    // const [password, setPassword] = useState("");
    // const [schoolName, setSchoolName] = useState(currentUser.schoolName);

    // const fields = password === "" ? { name, email, schoolName } : { name, email, password, schoolName }

    // const submitHandler = (event) => {
    //     event.preventDefault()
    //     dispatch(updateUser(fields, currentUser._id, address))
    // }

    // const deleteHandler = () => {
    //     try {
    //         dispatch(deleteUser(currentUser._id, "Students"));
    //         dispatch(deleteUser(currentUser._id, address));
    //         dispatch(authLogout());
    //         navigate('/');
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    return (
        <Container>
            <ProfileContainer>
                <Heading>Profile Details</Heading>
                <ProfileCard>
                    <ProfileCardContent>
                        <ProfileText><strong>Name: </strong>{currentUser.name}</ProfileText>
                        <ProfileText><strong>Email: </strong>{currentUser.email}</ProfileText>
                        <ProfileText><strong>School: </strong>{currentUser.schoolName}</ProfileText>
                    </ProfileCardContent>
                </ProfileCard>
            </ProfileContainer>
        </Container>
    );
}

export default AdminProfile

// const styles = {
//     attendanceButton: {
//         backgroundColor: "#270843",
//         "&:hover": {
//             backgroundColor: "#3f1068",
//         }
//     }
// }


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #87bdd8, #333); /* Background gradient */
`;

const ProfileContainer = styled.div`
  text-align: center;
  
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: black;
  font-style:italic;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const ProfileCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
  position: relative;
  transition: color 0.3s ease; /* Smooth transition for color change */
  &:hover {
    background-color: #3f51b5; /* Change color on hover */
  }
`;

const ProfileCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start (left) */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  
`;

const ProfileText = styled.p`
  margin: 10px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  text-align: left; /* Align text to the left */
  width: 100%;
  
`;