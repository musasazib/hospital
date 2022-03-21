import { Alert, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Cardiology',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Dental',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Neurologist',
        time: '10.00 AM - 11.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Pediatric',
        time: '11.00 AM - 12.00 PM',
        space: 5,
    },
    {
        id: 5,
        name: 'Pulmonary',
        time: '06.00 PM - 07.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'Thaumatology',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
    {
        id: 7,
        name: 'Urology',
        time: '07.00 PM - 08.00 PM',
        space: 13,
    },
    {
        id: 8,
        name: 'Xray',
        time: '07.00 PM - 08.00 PM',
        space: 18,
    },
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography sx={{ fontWeight: 500, mb: 3, mt: 5 }} variant="h4" gutterBottom component="div">
                Doctor Appointment on {date.toDateString()}
            </Typography>
            {bookingSuccess && <Alert severity="success">Appointment booked successfully</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        setBookingSuccess={setBookingSuccess}
                        key={booking.id}
                        booking={booking}
                        date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;