import { Carousel } from 'react-bootstrap';

function CarouselAction({ items }) {
  return (
    <Carousel>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img src={item.src} alt={item.title} />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselAction;