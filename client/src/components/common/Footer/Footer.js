import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import styles from './Footer.module.scss';

const Footer = () => {

    return (
        <MDBFooter className={`text-center font-small ${styles.footer}`}>
            <div className='container'>
                &copy; Adam Żukowski 2023
            </div>
        </MDBFooter>
    );
};

export default Footer;