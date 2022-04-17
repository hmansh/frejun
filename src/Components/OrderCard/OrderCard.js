import { Paper } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { Button, AppBar, Box, Typography, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';
import OrderCard from '../../Components/OrderCard/OrderCard';

const Item = styled(Paper)({
  padding: '1rem',
});

const BorderLinearProgress = styled(LinearProgress)({
    height: 6,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#ABE0AE',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#307136',
    },
});

export default function (props) {
        const { details } = props;
        return (
                <Grid item xs={2} sm={4} md={4} key={details.color}>
                        <Item variant="outlined">
                                <div className="order-header">
                                        <div className="order-amount">
                                                <div className="order-amount-details">
                                                        <span>Units Released</span>
                                                        <span className="units-releaseed">95%</span>
                                                </div>
                                                <div className="order-amount-adjust">{details.year}</div>
                                        </div>
                                        <div className="company-name">{details.name}</div>
                                        <div className="order-progress">
                                                <BorderLinearProgress variant="determinate" value={50} />
                                        </div>
                                </div>
                                <Divider />
                                <div className="order-details">
                                        <div className="order-item">
                                                <div className="order-item-type">Revenue</div>
                                                <div className="order-item-status">
                                                        <div className="status-current">$12,000,421</div>
                                                        <div className="status-final">$7,231,873</div>
                                                </div>
                                        </div>
                                        <Divider />
                                        <div className="order-item">
                                                <div className="order-item-type">Order</div>
                                                <div className="order-item-status">
                                                        <div className="status-current">$12,000,421</div>
                                                        <div className="status-final">$7,231,873</div>
                                                </div>
                                        </div>
                                </div>
                        </Item>
                </Grid>
        )
}
