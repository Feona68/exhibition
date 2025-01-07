import React from 'react';
import './TeamSection.css';
import image1 from './IMG_5143.jpg';
import image2 from './IMG_5151.jpg';
import image3 from './IMG_5152 (1).jpg';
import image4 from './IMG_5156.jpg';
import image5 from './IMG_5157.jpg';
import image6 from './IMG_5164.jpg';
import image7 from './IMG_5173.jpg';

const TeamSection = () => {
  const teamMembers = [
    { name: 'Alice Johnson', role: 'Project Manager', img: image1 },
    { name: 'Bob Smith', role: 'Developer', img: image2 },
    { name: 'Charlie Lee', role: 'Designer', img: image3 },
    { name: 'Dana Wilson', role: 'QA Engineer', img: image4 },
    { name: 'Eve Carter', role: 'Data Scientist', img: image5 },
    { name: 'Frank Moore', role: 'Marketing Head', img: image6 },
    { name: 'Grace Kim', role: 'HR Manager', img: image7 },
  ];

  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="circle-container">
        {teamMembers.map((member, index) => (
          <div className="circle-info-wrapper" key={index}>
            <div className={`circle ${index === 3 ? 'center-circle' : ''}`}>
              <img src={member.img} alt={member.name} />
            </div>
            <div className="info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
