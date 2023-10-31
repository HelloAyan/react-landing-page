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
import team1 from '../../../assets/team/team1.png';
import team2 from '../../../assets/team/team2.png';
import team3 from '../../../assets/team/team3.png';
import team4 from '../../../assets/team/team4.png';
import architect from '../../../assets/architect.png';
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

            {/* Quick List Section Start */}
            {/* <section> */}
            <div className={styles.feature_container}>
                <div className={styles.feature_section}>
                    <div className={styles.feature_image_section}>
                        <div className={styles.feature_image_item}> <img src={team1} alt="Team1" /> </div>
                        <div className={styles.feature_image_item}> <img src={team2} alt="Team2" /> </div>
                        <div className={styles.feature_image_item}> <img src={team3} alt="Team3" /> </div>
                        <div className={styles.feature_image_item}> <img src={team4} alt="Team4" /> </div>

                    </div>
                    <div className={styles.feature_content_section}>
                        <div className={styles.feature_quick_list}>
                            <div className={styles.quick_list_title}>Quick List of our <br />  <span className={styles.feature_sub_title}> Features </span> </div>
                            <div className={styles.primary_button}>Explore More </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </section> */}
            {/* Quick List  Section End */}


            {/* Features Section Start  */}
            {/* <section> */}
            <div class={styles.features_container}>
                <div class={styles.features_section}>
                    <div class={styles.featured_title}>
                        <h2>Features you will <br /> love & enjoy</h2>
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
                    <div class={styles.sub_content}>
                        <h3>Desktop & Mobile Version</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                    </div>
                    <div class={styles.sub_content}>
                        <h3>Drag & Drop Builder</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                    </div>
                    <div class={styles.sub_content}>
                        <h3>Awesome Modern Design</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                    </div>
                    <div class={styles.sub_content}>
                        <h3>Super Easy to Edit</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                    </div>
                </div>

                <div class={styles.features_image}>
                    <img src={architect} alt="Architect" />
                </div>
            </div>
            <div class={styles.translate_container}>
                <h1>10+Year</h1>
                <p>Experience</p>
            </div>
            {/* </section> */}
            {/* Features Section End */}


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
                    <div className={styles.sponsorship_item_image}> <img src={google} alt="Google" /> </div>
                    <div className={styles.sponsorship_item_image}> <img src={spotify} alt="Spotify" /> </div>
                    <div className={styles.sponsorship_item_image}> <img src={telerama} alt="Telerama" /> </div>

                </div>
            </div>
        </div>
    )
}

export default Home;