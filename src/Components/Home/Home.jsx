import React, { useEffect } from "react";
import "./home.css";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  useEffect(() => {
    let banner = document.querySelector(".banner");
    let canvas = document.querySelector(".dotsCanvas");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let ctx = canvas.getContext("2d");

    let dots = [];
    let colors = [
      "#DF1F2D",
      "#B11313",
      "#2B3784",
      "#447BBE",
      "#eee",
      "#545454",
      "#596d91",
    ];

    for (let index = 0; index < 50; index++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (canvas.width % 2)+ 4,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    drawDots();

    const handleMouseMove = (event) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();

      let rect = canvas.getBoundingClientRect();
      let mouse = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };

      dots.forEach((dot) => {
        let distance = Math.sqrt(
          Math.pow(mouse.x - dot.x, 2) + Math.pow(mouse.y - dot.y, 2)
        );
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const handleMouseOut = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
    };

    banner.addEventListener("mousemove", handleMouseMove);
    banner.addEventListener("mouseout", handleMouseOut);

    return () => {
      banner.removeEventListener("mousemove", handleMouseMove);
      banner.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const [text] = useTypewriter({
      words: ["Front End Development", "Game Development"],
      loop: {},
  });

  const resume = "/CV.pdf"

  return (
    <>
      <div className="banner" id="home">
        <div className="home">
          <div className="homeLeft">
            <div className="homeTexts">
              <h1>Hi there I'm Alper Ertugrul</h1>
              <h2>I'm into 
                <span className="intoText"> {text}</span>
                <Cursor/>
                </h2>
              
              
              <div className="downloadBtn">
                <DownloadRoundedIcon /> 
                <a href={resume} download="Resume">Download My CV</a>
              </div>
            </div>
          </div>

          <div className="homeRight">
            <div className="imgFrame">
              <img src="./ben2.png" alt="" className="me" />
            </div>
          </div>
        </div>
      </div>
      <canvas className="dotsCanvas"></canvas>
    </>
  );
};

export default Home;
