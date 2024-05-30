import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import introanimation from '../assets/introanimation.json';
import writeanimation from '../assets/writeanimation.json';
import readanimation from '../assets/readanimation.json';
import CategoriesWrite from "./CategoriesWrite"; // Updated import
import CategoriesRead from "./CategoriesRead"; // Updated import
import teamanimation from '../assets/teamanimation.json';

function AboutUs() {
  const [hovered, setHovered] = useState({ Introduction: false, Vision: false, Mission: false });
  const [text, setText] = useState({ Introduction: "", Vision: "", Mission: "" });
  const [animationComplete, setAnimationComplete] = useState({ Introduction: false, Vision: false, Mission: false });
  const [hoverPosition, setHoverPosition] = useState({ Introduction: 0, Vision: 0, Mission: 0 });
  const [activeSection, setActiveSection] = useState('Introduction');
  const [hoveredCards, setHoveredCards] = useState(new Set());

  const [modalIsOpenWrite, setModalIsOpenWrite] = useState(false);
  const [modalIsOpenRead, setModalIsOpenRead] = useState(false);

  const handleOpenModalWrite = () => {
    setModalIsOpenWrite(true);
  };
  const handleCloseModalWrite = () => {
    setModalIsOpenWrite(false);
  };
  const handleOpenModalRead = () => {
    setModalIsOpenRead(true);
  };
  const handleCloseModalRead = () => {
    setModalIsOpenRead(false);
  };


  const teamMembers = [
    {
        name: "Ankush Rajpoot",
        role: "Founder & CEO",
        image: "/path/to/john-image.jpg",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        name: "Nakesh Tewari",
        role: "CTO",
        image: "/path/to/jane-image.jpg",
        twitter: "https://twitter.com/janesmith",
        instagram: "https://instagram.com/janesmith",
        github: "https://github.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith"
    },
    {
        name: "Dhruv Saxena",
        role: "N/A",
        image: "/path/to/bob-image.jpg",
        twitter: "https://twitter.com/bobjohnson",
        instagram: "https://instagram.com/bobjohnson",
        github: "https://github.com/bobjohnson",
        linkedin: "https://linkedin.com/in/bobjohnson"
    },
    {
        name: "Kunal Dewangan",
        role: "N/A",
        image: "/path/to/alice-image.jpg",
        twitter: "https://twitter.com/alicedavis",
        instagram: "https://instagram.com/alicedavis",
        github: "https://github.com/alicedavis",
        linkedin: "https://linkedin.com/in/alicedavis"
    }
];


  const sections = [
    {
      title: 'Introduction',
      content: "YourStory is a unique platform dedicated to sharing real-life stories that inspire, educate, and connect people from all walks of life. Our mission is to create a space where everyone can share their experiences and learn from the journeys of others. Whether it’s a tale of personal growth, a challenging journey, or a moment of triumph, YourStory allows you to connect with others through the power of storytelling. It provides an environment and a digital space for expressing emotions without hesitation."
    },
    {
      title: 'Vision',
      content: "We envision a world where stories of real-life experiences are accessible to all, fostering empathy, understanding, and a sense of belonging. By connecting people through their stories, we aim to create a positive impact on individuals and communities. Our goal is to make YourStory a go-to platform for inspiration and personal growth."
    },
    {
      title: 'Mission',
      content: "At YourStory, our mission is to build a supportive community where individuals can share their real-life experiences, inspire others, and find motivation through stories of resilience, success, and personal growth. We believe that everyone has a story worth sharing, and through our platform, we aim to give every voice the opportunity to be heard."
    }
  ];

  const activeSectionData = sections.find(section => section.title === activeSection);
  const fullText = activeSectionData.content;

  const highlightedText = fullText.replace(/(inspire|educate|digital space|connecting|connect|mission|space|experiences|journeys|personal growth|challenging journey|moment of triumph|storytelling|empathy|understanding|belonging|positive impact|real-life experiences|motivation|resilience|success)/g, "<span class='highlight'>$1</span>");

  useEffect(() => {
    let i = hoverPosition[activeSection]; // Start typing from the position where the user left off
    let interval;
    if (hovered[activeSection] && !animationComplete[activeSection]) {
      interval = setInterval(() => {
        if (i < highlightedText.length) {
          setText(prev => ({ ...prev, [activeSection]: highlightedText.slice(0, i + 1) }));
          i++;
        } else {
          clearInterval(interval);
          setAnimationComplete(prev => ({ ...prev, [activeSection]: true }));
        }
      }, 50);
    }
    return () => clearInterval(interval);
  }, [hovered, animationComplete, highlightedText, hoverPosition, activeSection]);

  // Event handler for mouse enter
  const handleMouseEnter = () => {
    setHovered(prev => ({ ...prev, [activeSection]: true }));
    setHoverPosition(prev => ({ ...prev, [activeSection]: text[activeSection].length })); // Set the position to where the animation left off
  };

  const handleMouseEnterServices = (cardIndex) => {
    setHoveredCards(prev => new Set(prev).add(cardIndex));
  };

  return (
    <>
    <div className="about-us-container">
      {/* Introduction Section */}
      <div className="section-buttons">
        {sections.map(section => (
          <button
            key={section.title}
            className={activeSection === section.title ? 'active' : ''}
            onClick={() => setActiveSection(section.title)}
          >
            {section.title}
          </button>
        ))}
      </div>

      <section
        className="about-us-card introduction-card"
        onMouseEnter={handleMouseEnter}
      >
        <h2 className="about-us-heading">{activeSectionData.title}</h2>
        <div className="about-us-content introduction-content">
          {activeSection === 'Introduction' && (
            <Lottie animationData={introanimation} className="intro-icon" loop autoplay />
          )}
          <p id="introduction-text" dangerouslySetInnerHTML={{ __html: text[activeSection] }}></p>
        </div>
      </section>

      {/* Write and Read Services Section */}
      <section className="about-us-card">
        <div className="about-us-content">
          <div className="services-container">
            <div 
              className={`service-card ${hoveredCards.has(0) ? 'show-answer' : ''}`} 
              onMouseEnter={() => handleMouseEnterServices(0)}
            >
              <Lottie animationData={writeanimation} className="write-icon" loop autoplay speed={2} />
              <h3>Nervous to narrate your own incident?</h3>
              <div className="write-description">
                <p className="question">Are you hesitant to share your story due to stage fright or shyness? Do you fear judgment or criticism?</p>
                <p className="answer">Our platform offers a safe and welcoming digital space for you to express yourself without any pressure or anxiety. With our user-friendly interface and supportive community, you can share your experiences confidently and inspire others with your journey. Say goodbye to stage fright and hello to empowerment!</p>
                <button id="WriteServiceButton" onClick={handleOpenModalWrite}>
                Write
              </button>
              </div>
            </div>
            <div 
              className={`service-card ${hoveredCards.has(1) ? 'show-answer' : ''}`} 
              onMouseEnter={() => handleMouseEnterServices(1)}
            >
              <Lottie animationData={readanimation} className="read-icon" loop autoplay speed={2} />
              <h3>Discover incidents of life you might have faced once!</h3>
              <div className="read-description">
                <p className="question">Feeling uninspired or looking for new perspectives? Are you struggling to find stories that resonate with you?</p>
                <p className="answer">Our platform offers a diverse collection of tales across various genres and categories. Whether you're seeking adventure, romance, or personal growth, you'll find captivating narratives that ignite your imagination and touch your heart. Join our community and embark on a journey of discovery and enlightenment!</p>
                <button id="ReadServiceButton" onClick={handleOpenModalRead}>
                Read
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>


     


     
     {/* <section className="about-us-card">
        <img className="about-us-image" src="/path/to/values-image.jpg" alt="Values" />
        <div className="about-us-content">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Authenticity:</strong> We believe in the power of real, unfiltered stories. Every story shared on our platform is a true reflection of someone's life.</li>
            <li><strong>Empathy:</strong> We aim to foster a community built on understanding and compassion. By sharing and reading stories, we hope to build empathy among our users.</li>
            <li><strong>Inspiration:</strong> Every story has the potential to inspire. We are committed to creating a space where people can find motivation and encouragement through shared experiences.</li>
            <li><strong>Community:</strong> We believe in the strength of a supportive community where people can connect over shared experiences and learn from each other.</li>
          </ul>
        </div>
      </section> */}
      
      <section className="about-us-card team-section">
    <h2 className='team-section-heading'>Our Team</h2>
    <div class="image-description-container team-discription-animation-intro">
        <div class="description team-section-description">
            <p>
                Our dedicated team is passionate about creating a vibrant platform where every voice can be heard and every story matters. We believe in empowering individuals to share their unique journeys. Meet the visionaries who make YourStory a reality:
            </p>
        </div>
        <Lottie animationData={teamanimation} class="image team-icon" loop autoplay />
    </div>
    <div className="team-container">
        {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
                <div className="team-image-container">
                    <img className="team-image" src={member.image} alt={`${member.name}`} />
                </div>
                <div className="team-info">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <div className="social-links">
                        {member.twitter && <a href={member.twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>}
                        {member.instagram && <a href={member.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>}
                        {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>}
                        {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>}
                    </div>
                </div>
            </div>
        ))}
    </div>
</section>

      
<section className="about-us-card">
  <img className="about-us-image" src="/path/to/get-involved-image.jpg" alt="Get Involved" />
  <div className="about-us-content">
    <h2>Get Involved</h2>
    <p>We invite you to become a part of our growing community. Share your story, read inspiring tales, and connect with others. Together, we can build a space where everyone's story matters. By joining YourStory, you contribute to a platform that values authenticity, empathy, and inspiration.</p>
    <form action="/subscribe" method="post">
      <input type="email" name="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe</button>
    </form>
    <div class="community-links">
      <a href="https://www.linkedin.com/company/yourstory" target="_blank" rel="noopener noreferrer"><img src="/path/to/linkedin-icon.png" alt="LinkedIn" /></a>
      <a href="https://www.youtube.com/yourstory" target="_blank" rel="noopener noreferrer"><img src="/path/to/youtube-icon.png" alt="YouTube" /></a>
      <a href="https://discord.gg/yourstory" target="_blank" rel="noopener noreferrer"><img src="/path/to/discord-icon.png" alt="Discord" /></a>
      <a href="https://t.me/yourstory" target="_blank" rel="noopener noreferrer"><img src="/path/to/telegram-icon.png" alt="Telegram" /></a>
    </div>
  </div>
</section>

<section className="about-us-card">
  <img className="about-us-image" src="/path/to/contact-image.jpg" alt="Contact Us" />
  <div className="about-us-content">
    <h2>Contact Us</h2>
    <p>Have questions or feedback? We'd love to hear from you. Contact us at <a href="mailto:email@example.com">email@example.com</a> or fill out the contact form below. Your input helps us improve and grow our community.</p>
    <form action="/contact" method="post">
      <input type="text" name="name" placeholder="Your name" required />
      <input type="email" name="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Your message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</section>




    </div>
    <CategoriesWrite
        open={modalIsOpenWrite}
        handleCloseModalWrite={handleCloseModalWrite}
      />{" "}
      {/* Updated usage */}
      <CategoriesRead
        open={modalIsOpenRead}
        handleCloseModalRead={handleCloseModalRead}
      />{" "}

    </>
    
  );
}

export default AboutUs;

