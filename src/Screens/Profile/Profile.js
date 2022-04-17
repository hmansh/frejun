import React from 'react';
import axios from 'axios';
import { AppBar, Box, Typography, Toolbar } from '@mui/material';
import UserCard from '../../Components/Card/Card';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { ColorButton, LogoutButton } from '../../Components/MicroComponents/MicroComponents';

export default function Profile(props) {

    const [userData, setUserData] = React.useState({});
    const [userResources, setUserResources] = React.useState([]);
    const [confirmLogout, setConfirmLogout] = React.useState(false);
    
    const navigation = useNavigate();
    
    const { setLogin } = props;

    React.useEffect(() => {
        axios.get('https://reqres.in/api/users/2').then(response => {
            console.log(response.data);
            setUserData(response.data.data);
        }).catch(error => {
            console.error(error);
        });
        axios.get('https://reqres.in/api/users').then(response => {
            setUserResources(response.data.data);
            console.log(response.data.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    const userLogout = () => {
        setLogin(false);
        navigation('/login');
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" >
                    <Toolbar sx={{ backgroundColor: '#1E1E1E' }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                            Users
                        </Typography>
                        <LogoutButton color="inherit" 
                            onClick={() => setConfirmLogout(true)}
                            endIcon={<LogoutRoundedIcon />}
                        >Logout</LogoutButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <div className="window-container">
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
                    {userResources?.map((item, index) => (
                        <Grid item xs={1} sm={1} md={1} lg={1} key={index}>
                            <UserCard key={item.id} user={item} />
                        </Grid>
                    ))}
                </Grid>
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