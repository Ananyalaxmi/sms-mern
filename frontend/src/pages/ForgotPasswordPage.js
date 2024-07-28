import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';
import { sendPasswordResetEmail } from '../redux/userRelated/userHandle';  // Assuming you have this action

const ForgotPasswordPage = () => {
    const { role } = useParams();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            await dispatch(sendPasswordResetEmail(email, role));
            setMessage('Password reset email sent');
        } catch (error) {
            setMessage('Failed to send password reset email');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, textAlign: 'center' }}>
            <Typography variant="h5">Forgot Password</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <TextField
                    label="Email"
                    fullWidth
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    {loading ? <CircularProgress size={24} /> : 'Send Reset Email'}
                </Button>
            </Box>
            {message && <Typography sx={{ mt: 2 }}>{message}</Typography>}
        </Box>
    );
};

export default ForgotPasswordPage;