import ptkuva1 from '../media/personaltrainerkuva2.png';
import todolistgif from '../media/todoGif2.gif';
import portfoliokuva from '../media/portfoliokuva.png'

export default {

    chip: [
        {   
            id: 1,
            color: '#f50',
            label: 'Java',
        },
        {
            id: 2,
            color: '#c4b221',
            label: 'Javascript',
        },
        {
            id: 3,
            color: '#F05032',
            label: 'Git',
        },
        {
            id: 4,
            color: '#61DAFB',
            label: 'React',
        },
        {
            id: 5,
            color: '#6DB33F',
            label: 'Spring Boot',
        },
        {
            id: 6,
            color: '#336791',
            label: 'PostgreSQL',
        },
        {
            id: 7,
            color: '#3E4848',
            label: 'HTML | CSS'
        }
    ],

    link: [
        {   
            id: 1,
            label: 'Home',  
            to: 'header'
        },
        {
            id: 2,
            label: 'About',  
            to: 'about-page'
        },
        {
            id: 3,
            label: 'Skills',  
            to: 'skills-page'
        },
        {
            id: 4,
            label: 'Projects',  
            to: 'projects-page'
        },
    ],

    project: [

        {
            index: 1,
            title: 'To-Do List',
            label: 'Fullstack To-Do List application. Java backend, REST API implemented with DAO classes using JDBC interface. Application user interface made with Reactjs and component libaries (Material-ui, antd)',
            imageUrl: todolistgif,
            time: 1500,
            github: 'https://github.com/Johamatt/TodoList',
            livedemo: '#',
        },
        {   
            index:2,
            title: 'Personal Trainer',
            label: 'Personal Trainer front-end app for customer database. Database contains info about customers and their trainings. RESTful API, React.js and component libaries.',
            imageUrl: ptkuva1,
            time: 1500,
            github: 'https://github.com/Johamatt/PersonalTrainer',
            livedemo: 'https://heroku-personaltrainer.herokuapp.com/',
        },
        {   
            index:3,
            title: 'Personal portfolio, in progress (This website)',
            label: 'Responsive Personal portfolio/CV front-end app. React.js, Material-UI and other component libaries. ',
            imageUrl: portfoliokuva,
            time: 1500,
            github: 'https://github.com/Johamatt/JohamattCv',
            livedemo: '#',
        },
    ]
}