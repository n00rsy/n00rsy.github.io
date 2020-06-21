import React from 'react';
import '../css/Content.css';
import {isMobile} from 'react-device-detect';

function Content() {

  if(isMobile){
    return(
      <div className="content-container-mobile">
      <div className="content-mobile">
        <h1>noor syed</h1>
        <p>Junior at Rutgers University studying <span style={{ fontWeight: '700' }}>Computer Science</span></p>
        <p>Extremely interested in scalable system design, distributed systems, and high performance computing. Also interested in fullstack engineering, graphics programming, and GPU compute.</p>

        <h2>Experience</h2>
        <ul>
          <li>SWE intern at BGC Partners.</li>
          <li>Software developer and technical support lead at Sabii Digital.</li>
          <li>CFO and co-founder at Launchify.</li>
          <li>Research intern at NJIT Informatics Lab.</li>
        </ul>

        <h2>Technical Skills</h2>
        <h4>(everything in order of the ones I like most)</h4>
        <h3>Programming Languages</h3>
        <ul>
          <li>C/C++ 17</li>
          <li>Java 8</li>
          <li>JavaScript ES8</li>
          <li>Python 3</li>
          <li>GraphQL</li>
          <li>C#</li>
        </ul>
        <h3>Frameworks/Tools</h3>
        <ul>
          <li>CUDA Toolkit</li>
          <li>Spring</li>
          <li>node.js</li>
          <li>Socket.io</li>
          <li>WebGL</li>
          <li>SDL2</li>
          <li>GDB</li>
          <li>Git</li>
          <li>Docker</li>
          <li>Android SDK</li>
        </ul>
        <h3>Methodologies</h3>
        <ul>
          <li>Agile Development</li>
        </ul>

        <h2>Contact</h2>
        <p>email: <a href="mailto:noorsyed1a@gmail.com">noorsyed1a@gmail.com</a></p>
        <p><pre><a href = "https://www.linkedin.com/in/n00rsy/">LinkedIn</a>  <a href = "https://github.com/n00rsy">GitHub</a>  <a href = "https://github.com/n00rsy">resume</a></pre></p>

        <h2>Fluff</h2>
        <p><a href="https://www.instagram.com/n00rsy/">Instagram</a></p>
        <h3>Personal Projects</h3>
        <ul>
          <li><a href="https://gravity-doc.com/">Gravity Doc</a></li>
          <li><a href="https://www.amazon.com/Noor-Syed-Insult-Generator/dp/B06W5GWD3R">Alexa Insult Generator</a></li>
        </ul>
        <p><a href="https://www.youtube.com/watch?v=fuvkdIqdboc">Watch</a> me model an Audi r8 in Blender</p>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
    )
  }
  return (
    <div className="content-container">
      <h1>noor_syed</h1>
      <div className="content">
      
        <p>Junior at Rutgers University studying <span style={{ fontWeight: '700' }}>Computer Science</span></p>
        <p>Extremely interested in scalable system design, distributed systems, and high performance computing. Also interested in fullstack engineering, graphics programming, and GPU compute.</p>

        <h2>Experience</h2>
        <ul>
          <li>SWE intern at BGC Partners.</li>
          <li>Software developer and technical support lead at Sabii Digital.</li>
          <li>CFO and co-founder at Launchify.</li>
          <li>Research intern at NJIT Informatics Lab.</li>
        </ul>

        <h2>Technical Skills</h2>
        <h4>(everything in order of the ones I like most)</h4>
        <h3>Programming Languages</h3>
        <ul>
          <li>C/C++ 17</li>
          <li>Java 8</li>
          <li>JavaScript ES8</li>
          <li>Python 3</li>
          <li>GraphQL</li>
          <li>C#</li>
        </ul>
        <h3>Frameworks/Tools</h3>
        <ul>
          <li>CUDA Toolkit</li>
          <li>Spring</li>
          <li>node.js</li>
          <li>Socket.io</li>
          <li>WebGL</li>
          <li>SDL2</li>
          <li>GDB</li>
          <li>Git</li>
          <li>Docker</li>
          <li>Android SDK</li>
        </ul>
        <h3>Methodologies</h3>
        <ul>
          <li>Agile Development</li>
        </ul>

        <h2>Contact</h2>
        <p>email: <a href="mailto:noorsyed1a@gmail.com">noorsyed1a@gmail.com</a></p>
        <p><pre><a href = "https://www.linkedin.com/in/n00rsy/">LinkedIn</a>  <a href = "https://github.com/n00rsy">GitHub</a>  <a href = "https://github.com/n00rsy">resume</a></pre></p>

        <h2>Fluff</h2>
        <p><a href="https://www.instagram.com/n00rsy/">Instagram</a></p>
        <h3>Personal Projects</h3>
        <ul>
          <li><a href="https://gravity-doc.com/">Gravity Doc</a></li>
          <li><a href="https://www.amazon.com/Noor-Syed-Insult-Generator/dp/B06W5GWD3R">Alexa Insult Generator</a></li>
        </ul>
        <p><a href="https://www.youtube.com/watch?v=fuvkdIqdboc">Watch</a> me model an Audi r8 in Blender</p>
        <br></br>
      </div>
    </div>
  );
}

export default Content;