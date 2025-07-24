import React from 'react';

const AllTechnologies = () => {
  const technologies = [
    {
      name: '.NET',
      description: 'Microsoft\'s comprehensive development platform for building modern applications across web, desktop, mobile, and cloud.',
      icon: '🔷'
    },
    {
      name: 'AI',
      description: 'Artificial Intelligence solutions including machine learning, natural language processing, and intelligent automation.',
      icon: '🤖'
    },
    {
      name: 'Angular',
      description: 'Powerful TypeScript-based web application framework for building dynamic single-page applications.',
      icon: '🅰️'
    },
    {
      name: 'AWS',
      description: 'Amazon Web Services cloud computing platform offering scalable infrastructure and services.',
      icon: '☁️'
    },
    {
      name: 'C#',
      description: 'Modern, object-oriented programming language for building robust applications on the .NET platform.',
      icon: '💎'
    },
    {
      name: 'CSS',
      description: 'Cascading Style Sheets for designing beautiful, responsive user interfaces and web layouts.',
      icon: '🎨'
    },
    {
      name: 'Docker',
      description: 'Containerization platform for developing, shipping, and running applications efficiently.',
      icon: '🐳'
    },
    {
      name: 'Flutter',
      description: 'Google\'s UI toolkit for building natively compiled applications for mobile, web, and desktop.',
      icon: '📱'
    },
    {
      name: 'GitHub',
      description: 'Version control and collaboration platform for managing code repositories and development workflows.',
      icon: '🐙'
    },
    {
      name: 'GraphQL',
      description: 'Query language and runtime for APIs that enables efficient data fetching and manipulation.',
      icon: '📊'
    },
    {
      name: 'HTML',
      description: 'HyperText Markup Language - the foundation of web content structure and semantic meaning.',
      icon: '🌐'
    },
    {
      name: 'Java',
      description: 'Enterprise-grade programming language for building scalable, cross-platform applications.',
      icon: '☕'
    },
    {
      name: 'JavaScript',
      description: 'Dynamic programming language that powers interactive web experiences and modern applications.',
      icon: '⚡'
    },
    {
      name: 'Laravel',
      description: 'Elegant PHP framework for building modern web applications with expressive syntax.',
      icon: '🔥'
    },
    {
      name: 'MongoDB',
      description: 'NoSQL document database for flexible, scalable data storage and management.',
      icon: '🍃'
    },
    {
      name: 'Next.js',
      description: 'React framework for production-ready applications with server-side rendering and optimization.',
      icon: '▲'
    },
    {
      name: 'Node.js',
      description: 'JavaScript runtime for building fast, scalable server-side applications and APIs.',
      icon: '💚'
    },
    {
      name: 'Python',
      description: 'Versatile programming language for web development, data science, automation, and AI.',
      icon: '🐍'
    },
    {
      name: 'React',
      description: 'Popular JavaScript library for building interactive user interfaces and component-based applications.',
      icon: '⚛️'
    },
    {
      name: 'React Native',
      description: 'Framework for building native mobile applications using React and JavaScript.',
      icon: '📲'
    },
    {
      name: 'Redux',
      description: 'State management library for JavaScript applications, commonly used with React.',
      icon: '🔄'
    },
    {
      name: 'SQL',
      description: 'Structured Query Language for managing and querying relational databases effectively.',
      icon: '🗃️'
    },
    {
      name: 'TypeScript',
      description: 'Typed superset of JavaScript that enables better code quality and developer productivity.',
      icon: '📘'
    },
    {
      name: 'Vue.js',
      description: 'Progressive JavaScript framework for building user interfaces and single-page applications.',
      icon: '💚'
    }
  ];

  return (
    <div className="all-technologies-page">
      <div className="container">
        <div className="tech-header">
          <h1 className="tech-main-title">Our Technologies</h1>
          <p className="tech-subtitle">
            Explore our comprehensive technology stack and expertise across various platforms and frameworks
          </p>
        </div>
        
        <div className="technologies-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card" data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="tech-icon">{tech.icon}</div>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-description">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTechnologies;
