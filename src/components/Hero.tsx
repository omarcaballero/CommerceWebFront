import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = () => {
    const items = [
        <img src="./public/carousel.jpg" alt="Slide 1" />,
        <img src="./public/carousel.jpg" alt="Slide 2" />,
        <img src="./public/carousel.jpg" alt="Slide 3" />
    ];

    return (
    <AliceCarousel
        items={items}
        autoPlay={true}
        autoPlayInterval={3000}
        infinite={true}
        disableDotsControls={true}
    />
);

};

export default Carousel;

