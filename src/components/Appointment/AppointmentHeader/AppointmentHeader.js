import React from 'react';
import { Container, Grid } from '@mui/material';
// import chair from '../../../images/chair.png'
import Calendar from '../../Shared/Calendar/Calendar';

const AppointmentHeader = ({date, setDate}) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'75%'}} src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/image-4.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;