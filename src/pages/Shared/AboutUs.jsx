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
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUpClick = () => {
    navigate('/register'); // Redirect to the register page
  };
  

  const handleignUpClick = () => {
    navigate('/story'); // Redirect to the register page
  };
  
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: 'url("https://ik.imagekit.io/SIBHI/Imagica/hero-image.jpg")' }}
      >
        <div className="absolute opacity-50 h-25"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-5xl font-extrabold mb-4 pt-60">
            Where Learning Meets Imagination
          </h1>
          <p className="text-xl mb-6 font-extralight">Discover, Learn, and Grow with Imagica</p>
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg " onClick={handleignUpClick}>
            Explore Our Stories
          </button>
        </div>
      </div>

      <div className="py-16 px-8 sm:px-4">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-4xl font-extrabold mb-6 mt-16 text-center sm:text-left animate-fadeIn">
            About Us
          </h1>

          <p className="mb-6 text-lg text-justify sm:text-left animate-slideIn">
            Welcome to <span className="font-bold">Imagica</span>, where the magic of stories and the excitement of learning collide! We are a passionate team of educators, developers, and storytellers dedicated to creating an engaging and immersive educational experience for children. Our mission is to inspire a lifelong love of reading and learning by transforming the way children interact with stories.
          </p>

          {/* Image Carousel */}
          <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
            <div>
              <img src="https://ik.imagekit.io/SIBHI/Imagica/iStock-1417486686.jpg" alt="Image 1" />
            </div>
            <div>
              <img src="https://ik.imagekit.io/SIBHI/Imagica/word-image4.jpeg" alt="Image 2" />
            </div>
            <div>
              <img src="https://ik.imagekit.io/SIBHI/Imagica/family-reading-bedtime-2021-04-02-18-49-19-utc.jpg" alt="Image 3" />
            </div>
          </Carousel>

          <h2 className="text-3xl font-bold mb-4 mt-10 animate-fadeIn">
            Our Vision
          </h2>
          <p className="mb-6 text-lg text-justify sm:text-left">
            At Imagica, we envision a world where every child has access to innovative and interactive learning tools that make education fun and exciting. We believe that stories have the power to spark imagination, creativity, and critical thinking skills. Our goal is to harness this power by integrating state-of-the-art technology with classic storytelling to create an unparalleled educational platform.
          </p>

          <h2 className="text-3xl font-bold mb-4 animate-fadeIn">What We Offer</h2>
          <ul className="list-disc list-inside mb-6 text-lg">
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
          </ul>

          <h2 className="text-3xl font-bold mb-4 animate-fadeIn">
            Our Innovative Approach
          </h2>
          <p className="mb-6 text-lg text-justify sm:text-left">
            Imagica is built on a foundation of cutting-edge technology and innovative educational principles. Our platform utilizes the latest advancements in artificial intelligence, augmented reality, and gamification to create an immersive learning environment. Here’s how we stand out:
          </p>
          <ul className="list-disc list-inside mb-6 text-lg">
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
              Bringing stories and educational content to life with immersive AR experiences.
            </li>
            <li>
              <strong>
                <i className="fas fa-trophy mr-2"></i>Gamification:
              </strong>{' '}
              Integrating game mechanics to motivate and engage children in their learning journey.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-4 animate-fadeIn">
            "Have control over the Data over what your children consume"
          </h2>
          <p className="mb-6 text-lg text-justify sm:text-left">
            We invite you to join us on our mission to revolutionize children's education through the power of storytelling and technology. Together, we can create a future where learning is an adventure that every child looks forward to.
          </p>
          <p className="text-lg text-justify sm:text-left">
            Thank you for being a part of the Imagica community. Let’s embark on this magical journey of learning and discovery together!
          </p>

          {/* Accordion Section */}
          <h2 className="text-3xl font-bold mb-4 mt-10 animate-fadeIn">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Imagica?</AccordionTrigger>
              <AccordionContent>
                Imagica is an interactive educational platform that combines storytelling with cutting-edge technology to make learning fun and engaging for children.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does Imagica work?</AccordionTrigger>
              <AccordionContent>
                Imagica offers interactive stories, educational games, and creative activities that are designed to spark imagination and foster learning in a playful way.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Who can use Imagica?</AccordionTrigger>
              <AccordionContent>
                Imagica is designed for children of all ages and their parents, educators, and caregivers who want to make learning an enjoyable experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Footer with Call-to-Action */}
      <footer className="bg-gray-800 py-6 mt-16">
        <div className="max-w-screen-lg mx-auto text-center text-white">
          <p className="mb-4">Join our community and start your learning adventure today!</p>
          <button
            onClick={handleSignUpClick} // Updated onClick handler
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg"
          >
            Sign Up Now
          </button>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-800 text-white p-3 rounded-full"
      >
        ↑
      </button>
    </div>
  );
};

export default AboutUs;
