import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carouselStyles.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: '800px',
        height: '30%',
      }}
    >
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img src="/images/1.jpg" alt="Sunset" text="First slide" className='d-flex w-100 carousel-img'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/2.jpg" alt="Aquarelle" text="Second slide" className='d-flex w-100 carousel-img' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/3.jpg" alt="City Sketching" text="Third slide" className='d-flex w-100 carousel-img' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/4.jpg" alt="Enfant" text="Fourth slide" className='d-flex w-100 carousel-img'/>
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/5.jpg" alt="Marseille" text="Fifth slide" className='d-flex w-100 carousel-img'/>
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/6.jpg" alt="Marseille" text="Fifth slide" className='d-flex w-100 carousel-img'/>
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/7.jpg" alt="Marseille" text="Fifth slide" className='d-flex w-100 carousel-img'/>
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/8.jpg" alt="Marseille" text="Fifth slide" className='d-flex w-100 carousel-img'/>
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;