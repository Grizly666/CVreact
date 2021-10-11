import React from 'react';
import "./User.css";
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmailIcon from '@mui/icons-material/Email';



function User() {
    return (
    <div className="user">
        <img src="./images/avatar.jpg" alt="" className="user__avatar"/>
        <h1 className="user__name">Antoine MARIE</h1>
        <p className="user__profession">Développeur</p>
        <div className="user__infos">
            <p className="user__info">
                <HomeIcon /> 57 route national 62360 Isques</p>
            <p className="user__info">
                <PhoneIcon />  <a href="tel:+33645794249"> 0645794249</a></p>
            <p className="user__info"> 
               <EmailIcon /> <a href="mailto:antoine.marie.dev@gmail.com">antoine.marie.dev@gmail.com</a></p>
            <p className="user__info"><CalendarTodayIcon />Date de naissance: 28 Septembre 1993</p>
            <p className="user__info"><RoomIcon />llieu de naissance: Boulogne-sur-mer</p>
        </div>
    </div>
    )
}

export default User;
