import React from 'react';
import {CiWallet} from 'react-icons/ci';

import Styles from '../components/navbar.module.css'

const Navbar=()=>{

    return(

        <div className={Styles.nav}>
            <ul>
                <li className={Styles.sec}>Section</li>
                <li className={Styles.opt}><CiWallet id={Styles.wallet}/>0.2&nbsp;$XYZ<span id={Styles.tier}>Tier1</span></li>
            </ul>
        </div>
    );
};

export default Navbar;