import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import WorkspacesRoundedIcon from '@mui/icons-material/WorkspacesRounded';
import { ColorButton } from "../MicroComponents/MicroComponents";

export default function UserCard(props) {
        const { user } = props;
        return (
                <Card className="card-grid-item" sx={{ display: 'flex', justifyContent: 'space-between' }} variant="outlined">
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <CardContent>
                                        <h3>{`${user.first_name} ${user.last_name}`}</h3>
                                        <h5>{user.email}</h5>
                                </CardContent>
                                <Link to='/resources' className="router-links">
                                        <ColorButton variant="contained"
                                                disableElevation
                                                sx={{ margin: '1rem' }}
                                                startIcon={<WorkspacesRoundedIcon />}
                                        >
                                                Resources
                                        </ColorButton>
                                </Link>
                        </Box>
                        <CardMedia
                                component="img"
                                sx={{ width: 151, margin: '1rem', borderRadius: '5px' }}
                                image={`${user.avatar}`}
                                alt="Live from space album cover"
                        />
                </Card>
        )
}
