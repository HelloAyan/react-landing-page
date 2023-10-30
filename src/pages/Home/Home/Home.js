import React from 'react';
import slider1 from '../../../assets/slider1.jpg';
import slider2 from '../../../assets/slider2.jpg';
import slider3 from '../../../assets/slider3.jpg';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
        <div style={{ width: '100%', height: 'auto' }}>

            {/* slider section start */}
            <div style={{ width: '100%', height: '500px' }}>
                <Carousel showArrows={true} showThumbs={false} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                    <div>
                        <img src={slider1} width={100} height={500} />

                    </div>
                    <div>
                        <img src={slider2} width={100} height={500} />

                    </div>
                    <div>
                        <img src={slider3} width={100} height={500} />

                    </div>

                </Carousel>
            </div>
        </div>
    )
}

export default Home;