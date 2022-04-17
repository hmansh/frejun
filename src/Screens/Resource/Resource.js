import { Paper } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { AppBar, Box, Typography, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import OrderCard from '../../Components/OrderCard/OrderCard';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { LogoutButton, ColorButton } from '../../Components/MicroComponents/MicroComponents';

const Item = styled(Paper)({
    padding: '1rem',
});

export default function Resource(props) {

    const [userData, setUserData] = React.useState({});
    const [userResources, setUserResources] = React.useState();
    const { setLogin } = props;
    const [confirmLogout, setConfirmLogout] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        axios.get('https://reqres.in/api/users/2').then(response => {
            console.log(response.data);
            setUserData(response.data.data);
        }).catch(error => {
            console.error(error);
        });
        axios.get('https://reqres.in/api/unknown').then(response => {
            setUserResources(response.data.data);
            console.log(response.data.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    const userLogout = () => {
        setLogin(false);
        navigate('/login');
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" >
                    <Toolbar sx={{ backgroundColor: '#1E1E1E' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                            Employee
                        </Typography>
                        <LogoutButton color="inherit" onClick={() => setConfirmLogout(true)} endIcon={<LogoutRoundedIcon />}>Logout</LogoutButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <div className="window-container">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1 }} sx={{ margin: '1rem' }}>
                        <Grid item xs={1}>
                            <Item sx={{ textAlign: 'left' }} variant="outlined">
                                <h4 className="time" style={{ color: 'grey' }}>{`12 Jan 2021, Wednesday 11:30`}</h4>
                                <h1 className="welcome-message">Welcome Back, {'Himanshu'}</h1>
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                        {userResources?.map((item, index) => (
                            <OrderCard details={item} />
                        ))}
                    </Grid>
                </Box>
            </div>
            <Dialog
                open={confirmLogout}
            >
                <DialogTitle>
                    Are you sure want to Logout ?
                </DialogTitle>
                <DialogActions>
                    <ColorButton onClick={userLogout}>Logout</ColorButton>
                    <ColorButton onClick={() => setConfirmLogout(false)}>Cancel</ColorButton>
                </DialogActions>
            </Dialog>
        </>
    )
}
