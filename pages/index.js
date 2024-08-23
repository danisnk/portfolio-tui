import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [selectedSection, setSelectedSection] = useState('home');
  const [selectedItemName, setSelectedItemName] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const sections = {
    home: { 
      title: 'About', 
      overview: `I'm <span class="highlight-blue">Safan Danis NK</span>, a passionate <span class="highlight-blue">security engineer</span> from India.`,
      description: `
      <br>
      <br>
      <br>
      <pre style="font-size: 10px;">
   _____       ____               ____              _         _   ____ __
  / ___/____ _/ __/___ _____     / __ \\____ _____  (_)____   / | / / //_/
  \\__ \\/ __ \`/ /_/ __ \`/ __ \\   / / / / __ \`/ __ \\/ / ___/  /  |/ / ,<   
 ___/ / /_/ / __/ /_/ / / / /  / /_/ / /_/ / / / / (__  )  / /|  / /| |  
/____/\\__,_/_/  \\__,_/_/ /_/  /_____/\\__,_/_/ /_/_/____/  /_/ |_/_/ |_|  
      </pre>
      <br>
      <br>
      I'm <span class="highlight-blue">Safan Danis NK</span>.<br>
      <br>
      I'm a <span class="highlight-red">security engineer</span> focusing on <span class="highlight-orange">Web application</span>, and <span class="highlight-orange">android security</span> . 
      <br>
      <br>
      My work involves performing <span class="highlight-red">vulnerability assessments, penetration testing</span>, and <span class="highlight-red">developing tools</span> to automate security processes. Additionally, I have a solid background 
      in <span class="highlight-purple">cloud security</span>, with hands-on experience in <span class="highlight-red">AWS</span> and implementing security 
      best practices in cloud environments. <br>
      <br>
      I am also proficient in using tools like <span class="highlight-red">Burp Suite</span> and <span class="highlight-red">Mobile Security Framework 
      (MobSF)</span> for both web and mobile app security testing. 
      <br>
      <br>
      You can find my resume here - <a class="highlight-blue" href="/safan-danis-resume.pdf" target="_blank">Resume</a><br>
My LinkedIn - <a class="highlight-blue" href="https://linkedin.com/in/nksafan" target="_blank">LinkedIn</a><br>
Github - <a class="highlight-blue" href="https://github.com/danisnk" target="_blank">Github</a><br>

    `,
    },
    experience: {
      title: 'Experience',
      items: [
        { name: 'Freelancer', company: '' },
        // Add more experience items here
      ]
    },
    projects: {
      title: 'Projects',
      totalCount: 4,
      items: [
        { name: 'CSRF PoC Generator', description: `[Built in <span class="highlight-blue">2023</span>] <br>
          <span class="highlight-orange">Python</span> <span class="highlight-purple">CLI</span> <span class="highlight-green">GUI</span>

          <div class="github-link-container">
            <a href="https://github.com/danisnk/csrf-poc-gen" target="_blank" rel="noopener noreferrer" class="github-link">
              <i class="fa-brands fa-github" style="color: #ffffff;"></i> GitHub
            </a>
          </div>
          <br>

           This tool was made to automate the <span class="highlight-blue">CSRF PoC Generation</span> and it has both <span class="highlight-green">CLI</span> and <span class="highlight-orange">GUI</span> versions.<br> 
           It takes <span class="highlight-teal">Burp Suite</span> requests as input and generates a <span class="highlight-red">CSRF PoC</span>.<br>
           Built with python using <span class="highlight-green">Airium</span> library
        `, },
        { name: 'X-plainer app', description: 'An application that explains complex topics in simple terms.' },
        { name: 'Event Management Website', description: 'A web platform for managing and organizing events.' },
        { name: 'E-commerce Website', description: 'A fully functional online store with product management and checkout.' },
      ]
    },
    skills: {
      title: 'Skills - Tools',
      totalCount: 10,
      items: [
        { name: 'Burpsuite', description: 'Proficient in using Burp Suite for web application security testing.' },
        { name: 'OWASP TOP 10', description: 'Thorough understanding of the OWASP Top 10 web application security risks.' },
        { name: 'Android Security', description: 'Experienced in identifying and mitigating security vulnerabilities in Android applications.' },
        { name: 'Vulnerability Assessment', description: 'Skilled in conducting comprehensive vulnerability assessments on various systems and applications.' },
        { name: 'AWS', description: 'Familiar with AWS services and security best practices for cloud environments.' },
        { name: 'MobSF', description: 'Proficient in using Mobile Security Framework (MobSF) for mobile app security testing.' },
        { name: 'Python', description: 'Strong programming skills in Python for security scripting and tool development.' },
        { name: 'JS', description: 'Proficient in JavaScript for web application development and security testing.' },
        { name: 'React', description: 'Experienced in building secure front-end applications using React.' },
        { name: 'React Native', description: 'Skilled in developing secure mobile applications using React Native.' },
      ]
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedSection !== 'home' && sections[selectedSection].items) {
        const items = sections[selectedSection].items;
        if (event.key === 'ArrowDown') {
          setSelectedIndex((selectedIndex + 1) % items.length);
        } else if (event.key === 'ArrowUp') {
          setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
        }
      }
      
      switch(event.key) {
        case '1':
          setSelectedSection('home');
          break;
        case '2':
          setSelectedSection('experience');
          break;
        case '3':
          setSelectedSection('projects');
          break;
        case '4':
          setSelectedSection('skills');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedSection, selectedIndex]);

  useEffect(() => {
    if (sections[selectedSection].items) {
      setSelectedItemName(sections[selectedSection].items[selectedIndex]?.name);
    }
  }, [selectedSection, selectedIndex]);

  const handleItemClick = (sectionKey, item) => {
    setSelectedSection(sectionKey);
    setSelectedItemName(item.name);
  };

  return (
    <div className="bg-darkblue text-gray-300 font-mono min-h-screen flex">
  <Head>
    <title>Safan Danis NK - Security Engineer</title>
    <meta name="description" content="Safan Danis NK's personal website" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
  </Head>

  {/* Left Sidebar */}
  <div className="w-1/4 p-2">
    <div className="mb-4 relative">
      <h2
        className={`text-xl px-2 bg-darkblue absolute top-0 left-2 z-10 transform -translate-y-1/2 ${
          selectedSection === 'home' ? 'text-blue-400' : 'text-gray-300'
        }`}
        onClick={() => { setSelectedSection('home'); setSelectedItemName(null); }}
      >
        About
      </h2>
      <div className="border border-white p-2 mt-3">
        <p className="text-s px-2 pb-2 mt-2" dangerouslySetInnerHTML={{ __html: sections['home'].overview }} />
      </div>
    </div>

    {Object.entries(sections).map(([key, section]) => (
      <div key={key} className="mb-4 relative">
        {key !== 'home' && (
          <>
            <h2
              className={`text-xl px-2 bg-darkblue absolute left-2 z-10 transform -translate-y-1/2 ${
                selectedSection === key ? 'text-blue-400' : 'text-gray-300'
              }`}
              onClick={() => { setSelectedSection(key); setSelectedItemName(null); }}
            >
              {section.title}
            </h2>
            <div className="border border-white p-2 mt-3">
              {section.items && (
                <div className="pb-2">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className={`mt-2 ${
                        selectedItemName === item.name ? 'bg-blue-500 text-gray-300' : 'text-gray-300'
                      } cursor-pointer`}
                      onClick={() => handleItemClick(key, item)}
                    >
                      {item.name} {item.company && `@ ${item.company}`}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {(key === 'skills' || key === 'projects' || key === 'experience') && (
              <div className="absolute bottom-0 right-4 transform translate-y-1/2 px-1 bg-darkblue text-xs text-gray-500">
                {selectedItemName
                  ? sections[key].items.findIndex(item => item.name === selectedItemName) + 1
                  : 0} of {section.totalCount || section.items.length}
              </div>
            )}
          </>
        )}
      </div>
    ))}
  </div>

  {/* Main Content Area */}
  <div className="w-3/4 pt-5">
    <div className={`border border-white p-2 ${selectedSection === 'home' ? 'border-white' : 'border-white'}`}>
      {selectedSection === 'home' ? (
        <div>
          <div className="border-1 border-white p-2">
            <p dangerouslySetInnerHTML={{ __html: sections[selectedSection].description }} />
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl mb-2 ">{selectedItemName}</h2>
          {sections[selectedSection].items && selectedItemName ? (
            <div className="border-1 border-white p-2">
              <p dangerouslySetInnerHTML={{ __html: sections[selectedSection].items.find(item => item.name === selectedItemName)?.description }} />
            </div>
          ) : (
            <div className="border-1 border-white p-2">
              {`Select an item from the ${sections[selectedSection].title} section to see details.`}
            </div>
          )}
        </div>
      )}
    </div>
  </div>

  {/* Footer */}
  <footer className="absolute bottom-0 w-full text-center p-4">
    <p className="text-gray-400">Use arrow keys to navigate or just use the mouse</p>
    <div className="mt-2">
      <a 
        href="/safan-danis-resume.pdf" 
        className="text-blue-400 mr-4"
        download="Safan-Danis-Resume.pdf"
      >
        <i className="fas fa-file-download"></i> Resume
      </a>
      <a 
        href="https://github.com/danisnk" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-400"
      >
        <i className="fab fa-github mr-4"></i>
      </a>
      <a 
        href="https://linkedin.com/in/nksafan" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-400"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </footer>
</div>
  );
}
