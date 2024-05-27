import React, { useState, useEffect } from 'react';

function AboutUs() {
  const [hovered, setHovered] = useState({ Introduction: false, Vision: false, Mission: false });
  const [text, setText] = useState({ Introduction: "", Vision: "", Mission: "" });
  const [animationComplete, setAnimationComplete] = useState({ Introduction: false, Vision: false, Mission: false });
  const [hoverPosition, setHoverPosition] = useState({ Introduction: 0, Vision: 0, Mission: 0 });
  const [activeSection, setActiveSection] = useState('Introduction');

  const sections = [
    {
      title: 'Introduction',
      content: "YourStory is a unique platform dedicated to sharing real-life stories that inspire, educate, and connect people from all walks of life. Our mission is to create a space where everyone can share their experiences and learning from the journeys of others. Whether it’s a tale of personal growth, a challenging journey, or a moment of triumph, YourStory allows you to connect with others through the power of storytelling.It provides an environment and a digital platform for expressing emotions without hesitation"
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

  const highlightedText = fullText.replace(/(inspire|educate|digital platform|connecting|connect|mission|space|experiences|journeys|personal growth|challenging journey|moment of triumph|storytelling|empathy|understanding|belonging|positive impact|real-life experiences|motivation|resilience|success)/g, "<span class='highlight'>$1</span>");

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

  // Event handler for mouse leave
  const handleMouseLeave = () => {
    setHovered(prev => ({ ...prev, [activeSection]: false }));
  };

  return (
    <div className="about-us-container">
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
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="about-us-heading">{activeSectionData.title}</h2>
        <div className="about-us-content introduction-content">
          <p id="introduction-text" dangerouslySetInnerHTML={{ __html: text[activeSection] }}></p>
        </div>
      </section>




      {/* Other sections... */}
      
      <section className="about-us-card">
        <img className="about-us-image" src="/path/to/what-we-do-image.jpg" alt="What We Do" />
        <div className="about-us-content">
          <h2>What We Do</h2>
          <ul>
            <li><strong>Write Your Story:</strong> Share your unique experiences with our community. Whether it's a tale of personal growth, a challenging journey, or a moment of triumph, your story can inspire others.</li>
            <li><strong>Read Inspiring Stories:</strong> Explore a wide range of categories including Thrill, Action, Drama, Romance, Education, Entrepreneurship, and more. Discover stories that resonate with you and find inspiration in the experiences of others.</li>
            <li><strong>Connect and Engage:</strong> Interact with fellow storytellers through comments, likes, and discussions. Build connections with people who share similar experiences or interests.</li>
            <li><strong>Profile Features:</strong> Track your activity, view stories you've published, and see your most read and liked stories.</li>
          </ul>
        </div>
      </section>
      
      <section className="about-us-card">
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
      </section>
      
      <section className="about-us-card">
        <img className="about-us-image" src="/path/to/team-image.jpg" alt="Team" />
        <div className="about-us-content">
          <h2>Our Team</h2>
          <p>Our dedicated team is passionate about storytelling and community building. Meet the people who make YourStory possible:</p>
          <ul>
            <li><strong>[Name], Founder & CEO:</strong> With a vision to create a platform where every story matters, [Name] leads the team with passion and dedication.</li>
            <li><strong>[Name], CTO:</strong> Responsible for the technical backbone of YourStory, [Name] ensures that our platform is robust, scalable, and user-friendly.</li>
            <li><strong>[Name], Content Director:</strong> [Name] oversees the content strategy, ensuring that our stories are impactful and resonate with our audience.</li>
            <li><strong>[Name], Community Manager:</strong> Focused on building and nurturing our community, [Name] engages with users and fosters a positive environment.</li>
          </ul>
        </div>
      </section>
      
      <section className="about-us-card">
        <img className="about-us-image" src="/path/to/get-involved-image.jpg" alt="Get Involved" />
        <div className="about-us-content">
          <h2>Get Involved</h2>
          <p>We invite you to become a part of our growing community. Share your story, read inspiring tales, and connect with others. Together, we can build a space where everyone's story matters. By joining YourStory, you contribute to a platform that values authenticity, empathy, and inspiration.</p>
        </div>
      </section>
      
      <section className="about-us-card">
        <img className="about-us-image" src="/path/to/contact-image.jpg" alt="Contact Us" />
        <div className="about-us-content">
          <h2>Contact Us</h2>
          <p>Have questions or feedback? We'd love to hear from you. Contact us at <a href="mailto:email@example.com">email@example.com</a> or fill out the contact form below. Your input helps us improve and grow our community.</p>
        </div>
      </section>



    </div>
  );
}

export default AboutUs;

