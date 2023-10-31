import React from 'react';
import styles from './Home.module.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/Logo.png'
import { FaFacebook, FaLinkedinIn, FaTwitterSquare, FaEnvelope, FaInstagram } from "react-icons/fa";
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
import ribon from '../../../assets/icons/ribon.png';
import projects from '../../../assets/icons/projects.png';
import email_logo from '../../../assets/icons/email.png';
import customer from '../../../assets/icons/customers.png';
import architect from '../../../assets/architect.png';
import blog1 from '../../../assets/blog/blog1.jpg';
import blog2 from '../../../assets/blog/blog2.jpg';
import blog3 from '../../../assets/blog/blog3.jpg';
import blog4 from '../../../assets/blog/blog4.jpg';
import blog5 from '../../../assets/blog/blog5.jpg';
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
            <header>
                {/* used React-bootstrap to make responsive navigation */}
                <Navbar expand="lg" style={{ backgroundColor: 'var(--primary-color)' }}>
                    <Container >
                        <div >
                            <Link to={'/'}><img src={logo} alt="" /></Link>
                        </div>
                        <Navbar.Toggle aria-controls="navbarScroll" className="text-white" />
                        <Navbar.Collapse id="navbarScroll" className="text-white">
                            <Nav
                                className="m-auto my-2 my-lg-0 text-white"
                                navbarScroll
                            >
                                <Nav.Link href="#action1" className="text-white fs-5">Home</Nav.Link>
                                <Nav.Link href="#action1" className="text-white fs-5">Our Services</Nav.Link>
                                <Nav.Link href="#action1" className="text-white fs-5">Contact</Nav.Link>
                                <Nav.Link href="#action2" className="text-white fs-5">Contact</Nav.Link>
                                <Nav.Link href="#action1" className="text-white fs-5">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            {/* Header Section End */}

            <main>

                {/* slider section start */}
                <section>
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
                </section>
                {/* slider section End */}



                {/* Quick List Section Start */}
                <section>
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
                </section>
                {/* Quick List  Section End */}



                {/* Features Section Start  */}
                <section>
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
                </section>
                {/* Features Section End */}


                {/*  Some Facts Section Start */}
                <section>
                    <div class={styles.some_facts_container}>
                        <h2 className={styles.title}>Some Facts</h2>

                        <div class={styles.some_fact_box_container}>
                            <div class={styles.box}>
                                <img src={ribon} alt="Ribon" />
                                <h2>54</h2>
                                <p>Awards Winnings</p>
                            </div>
                            <div class={styles.box}>
                                <img src={projects} alt="Project" />
                                <h2>1458</h2>
                                <p>Project Finished</p>
                            </div>
                            <div class={styles.box}>
                                <img src={customer} alt="Customer" />
                                <h2>590</h2>
                                <p>Clients Worked</p>
                            </div>
                            <div class={styles.box}>
                                <img src={email_logo} alt="Email" />
                                <h2>22578</h2>
                                <p>Email Send</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Some Facts Section End */}



                {/* Services Section Start */}
                <section>
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
                </section>





                {/* Blog Section Start  */}
                <section >
                    <div class={styles.blog}>
                        <h2 className={styles.title}>Latest News</h2>
                        <div class={styles.blog_Container}>
                            <div class={styles.blog_post}>
                                <img src={blog1} alt="Blog Image" />
                                <h3>Building an Inclusive Future: 2022 Diversity at Lambda School</h3>
                            </div>
                            <div class={styles.blog_post}>
                                <img src={blog2} alt="Blog Image" />
                                <h3>Checklist: 5 Things to do Before Your First Day of Lambda School</h3>
                            </div>
                            <div class={styles.blog_post}>
                                <img src={blog3} alt="Blog Image" />
                                <h3>An Update on Lambda School and ISAs in California</h3>
                            </div>
                            <div class={styles.blog_post}>
                                <img src={blog4} alt="Blog Image" />
                                <h3>Checklist: 5 Things to do Before Your First Day of Lambda School</h3>
                            </div>
                        </div>
                    </div>

                </section>
                {/*  Blog Section End */}


                {/* Sponsorship section start */}
                <section>
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
                </section>
            </main>



            {/* Footer Section Start */}
            <footer>
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
                                <Link to={'https://twitter.com'} className={styles.icon_link}><FaInstagram size={30}></FaInstagram></Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.footer_copyright}>© 2023. Logic BD Limited. All rights Reserved. </div>
                </div>
            </footer>
        </div >
    )
}

export default Home;