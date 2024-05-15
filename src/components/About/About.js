// components/About.js
import React from "react";
import "./About.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

function About() {
  return (
    <section className="about">
      <h1 className="know"
        style={{
          fontSize: "60px",
          textAlign: "center",
          fontFamily:"sans-serif",
        }}
      >
        KNOW ME
        
      </h1>
      <div className="avatar">
      <img  className="avatarimg" src="avatar.png" alt="Avatar"/>
      <div className="overlay"><button  onClick={() => window.open("https://github.com/vikasmohansharma", "_blank")}>
        <GitHubIcon  />
      </button>
      <button  onClick={() => window.open("https://twitter.com/vikasaryavart", "_blank")}>
        <XIcon  />
      </button>
      <button  onClick={() => window.open("https://www.linkedin.com/in/vikas-sharma-b86968286/")}>
        <LinkedInIcon  />
      </button>
      <button  onClick={() => window.open("https://www.instagram.com/real.vikassharma1996/?igsh=MXU4YWxmbXowaDg5NQ%3D%3D")}>
        <InstagramIcon  />
      </button></div></div>

      <section className="about_part1">
        <h2 className="flex-item">
          🚀 Welcome to my digital domain! I'm Vikas Sharma, a proficient web
          developer based in Margao, Goa. Here, amidst the dynamic web
          development landscape, I've dedicated myself to refining my skills and
          expertise. Currently, I'm actively seeking fresh opportunities to
          leverage my knowledge and contribute meaningfully to projects in the
          field.
          <br />
          <br />
          Besides my technical proficiency, I've also achieved notable
          distinctions, including:
          <ul>
            <li>Elocutor Extraordinaire</li>
            <li>Esteemed Essayist</li>
            <li>Poet and Author</li>
            <li>Accomplished Debater</li>
          </ul>
        </h2>
      </section>
      <h1  className="proff" >
          Professional Skills<br/>
        </h1>
      <section className="about_part2">
      <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/html-5.png" alt="HTML" /><div class="skillsoverlay">HTML</div></div>
      <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/css-3.png" alt="CSS" /><div class="skillsoverlay">CSS</div></div>
        <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/js.png" alt="Javascrpt" /><div class="skillsoverlay">Javascrpt</div></div>
        <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/sass.png" alt="SASS" /><div class="skillsoverlay">SASS</div></div>
        <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/jquery.png" alt="Jquery" /><div class="skillsoverlay">Jquery</div></div>
        <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/logo512.png" alt="React.js" /><div class="skillsoverlay">React.js</div></div>
        <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/postgre.png" alt="PostgreSQL" /><div class="skillsoverlay">PostgreSQL</div></div>
        <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/node2.png" alt="Node.js" /><div class="skillsoverlay">Node.js</div></div>
        <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/expressjs.png" alt="Express.js" /><div class="skillsoverlay">Express.js</div></div>
        <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/npm.png" alt="NPM" /><div class="skillsoverlay">NPM</div></div>
        <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/axios.png" alt="AXIOS" /><div class="skillsoverlay">AXIOS</div></div>
        <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/restapi.png" alt="RESTful API" /><div class="skillsoverlay">RESTful API</div></div>
        <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/c++.png" alt="C++" /><div class="skillsoverlay">C++</div></div>

      </section>
      <h1 className="tool"  style={{ textAlign: "center", fontSize: "70px" }}>
          Toolset Proficiency<br/>
        </h1>
      <section className="about_part3">
        <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/postman.png" alt="Postman" /><div class="skillsoverlay">Postman</div></div>
        <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/netlify.png" alt="Netlify" /><div class="skillsoverlay">Netlify</div></div>
        <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/vscode.png" alt="VScode" /><div class="skillsoverlay">VScode</div></div>
        <div class="image-container"><img className="about_part2_3flexitem" src="assets/technologies/windows.png" alt="Windows" /><div class="skillsoverlay">Windows</div></div></section>
    </section>
  );
}

export default About;
