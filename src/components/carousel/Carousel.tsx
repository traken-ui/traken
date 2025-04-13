import React, { useState, useEffect, useRef } from 'react';
import { carouselVariants } from './Carouselvariants';
import { cn } from '../../lib/utils'; 

interface CarouselProps {
  slides: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showIndicators?: boolean;
  className?: string;
  navigation?: 'inside' | 'outside' | 'none';
  navigationStyle?: 'arrows' | 'none';
  indicatorPosition?: 'dots' | 'numbers' | 'none' | 'bars';
  indicatorStyle?: 'dots' | 'bars' | 'numbers'|'none';
  size?: 'sm' | 'md' | 'lg' | 'fullWidth' | 'fullHeight'|'xl'|'auto'|'screenMd'|'full';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  loop?: boolean;
  visualStyle?: 'basic' | 'elegant' | 'minimalist';
  prevArrowContent?: React.ReactNode;
  nextArrowContent?: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoPlay = false,
  interval = 5000,
  showArrows = true,
  showIndicators = true,
  className = '',
  navigation = 'inside',
  navigationStyle = 'arrows',
  indicatorPosition = 'dots',
  indicatorStyle = 'dots',
  size,
  radius = 'md',
  loop = false,
  visualStyle = 'basic',
  prevArrowContent = <span aria-hidden="true">&lt;</span>, 
  nextArrowContent = <span aria-hidden="true">&gt;</span>, 
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (loop) {
        return prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
      }
      return Math.min(prevIndex + 1, slides.length - 1);
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (loop) {
        return prevIndex === 0 ? slides.length - 1 : prevIndex - 1;
      }
      return Math.max(prevIndex - 1, 0);
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let slideInterval: any = null;

    if (isPlaying && autoPlay) {
      slideInterval = setInterval(() => {
        nextSlide();
      }, interval);
    }

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [isPlaying, interval, autoPlay, loop, slides.length]);

  // Handle pause/play on hover
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(autoPlay);

  const carouselClassName = cn(
    carouselVariants({
      navigation,
      navigationStyle,
      indicatorPosition,
      indicatorStyle,
      size,
      radius,
      autoplayEnabled: autoPlay,
      loopEnabled: loop,
      visualStyle,
    }),
    className
  );

  return (
    <div
      ref={carouselRef}
      className={carouselClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Slides container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {typeof slide === 'string' ? (
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              slide
            )}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {showArrows && slides.length > 1 && navigation !== 'none' && navigationStyle === 'arrows' && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 focus:outline-none"
            aria-label="Previous slide"
          >
            {prevArrowContent}
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 focus:outline-none"
            aria-label="Next slide"
          >
            {nextArrowContent}
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && slides.length > 1 && indicatorPosition !== 'none' && (
        <div className={cn(
          indicatorPosition === 'dots' && "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2",
          indicatorPosition === 'bars' && "absolute bottom-4 left-0 w-full flex space-x-1",
          indicatorPosition === 'numbers' && "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2",
          "z-20"
        )}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "focus:outline-none transition-colors",
                indicatorPosition === 'dots' && `w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`,
                indicatorPosition === 'bars' && `w-full h-1 ${index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`,
                indicatorPosition === 'numbers' && `w-6 h-6 rounded-full flex items-center justify-center text-sm ${index === currentIndex ? 'bg-white text-black' : 'bg-white/50 text-white hover:bg-white/80 '}`
              )}
              aria-label={`Go to slide ${index + 1}`}
            >
              {indicatorPosition === 'numbers' && index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;