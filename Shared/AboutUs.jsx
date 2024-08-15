// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// const AboutUs = () => {
//   return (
//     <div className=" py-16 px-8">
//       <div className="max-w-screen-lg mx-auto">
//         <h1 className="text-4xl font-extrabold mb-6 mt-16">About Us</h1>

//         <p className="mb-6 text-lg">
//           Welcome to <span className="font-bold">Imagica</span>, where the magic of stories and the excitement of learning collide! We are a passionate team of educators, developers, and storytellers dedicated to creating an engaging and immersive educational experience for children. Our mission is to inspire a lifelong love of reading and learning by transforming the way children interact with stories.
//         </p>

//         {/* Image Carousel */}
//         <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
//           <div>
//             <img src="https://ik.imagekit.io/SIBHI/Imagica/iStock-1417486686.jpg" alt="Image 1" />
            
//           </div>
//           <div>
//             <img src="https://ik.imagekit.io/SIBHI/Imagica/word-image4.jpeg" alt="Image 2" />
           
//           </div>
//           <div>
//             <img src="https://ik.imagekit.io/SIBHI/Imagica/family-reading-bedtime-2021-04-02-18-49-19-utc.jpg" alt="Image 3" />
          
//           </div>
//         </Carousel>
        
//         <h2 className="text-3xl font-bold mb-4 mt-10">Our Vision</h2>
//         <p className="mb-6 text-lg">
//           At Imagica, we envision a world where every child has access to innovative and interactive learning tools that make education fun and exciting. We believe that stories have the power to spark imagination, creativity, and critical thinking skills. Our goal is to harness this power by integrating state-of-the-art technology with classic storytelling to create an unparalleled educational platform.
//         </p>
//         <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
//         <ul className="list-disc list-inside mb-6 text-lg">
//           <li><strong>Interactive Stories:</strong> Our stories come to life with interactive elements that encourage children to engage with the narrative, make decisions, and explore different outcomes.</li>
//           <li><strong>Educational Games:</strong> Fun and educational games are integrated into our platform to reinforce learning objectives in a playful and enjoyable way.</li>
//           <li><strong>Reading Materials:</strong> A rich library of reading materials, ranging from classic tales to new adventures, is available to cater to various reading levels and interests.</li>
//           <li><strong>Creative Activities:</strong> We offer a variety of creative activities, such as drawing, crafting, and writing, to foster artistic expression and creativity in children.</li>
//         </ul>
//         <h2 className="text-3xl font-bold mb-4">Our Innovative Approach</h2>
//         <p className="mb-6 text-lg">
//           Imagica is built on a foundation of cutting-edge technology and innovative educational principles. Our platform utilizes the latest advancements in artificial intelligence, augmented reality, and gamification to create an immersive learning environment. Here’s how we stand out:
//         </p>
//         <ul className="list-disc list-inside mb-6 text-lg">
//           <li><strong>Artificial Intelligence:</strong> Personalized learning paths and recommendations tailored to each child's unique needs and interests.</li>
//           <li><strong>Augmented Reality:</strong> Bringing stories and educational content to life with immersive AR experiences.</li>
//           <li><strong>Gamification:</strong> Integrating game mechanics to motivate and engage children in their learning journey.</li>
//         </ul>
//         <h2 className="text-3xl font-bold mb-4">"Have control over the Data over what your children consume"</h2>
//         <p className="mb-6 text-lg">
//           We invite you to join us on our mission to revolutionize children's education through the power of storytelling and technology. Together, we can create a future where learning is an adventure that every child looks forward to.
//         </p>
//         <p className="text-lg">
//           Thank you for being a part of the Imagica community. Let’s embark on this magical journey of learning and discovery together!
//         </p>
//       </div>
//       {/* accordian
//       <Accordion type="single" collapsible className="w-full">
//       <AccordionItem value="item-1">
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>Is it styled?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It comes with default styles that matches the other
//           components&apos; aesthetic.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>Is it animated?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It&apos;s animated by default, but you can disable it if you
//           prefer.
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion> */}
//     </div>
//   );
// }

// export default AboutUs;
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // For animations

const AboutUs = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/register');
  };

  const handleExploreClick = () => {
    navigate('/story');
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96 overflow-hidden" style={{ backgroundImage: 'url("https://ik.imagekit.io/SIBHI/Imagica/hero-image.jpg")' }}>
        <div className="absolute inset-0 bg-gradient-to-t  opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center ">
          <motion.h1
            className="text-5xl font-extrabold mb-4 pt-60"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Where Learning Meets Imagination
          </motion.h1>
          <motion.p
            className="text-xl mb-6 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            Discover, Learn & Grow with Imagica
          </motion.p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-800 text-white font-mono py-3 px-6 rounded-lg shadow-lg transition-transform duration-300"
            onClick={handleExploreClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          >
            Explore Our Stories
          </motion.button>
        </div>
      </div>

      <div className="py-16 px-8 sm:px-4">
        <div className="max-w-screen-lg mx-auto">
          <motion.h1
            className="text-4xl font-extrabold mb-6 mt-16 text-center sm:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            About Us
          </motion.h1>

          <motion.p
            className="mb-6 text-lg text-justify sm:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            Welcome to <span className="font-bold">Imagica</span>, where the magic of stories and the excitement of learning collide! We are a passionate team of educators, developers, and storytellers dedicated to creating an engaging and immersive educational experience for children. Our mission is to inspire a lifelong love of reading and learning by transforming the way children interact with stories.
          </motion.p>

          {/* Image Carousel */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
              <div>
                <img src="https://ik.imagekit.io/SIBHI/Imagica/iStock-1417486686.jpg" alt="Interactive Learning" />
                <p className="legend">Interactive Learning</p>
              </div>
              <div>
                <img src="https://ik.imagekit.io/SIBHI/Imagica/word-image4.jpeg" alt="Creative Stories" />
                <p className="legend">Creative Stories</p>
              </div>
              <div>
                <img src="https://ik.imagekit.io/SIBHI/Imagica/family-reading-bedtime-2021-04-02-18-49-19-utc.jpg" alt="Family Fun" />
                <p className="legend">Family Fun</p>
              </div>
            </Carousel>
          </motion.div>

          <motion.h2
            className="text-3xl font-bold mb-4 mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="mb-6 text-lg text-justify sm:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            At Imagica, we envision a world where every child has access to innovative and interactive learning tools that make education fun and exciting. We believe that stories have the power to spark imagination, creativity, and critical thinking skills. Our goal is to harness this power by integrating state-of-the-art technology with classic storytelling to create an unparalleled educational platform.
          </motion.p>

          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            What We Offer
          </motion.h2>
          <motion.ul
            className="list-disc list-inside mb-6 text-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            <li>
              <strong>
                <i className="fas fa-magic mr-2"></i>Interactive Stories:
              </strong>{' '}
              Our stories come to life with interactive elements that encourage children to engage with the narrative, make decisions, and explore different outcomes.
            </li>
            <li>
              <strong>
                <i className="fas fa-gamepad mr-2"></i>Educational Games:
              </strong>{' '}
              Fun and educational games are integrated into our platform to reinforce learning objectives in a playful and enjoyable way.
            </li>
            <li>
              <strong>
                <i className="fas fa-book mr-2"></i>Reading Materials:
              </strong>{' '}
              A rich library of reading materials, ranging from classic tales to new adventures, is available to cater to various reading levels and interests.
            </li>
            <li>
              <strong>
                <i className="fas fa-paint-brush mr-2"></i>Creative Activities:
              </strong>{' '}
              We offer a variety of creative activities, such as drawing, crafting, and writing, to foster artistic expression and creativity in children.
            </li>
          </motion.ul>

          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Our Innovative Approach
          </motion.h2>
          <motion.p
            className="mb-6 text-lg text-justify sm:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            Imagica is built on a foundation of cutting-edge technology and innovative educational principles. Our platform utilizes the latest advancements in artificial intelligence, augmented reality, and gamification to create an immersive learning environment. Here’s how we stand out:
          </motion.p>
          <motion.ul
            className="list-disc list-inside mb-6 text-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            <li>
              <strong>
                <i className="fas fa-robot mr-2"></i>Artificial Intelligence:
              </strong>{' '}
              Personalized learning paths and recommendations tailored to each child's unique needs and interests.
            </li>
            <li>
              <strong>
                <i className="fas fa-vr-cardboard mr-2"></i>Augmented Reality:
              </strong>{' '}
              Engaging AR experiences that bring stories and characters to life in a whole new way.
            </li>
            <li>
              <strong>
                <i className="fas fa-gamepad mr-2"></i>Gamification:
              </strong>{' '}
              Incorporating game mechanics to make learning fun and rewarding, with achievements and rewards.
            </li>
          </motion.ul>

          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Meet Our Team
          </motion.h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <motion.div
                  className="text-lg font-bold"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Rajith - Founder
                </motion.div>
              </AccordionTrigger>
              <AccordionContent>
                <motion.p
                  className="text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Rajith.. is a visionary leader with a passion for education and technology. With over a decade of experience in the industry, he is dedicated to creating innovative solutions that make learning enjoyable and effective.
                </motion.p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <motion.div
                  className="text-lg font-bold"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Shalini - Chief Creative Officer
                </motion.div>
              </AccordionTrigger>
              <AccordionContent>
                <motion.p
                  className="text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Shalini is an expert in storytelling and creative content development. Her creative approach ensures that every story is engaging and captivating for young readers.
                </motion.p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <motion.div
                  className="text-lg font-bold"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Sibhi - Lead Developer
                </motion.div>
              </AccordionTrigger>
              <AccordionContent>
                <motion.p
                  className="text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                 Sibhi is a skilled developer with a knack for integrating complex technologies into user-friendly platforms. His technical expertise is crucial in bringing our innovative ideas to life.
                </motion.p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <motion.h2
            className="text-3xl font-bold mb-4 mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Join Us on Our Journey
          </motion.h2>
          <motion.p
            className="mb-6 text-lg text-justify sm:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            We invite you to join us on this exciting journey of transforming education through interactive storytelling. Whether you are a parent, educator, or a storyteller, there are many ways to get involved and make a difference. Explore our platform, participate in our community, and help us shape the future of learning.
          </motion.p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
            onClick={handleSignUpClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          >
            Sign Up Now
          </motion.button>
        </div>
      </div>

      {/* Footer Section */}
      <motion.footer
        className="bg-gray-800 text-white py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="max-w-screen-lg mx-auto text-center">
          <p>&copy; 2024 Imagica. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-blue-400 hover:text-blue-600 mx-2">Privacy Policy</a>
            <a href="#" className="text-blue-400 hover:text-blue-600 mx-2">Terms of Service</a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default AboutUs;
