export const sections = {
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
        {
          name: 'CSRF PoC Generator',
          description: `[Built in <span class="highlight-blue">2023</span>] <br>
          <span class="highlight-orange">Python</span> <span class="highlight-purple">CLI</span> <span class="highlight-green">GUI</span>
          <span class="highlight-orange">CSRF</span> 
          <br>
          <div class="github-link-container">
            <a href="https://github.com/danisnk/csrf-poc-gen" target="_blank" rel="noopener noreferrer" class="github-link">
              <i class="fa-brands fa-github" style="color: #ffffff;"></i> GitHub
            </a>
          </div>
          <br>
  
           This tool was made to automate the <span class="highlight-blue">CSRF PoC Generation</span> and it has both <span class="highlight-green">CLI</span> and <span class="highlight-orange">GUI</span> versions.<br> 
           It takes <span class="highlight-teal">Burp Suite</span> requests as input and generates a <span class="highlight-red">CSRF PoC</span>.<br>
           Built with python using <span class="highlight-green">Airium</span> library
           <br>
           <br>
  
           <div style="text-align: center;">
           <h3 style="font-weight:bold;">CSRF PoC Generator CLI</h3>
  
  <img src="/csrf-poc-gen.png" alt="CSRF PoC Generator CLI Screenshot" style="width:80%;  height:auto; border:1px solid teal; padding:0px; display: inline-block;">
  <br>
  <br>
  <h3> CSRF PoC Generator GUI</h3>
  <img src="/csrf-poc-gen-gui.png" alt="CSRF PoC Generator GUI Screenshot" style="width:80%; height:auto; border:1px solid teal; padding:0px; display: inline-block;">
  </div>
        `,
        },
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