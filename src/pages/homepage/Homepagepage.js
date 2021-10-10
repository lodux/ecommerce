import React from 'react';
import Directory from '../../components/directory/directory.js';
import './Homepage.scss'
import { HomePageContainer } from './Homepage.styles.js';



const Homepage=()=>{
    return (
    <HomePageContainer>
       <Directory/>
    </HomePageContainer>
    )
    
}

export default Homepage;