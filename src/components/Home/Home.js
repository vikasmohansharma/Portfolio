import React, { useState, useEffect, useMemo } from "react";
import "./Home.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

function Home() {
  const phrases = useMemo(
    () => [
      "Web Developer    ",
      "Frontend Developer",
      "Full Stack Developer",
      "PERN stack developer",
    ],
    []
  ); //
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    const typingSpeed = 300;

    const typingInterval = setInterval(() => {
      if (forward) {
        if (charIndex < phrases[phraseIndex].length) {
          setText((prevText) => prevText + phrases[phraseIndex][charIndex]);
          setCharIndex((prevCharIndex) => prevCharIndex + 1);
        } else {
          setForward(false);
        }
      } else {
        if (text !== "") {
          setText((prevText) => prevText.slice(0, -1));
        } else {
          setForward(true);
          setCharIndex(0);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text, charIndex, phraseIndex, forward, phrases]);

  return (
    <>
      <div className="home">
        <section className="home_section1">
          <div className="part1">
            <h1>Hi Folks</h1>
            <h1>
              I'm{" "}
              <font style={{ color: "orange", fontFamily: "Oswald" }}>
                VIKAS SHARMA
              </font>
            </h1>
            <h1 className="designations">{text}|</h1>
          </div>
          <div className="part2">
            <img src="coder.png" alt="Coder" />
          </div>
        </section>

        <section className="home_section2">
          <h1 style={{ fontSize: "40px" }}>Allow me to introduce myself.</h1>
          <h4>
            I've developed a deep <span class="passion">passion</span> for
            programming, and I've made significant strides in my learning
            journey, though I still have much to explore. My primary focus lies
            in <span class="innovating">innovating</span> within the realm of
            web technologies and crafting new products. I channel my enthusiasm
            into building with Node.js, alongside leveraging modern JavaScript
            libraries and frameworks such as React.js. Whenever the opportunity
            arises, I enthusiastically apply my skills to develop{" "}
            <span class="cutting-edge">cutting-edge </span>
            products that resonate with users.
          </h4>
        </section>

        <section className="home_section3">
          <h1 style={{ fontSize: "40px" }}>Wondering how to find me? </h1>
          <h4>👇 Catch me here </h4>
          <div className="icons">
            <button
              onClick={() =>
                window.open("https://github.com/vikasmohansharma", "_blank")
              }
            >
              <GitHubIcon style={{ color: "red" }} />
            </button>
            <button
              onClick={() =>
                window.open("https://twitter.com/vikasaryavart", "_blank")
              }
            >
              <XIcon style={{ color: "red" }} />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/vikas-sharma-b86968286/",
                  "_blank"
                )
              }
            >
              <LinkedInIcon style={{ color: "red" }} />
            </button>
            <button onClick="">
              <InstagramIcon style={{ color: "red" }} />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
