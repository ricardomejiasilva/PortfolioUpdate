import React from "react";
import "./Content.css";
import Wingai from "../../assets/Wingai.png";
import Adobe from "../../assets/Adobe.png";
import Apple from "../../assets/Apple.png";
import Chipotle from "../../assets/Chipo.png";
import Clark from "../../assets/Clark.png";
import Comfy from "../../assets/Comfy.png";
import NewRoots from "../../assets/NewRoots.png";
import Webstaurant from "../../assets/Webstaurant.png";

const Contents = ({ id }) => {
  const projects = [
    {
      id: "adobe",
      image: Adobe,
      title: "Adobe",
      skill: "HTML Email",
      description:
        "Coded a responsive Adobe email by using HTML and inline CSS",
      link: "https://portfolio1.vercel.app/projects/adobe.html",
      stack: "HTML, CSS",
    },
    {
      id: "apple",
      image: Apple,
      title: "Apple",
      skill: "HTML Email",
      description: "Coded a responsive email by using HTML and inline CSS",
      link: "https://portfolio1.vercel.app/projects/apple.html",
      stack: "HTML, CSS",
    },
    {
      id: "chipotle",
      image: Chipotle,
      title: "Chipotle",
      skill: "HTML Email",
      description:
        "Coded a responsive Chipotle email by using HTML and inline CSS",
      link: "https://portfolio1.vercel.app/projects/chipotle.html",
      stack: "HTML, CSS",
    },
    {
      id: "clark",
      image: Clark,
      title: "Clark",
      skill: "React App",
      description: "Worked on the frontend part of this company's website.",
      link: "https://www.clarkassociatesinc.biz/",
      stack: "HTML, CSS, JavaScript, React, TypeScript",
    },
    {
      id: "comfy",
      image: Comfy,
      title: "Comfy",
      skill: "Reack App",
      description:
        "This app lets you filter through store products, add/remove items from cart, checkout with a test credit card and logs you in with a created account or through Gmail",
      link: "https://comfy-store-tpa.netlify.app/",
      stack: "HTML, CSS, JavaScript, React",
    },
    {
      id: "new-roots",
      image: NewRoots,
      title: "NewRoots",
      skill: "React App",
      description:
        "Coded this site for one of our stakeholders private labeled products. Highlights the product and its benefits.",
      link: "https://new-roots.vercel.app/",
      stack: "HTML, CSS, JavaScript, React, TypeScript",
    },
    {
      id: "wingai",
      image: Wingai,
      title: "WingAI",
      skill: "React Native App",
      description:
        "Founded and developed WingAI, a mobile app that gives you playful openers for your dating app matches. It scans the profile and image of your match and generates a personalized opener for you to send. The app has made headlines in news publications and has been gaining traction in the dating app community.",
      link: "https://apps.apple.com/us/app/wingai/id6448704223",
      stack: "React Native",
    },
    {
      id: "webstaurantstore",
      image: Webstaurant,
      title: "WebstaurantStore",
      skill: "React Native App",
      description:
        "Developed part of the WebstaurantStore app, a mobile app that allows you to shop for restaurant supplies and equipment from your phone.",
      link: "https://apps.apple.com/us/app/webstaurantstore/id1581450224",
      stack: "React Native, TypeScript",
    },
  ];

  const project = projects.find((project) => project.id === id);

  return (
    <div className="projectContentContainer">
      <h3>{project.title}</h3>
      <p className="mx-auto projectCategory">{project.skill}</p>
      <div className="imageContainer">
        <img src={project.image} alt={project.title} />
      </div>
      <p>{project.description}</p>
      <div className="buttonContainer">
        <a href={project.link} target="_blank">
          <button className="btn btn-1">Launch Project</button>
        </a>
        <a href="https://github.com/ricardomejiasilva" target="_blank">
          <button className="btn btn-2">See Code</button>
        </a>
      </div>
    </div>
  );
};

export default Contents;
