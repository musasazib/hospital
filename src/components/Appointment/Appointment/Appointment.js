import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';


const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
            <br /> <br />
            <Footer/>
        </div>
    );
};

export default Appointment;