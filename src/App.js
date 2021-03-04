import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Landing from './pages/Landing'
import Navbar from './components/Navbar';
import About from './pages/About';
import Education from './pages/Skills';
import Projects from './pages/Projects';
import Footer from './components/Footer';


const useStyles = makeStyles((theme) => ({

}));

export default function App() {
  const classes = useStyles();
  return (
    
    <div className={classes.root}>
      <Navbar/> 
      <Landing/>
      <About/>
      <Education/>
      <Projects/>    
      <Footer/>
    </div>
  )
}