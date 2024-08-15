import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button } from '@/components/ui/button'; 
import { useTheme } from 'next-themes'; 

const Products = () => {
  const { theme } = useTheme();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleReadStoriesClick = () => {
    navigate('/story'); // Redirect to Read Stories page
  };

  const handleWriteStoriesClick = () => {
    navigate('/write-stories'); // Redirect to Write Stories page
  };

  const handleEnrollOrgClick = () => {
    navigate('/register'); // Redirect to Enroll Organization page
  };

  const images = [
    {
      src: "https://ik.imagekit.io/SIBHI/Imagica/1.jpg",
      description: 'Helps your kids learn in a flash!',
    },
    {
      src: 'https://ik.imagekit.io/SIBHI/Imagica/2.jpg',
      description: 'Make your kids experience stories',
    },
    {
      src: 'https://ik.imagekit.io/SIBHI/Imagica/3.jpg',
      description: 'Gamified learning!',
    },
    {
      src: 'https://ik.imagekit.io/SIBHI/Imagica/4.jpg?updatedAt=1722761870922',
      description: 'Engaging kids with creativity',
    },
  ];

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="mb-16 pt-16">
          <Carousel
            showThumbs={false}
            infiniteLoop
            useKeyboardArrows
            autoPlay
            showArrows={false}
            showStatus={false}
            renderIndicator={(onClickHandler, isSelected) => (
              <div
                onClick={onClickHandler}
                style={{
                  borderRadius: '50%',
                  width: '10px',
                  height: '10px',
                  margin: '0 4px',
                  display: 'inline-block',
                  cursor: 'pointer',
                }}
              />
            )}
          >
            <div className="p-4">
              <div className="rounded-lg shadow-lg p-6 text-center">
                <h2 className="text-2xl font-bold mb-4">Read Stories</h2>
                <p className="mb-4">Dive into a world of imagination and adventure with our vast collection of stories.</p>
                <Button
                  onClick={handleReadStoriesClick}
                  className={`w-full bg-blue-400 text-black font-mono rounded hover:from-blue-500 hover:to-purple-400 transition duration-150 ${
                    theme === 'dark' ? 'bg-blue-600' : ''
                  }`}
                >
                  Start Reading
                </Button>
              </div>
            </div>
            <div className="p-4">
              <div className="rounded-lg shadow-lg p-6 text-center">
                <h2 className="text-2xl font-bold mb-4">Write Stories</h2>
                <p className="mb-4">Share your creativity and become an author in our community.</p>
                <Button
                  onClick={handleWriteStoriesClick}
                  className={`w-full bg-blue-400 text-black font-mono rounded hover:from-blue-500 hover:to-purple-400 transition duration-150 ${
                    theme === 'dark' ? 'bg-blue-600' : ''
                  }`}
                >
                  Start Writing
                </Button>
              </div>
            </div>
            <div className="p-4">
              <div className="rounded-lg shadow-lg p-6 text-center">
                <h2 className="text-2xl font-bold mb-4">Enroll Organization</h2>
                <p className="mb-4">Join our educational platform to provide immersive learning experiences.</p>
                <Button
                  onClick={handleEnrollOrgClick}
                  className={`w-full bg-blue-400 text-black font-mono rounded hover:from-blue-500 hover:to-purple-400 transition duration-150 ${
                    theme === 'dark' ? 'bg-blue-600' : ''
                  }`}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-lg overflow-hidden shadow-lg group"
            >
              <img src={image.src} alt={`Image ${index + 1}`} className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white font-mono text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
