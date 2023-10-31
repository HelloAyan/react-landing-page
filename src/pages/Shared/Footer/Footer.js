import React from 'react';
import styles from './Footer.module.css';
import logo from '../../../assets/Logo.png'
import { FaFacebook, FaLinkedinIn, FaTwitterSquare, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={styles.footer_main}>
            <div className={styles.footer_inner_container}>
                <div className={styles.footer_section}>
                    <h5>Contact Details</h5>
                    <div>
                        <div><img src={logo} alt="logo" /></div>
                        <div> <span className={styles.sub_title}>Logic BD Limited</span> <br /> Siaam Tower, Sector 3, <br />  Uttara, Dhaka, Bangladesh <br /> <span> <FaEnvelope></FaEnvelope> </span>support@logicbd.com</div>

                    </div>
                </div>

                <div className={styles.footer_section}>
                    <h5>Home</h5>
                    <h5>About</h5>
                    <h5>Contact</h5>
                </div>

                <div className={styles.footer_section}>
                    <h5>Follow Us</h5>
                    <div className={styles.social_icon_section}>
                        <Link to={'https://facebook.com'} className={styles.icon_link}><FaFacebook size={30}></FaFacebook></Link>
                        <Link to={'https://linkedin.com'} className={styles.icon_link}> <FaLinkedinIn size={30}></FaLinkedinIn></Link>
                        <Link to={'https://twitter.com'} className={styles.icon_link}><FaTwitterSquare size={30}></FaTwitterSquare></Link>
                    </div>
                </div>
            </div>

            <div className={styles.footer_copyright}>© 2023. Logic BD Limited. All rights Reserved. </div>

        </div>
    )
}

export default Footer;