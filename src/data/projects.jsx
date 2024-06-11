// Import images
import Quizzical from "../images/Quizzical.png";
import Jobifinder from "../images/Jobifinder.png";
import VintageMart from "../images/VintageMartHome.png";
import SayThisPrayer from "../images/SayThisPrayer.png";
import Incontent from "../images/IncontentAgencyImage.png";

export const projectsData = [
  {
    id: "quizzical-app",
    title: "Quizzical",
    category: "Web Application",
    img: Quizzical,
    ProjectHeader: {
      title: "Quizzical App - From Context",
      publishDate: "May 26, 2024",
      tags: "UI / Frontend",
    },
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://quizziq.netlify.app/",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "I just finished learning how to use the useEffect and other rendering hooks on React, and I decided to build something and solidify my knowledge. What came to my mind was something I could build and maybe find a way to monetize down the road by creating an interactive quiz game that people would love to play. Till then, I created just a basic web version. To achieve this within 7 days, I coded for over 12 hours a day.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["HTML", "CSS", "JavaScript", "React"],
        },
      ],
      Challenges: `
<p>I faced a lot of challenges while building this since I was new to the following concepts:
        <br><ul>
          <li>useEffects</li>
          <li>Context API</li>
          <li>Params</li>
          <li>useNavigate</li>
          <li>useState</li>
        </ul><br>
    I had done some basic applications like a Todo List and a weather app, where you just fetch an API (in the weather app) and render it with little or no manipulation. But this quiz app took it to a higher level when it came to manipulating APIs. 
        I intended for users to select a Quiz Category, which would be saved in state when the user navigates to the next page. It was a complete hassle, as my knowledge was limited. I had to do deep research to figure out how to handle that.<br>
        <ul>
         <li><h3><strong>Show final answer challenge:</strong></h3> <br>Since I wanted players to see if the answer they picked was the right one or wrong one, it was difficult with the customization and logic. I got inspiration from YouTube and Stack Overflow for a solution.</li>
          <li><h3><strong>Try again Logic:</strong></h3><br> I wanted players to be able to try again and get new questions from the same category. I struggled to get the logic until I tinkered with the useEffect function stored in my Context API.</li>
        </ul>
        Aside from these, it was a great learning experience and a sign of something great coming.</p>
      `,
    },
  },
  {
    id: "vintage-mart",
    title: "VintageMart",
    category: "Web Application",
    img: VintageMart,
    ProjectHeader: {
      title: "Vintage Mart Documentation",
      publishDate: "May June 10, 2024",
      tags: "UI / Frontend",
    },
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "My Portfolio Project",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://vintagemart.netlify.app/",
        },
        {
          id: 4,
          title: "Phone",
          details: "+34 670 829 014",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "I progressed to learning about react-routers and other higher concepts of react. This project should expose me to protected routes, shared UI components, and protected routes concept",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["HTML", "CSS", "JavaScript", "React"],
        },
      ],
      Challenges: `<p>No much challenges, as I already have a good graps of the many react concepts. I also used this project as an opportunity to learn Redux Toolkit, and I saw the reason it is used over the context API.</p>`,
    },
  },
  {
    id: "jobifinder",
    title: "JobiFinder",
    category: "Web Application",
    img: Jobifinder,
    ProjectHeader: {
      title: "JobiFinder Documentation",
      publishDate: "May June 25, 2024",
      tags: "UI / Frontend",
    },
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "My JobiFinder Project",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://jobifinder.netlify.app/",
        },
        {
          id: 4,
          title: "Phone",
          details: "+34 670 829 014",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "The aim is to incorporate every learning done without watching any tutorial. Let me see how far I can get.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["HTML", "CSS", "JavaScript", "React"],
        },
      ],
      Challenges: `
       <p>Everything was going smoothly till I decided to add a dummy backend like Firebase and Firestore. Then reality hit me that it was more complex than I thought.

I think I read the documentation like 10x and opened roughly about 35 tabs on my computer, while searching for how to write permission for firebase that allows users to read and write.

Then again, I wanted a feature where employers can post jobs, then I needed another firebase configuration. I don’t know if this is within my role as a frontend, but it wasn’t fun.

Just when I completed the project and hosted on Netlify, I realized that it was messed up for dark-screen. As at the time of writing this, the dark-screen mode is still not fixed.

I will continue working on it.</p>`,
    },
  },
  {
    id: "incontentagency",
    title: "Incontent Agency Website",
    category: "Web Application",
    img: Incontent,
    ProjectHeader: {
      title: "Incontent Website Documentation",
      publishDate: "June 10, 2024",
      tags: "UI / Frontend",
    },
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Incontent Agency Website",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design and Web Design",
        },
        {
          id: 3,
          title: "Website",
          details: "https://incontentagency.netlify.app/",
        },
        {
          id: 4,
          title: "Phone",
          details: "+34 670 829 014",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: "A simple web design prototype for an agency business",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["HTML", "CSS", "Javascript"],
        },
      ],
      Challenges: `
<p>No real challenge. With my knowledge of web design, html, CSS, and a bit of Javascript, I made this fully functional web design project that any agency can use. It has very little interactivity, which is why I didn't use any frontend framework.</p>`,
    },
  },
  {
    id: "saythisprayer",
    title: "SayThisPrayer",
    category: "WordPress Application",
    img: SayThisPrayer,
    ProjectHeader: {
      title: "SayThisPrayer Documentation",
      publishDate: "Feb 25, 2023",
      tags: "UI / Frontend",
    },
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "SayThisPrayer Project",
        },
        {
          id: 2,
          title: "Services",
          details: "Wordpress & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://saythisprayer.org",
        },
        {
          id: 4,
          title: "Phone",
          details: "+34 670 829 014",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "I just wanted to start a platform where I shared some beliefs and also get paid for it.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["HTML", "CSS", "wordpress"],
        },
      ],
      Challenges: `
<p>No real challenge. With my knowledge of web design, html, and CSS, I customized the website after installing WordPress on it. The website currently earns around $300 per month, so it seems like a good investment.</p>`,
    },
  },
];
