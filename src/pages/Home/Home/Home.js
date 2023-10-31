import React from 'react';
import styles from './Home.module.css';
import slider1 from '../../../assets/slider1.png';
import slider2 from '../../../assets/slider2.png';
import slider3 from '../../../assets/slider3.png';
import slider4 from '../../../assets/slider4.png';
import slider5 from '../../../assets/slider5.png';
import slider6 from '../../../assets/slider6.png';
import amazon from '../../../assets/sponsors/amazon.png';
import figma from '../../../assets/sponsors/figma.png';
import google from '../../../assets/sponsors/google.png';
import spotify from '../../../assets/sponsors/spotify.png';
import telerama from '../../../assets/sponsors/telerama.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaSpider, FaCalendarCheck, FaPager, FaShopify, FaMobileAlt, FaDharmachakra } from "react-icons/fa";

const Home = () => {
    // Define onChange, onClickItem, and onClickThumb functions
    const onChange = (index) => {
        console.log(`Slide changed to index ${index}`);
    };

    const onClickItem = (index) => {
        console.log(`Item clicked at index ${index}`);
    };

    const onClickThumb = (index) => {
        console.log(`Thumbnail clicked at index ${index}`);
    };
    return (
        <div className={styles.home_main_container}>

            {/* slider section start */}
            <div className={styles.slider_container}>
                <Carousel showArrows={true} showThumbs={false} autoPlay={true} stopOnHover={false} infiniteLoop={true} interval={3000} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                    <div>
                        <img src={slider1} width={100} height={500} />
                    </div>
                    <div>
                        <img src={slider2} width={100} height={500} />
                    </div>
                    <div>
                        <img src={slider3} width={100} height={500} />
                    </div>
                    <div>
                        <img src={slider4} width={100} height={500} />
                    </div>
                    <div>
                        <img src={slider5} width={100} height={500} />
                    </div>
                    <div>
                        <img src={slider6} width={100} height={500} />
                    </div>

                </Carousel>
            </div>


            {/* Services Section Start */}
            <div className={styles.service_container}>
                <h4 className={styles.title}>Our Services</h4>
                <div className={styles.service_section}>
                    <div className={styles.service_item_section}>
                        <div className={styles.item_icon}><FaSpider ></FaSpider> </div>
                        <div className={styles.item_content}>
                            <div className={styles.item_title}>A/B Testing Development</div>
                            <div className={styles.item_main_contain}>Our solutions engineers are certified across a variety of testing platforms, and are well-versed in delivering A/B testing and personalisation campaigns for businesses. They’re happiest when they’re engrossed in Optimizely, Adobe Target, Convert, Monetate, VWO, Google Optimize, AB Tasty and Kameleoon.</div>
                        </div>
                    </div>

                    <div className={styles.service_item_section}>
                        <div className={styles.item_icon}><FaCalendarCheck ></FaCalendarCheck> </div>
                        <div className={styles.item_content}>
                            <div className={styles.item_title}>Quality Assurance & Testing</div>
                            <div className={styles.item_main_contain}>Our solutions engineers are certified across a variety of testing platforms, and are well-versed in delivering A/B testing and personalisation campaigns for businesses. They’re happiest when they’re engrossed in Optimizely, Adobe Target, Convert, Monetate, VWO, Google Optimize, AB Tasty and Kameleoon.</div>
                        </div>
                    </div>

                    <div className={styles.service_item_section}>
                        <div className={styles.item_icon}><FaPager ></FaPager> </div>
                        <div className={styles.item_content}>
                            <div className={styles.item_title}>UX/UI Design</div>
                            <div className={styles.item_main_contain}>Our solutions engineers are certified across a variety of testing platforms, and are well-versed in delivering A/B testing and personalisation campaigns for businesses. They’re happiest when they’re engrossed in Optimizely, Adobe Target, Convert, Monetate, VWO, Google Optimize, AB Tasty and Kameleoon.</div>
                        </div>
                    </div>

                    <div className={styles.service_item_section}>
                        <div className={styles.item_icon}><FaShopify ></FaShopify> </div>
                        <div className={styles.item_content}>
                            <div className={styles.item_title}>Shopify Development</div>
                            <div className={styles.item_main_contain}>Our solutions engineers are certified across a variety of testing platforms, and are well-versed in delivering A/B testing and personalisation campaigns for businesses. They’re happiest when they’re engrossed in Optimizely, Adobe Target, Convert, Monetate, VWO, Google Optimize, AB Tasty and Kameleoon.</div>
                        </div>
                    </div>

                    <div className={styles.service_item_section}>
                        <div className={styles.item_icon}><FaMobileAlt ></FaMobileAlt> </div>
                        <div className={styles.item_content}>
                            <div className={styles.item_title}>Mobile App Development</div>
                            <div className={styles.item_main_contain}>Our solutions engineers are certified across a variety of testing platforms, and are well-versed in delivering A/B testing and personalisation campaigns for businesses. They’re happiest when they’re engrossed in Optimizely, Adobe Target, Convert, Monetate, VWO, Google Optimize, AB Tasty and Kameleoon.</div>
                        </div>
                    </div>

                    <div className={styles.service_item_section}>
                        <div className={styles.item_icon}><FaDharmachakra ></FaDharmachakra> </div>
                        <div className={styles.item_content}>
                            <div className={styles.item_title}>Application Development</div>
                            <div className={styles.item_main_contain}>Our solutions engineers are certified across a variety of testing platforms, and are well-versed in delivering A/B testing and personalisation campaigns for businesses. They’re happiest when they’re engrossed in Optimizely, Adobe Target, Convert, Monetate, VWO, Google Optimize, AB Tasty and Kameleoon.</div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Sponsorship section start */}
            <div className={styles.sponsorship_container}>
                <div className={styles.title}>Our Sponsorship</div>
                <div className={styles.sponsorship_item_section}>
                    <div className={styles.sponsorship_item_image}> <img src={amazon} alt="Amazon" /> </div>
                    <div className={styles.sponsorship_item_image}> <img src={figma} alt="Figma" /></div>
                    <div className={styles.sponsorship_item_image}><img src={google} alt="Google" /> </div>
                    <div className={styles.sponsorship_item_image}> <img src={spotify} alt="Spotify" /> </div>
                    <div className={styles.sponsorship_item_image}> <img src={telerama} alt="Telerama" /> </div>

                </div>
            </div>
        </div>
    )
}

export default Home;