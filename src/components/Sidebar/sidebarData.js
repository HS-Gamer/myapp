import React from 'react'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import BookRoundedIcon from '@material-ui/icons/BookRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const sidebarData = [
    {
        title:"Home",
        icon:<HomeRoundedIcon/>,
        link:"/home"
    },
   
    {
        title:"Appointements",
        icon:<AssignmentIcon/>,
        link:"/Appointements"
    },
    {
        title:"My Calendar",
        icon:<EventRoundedIcon/>,
        link:"/Calendrier"
    }
    
] 
