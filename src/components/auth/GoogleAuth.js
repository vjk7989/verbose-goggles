import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import GoogleIcon from '../../assets/images/GoogleIcon.png';

const GoogleAuth = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Directly navigate to the dashboard
        navigate('/pages/dashboard');
    };

    return (
        <Button className="authButton" onClick={handleLogin}>
            Enter App &nbsp;
            <img src={GoogleIcon} alt="google logo" width="20px" />
        </Button>
    );
};

export default GoogleAuth;