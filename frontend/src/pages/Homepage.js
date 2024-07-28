import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <img src={Students} alt="students" style={{width: '100%', height: 'auto',  marginBottom: '10px', objectFit: 'cover' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Welcome to GradeUp
                
                        </StyledTitle>
                        <StyledText>
                        Welcome to GradeUp, the ultimate platform for
                         seamless school management. Whether you're an administrator, 
                         teacher, or student, GradeUp offers an intuitive experience tailored to your needs.
                         Admins can effortlessly organize classes, subjects, and faculty, while teachers manage their 
                         student lists and track progress with ease. Students stay informed with access to their profiles, assignments, 
                        and attendance records. Empower your educational journey with GradeUp, where efficiency meets excellence.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                {/* <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                                >
                                    Login as Guest
                                </Button> */}
                            </StyledLink>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"#550080"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
`;

const StyledPaper = styled.div`
  padding: 24px;
  position: relative; /* Make positioning relative */
  top: 50%; /* Position halfway down the container */
  transform: translateY(-50%); /* Visually center by offsetting half its height */
  elevation: 3;
`;
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  font-family:'georgia';
  align-item:center;
  /* font-family: "Manrope"; */
  font-weight: bold;
  font-size: 47px;
  white-space: nowrap;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px;
  font-family:'georgia';
  font-size: 20px;
  letter-spacing: normal;
  line-height: normal;
  text-align:justify;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family:'georgia';
`;