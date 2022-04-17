import { Button, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)({
        color: '#FFFFFF',
        backgroundColor: '#1E1E1E',
        '&:hover': {
                backgroundColor: '#0B090A',
        },
        margin: '0.5rem',
});

const LogoutButton = styled(Button)({
        color: '#FFFFFF',
        backgroundColor: '#F50010',
        '&:hover': {
                backgroundColor: '#F51111',
        },
        padding: '0.3rem 1rem'
});

const CustomInputBox = styled(InputBase)({
        color: '#000000',
        backgroundColor: '#e9e9e9',
        '&:hover': {
                backgroundColor: '#d1d1d1',
        },
        paddingLeft: '0.5rem',
        borderRadius: '3px',
});

export {
        ColorButton,
        CustomInputBox,
        LogoutButton
};