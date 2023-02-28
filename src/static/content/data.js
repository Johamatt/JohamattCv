import ptkuva1 from "../media/personaltrainerGif1.gif";
import todolistgif from "../media/todoGif2.gif";
import portfoliokuva from "../media/portfoliokuva.png";
import acebookkuva from "../media/acebook.png";

import eventApp from "../media/EventApp.gif";

export default {
  chip: [
    {
      id: 2,
      color: "#c4b221",
      label: "Javascript",
    },
    {
      id: 1,
      color: "#f50",
      label: "Java",
    },
    {
      id: 4,
      color: "#61DAFB",
      label: "React",
    },
    {
      id: 5,
      color: "#6DB33F",
      label: "Spring Boot",
    },
    {
      id: 6,
      color: "#336791",
      label: "SQL",
    },
    {
      id: 7,
      color: "#3E4848",
      label: "HTML | CSS",
    },
    {
      id: 8,
      color: "#57c4e1",
      label: "React Native",
    },

    {
      id: 9,
      color: "#9a009a",
      label: "Redux",
    },
  ],

  link: [
    {
      id: 1,
      label: "Home",
      to: "header",
    },
    {
      id: 2,
      label: "About",
      to: "about-page",
    },
    {
      id: 3,
      label: "Skills",
      to: "skills-page",
    },
    {
      id: 4,
      label: "Projects",
      to: "projects-page",
    },
  ],

  project: [
    {
      index: 5,
      title: "Event App",
      label:
        "An app for finding nearby events using Expo and Redux. It was initialized with AWS Amplify. Also contains custom cloud functions, IAM policies, and roles. (In progress)",
      imageUrl: eventApp,
      time: 1500,
      github: "https://github.com/Johamatt/EventMap",
      livedemo: "#",
    },
    {
      index: 1,
      title: "To-Do List",
      label:
        "Fullstack To-Do List application. Java backend, REST API implemented with DAO classes using JDBC interface. Application user interface made with Reactjs and component libaries (Material-ui, antd)",
      imageUrl: todolistgif,
      time: 1500,
      github: "https://github.com/Johamatt/TodoList",
      livedemo: "#",
    },
    {
      index: 2,
      title: "Personal Trainer",
      label:
        "Personal Trainer front-end app for customer database. Database contains info about customers and their trainings. RESTful API, React.js and component libaries.",
      imageUrl: ptkuva1,
      time: 1500,
      github: "https://github.com/Johamatt/PersonalTrainer",
      livedemo: "https://heroku-personaltrainer.herokuapp.com/",
    },
    {
      index: 3,
      title: "Acebook",
      label:
        "Social media app. Registered users can add profile picture, post comments on wall of user, send friend requests. Java Spring Boot, thymeleaf -stack. Test users (username/password): user/user, user1/user, admin/admin",
      imageUrl: acebookkuva,
      time: 1500,
      github: "https://github.com/Johamatt/Acebook",
      livedemo: "https://acebook-jm.herokuapp.com/home",
    },
    {
      index: 4,
      title: "Personal portfolio",
      label:
        "Responsive Personal portfolio/CV front-end app. React.js, Material-UI and other component libaries. ",
      imageUrl: portfoliokuva,
      time: 1500,
      github: "https://github.com/Johamatt/JohamattCv",
      livedemo: "#",
    },
  ],
};
