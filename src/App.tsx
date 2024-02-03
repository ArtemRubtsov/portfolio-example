import './App.css';
import { Header } from './layout/header/Header';
import styled from 'styled-components';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skillls';
import { Projects } from './layout/sections/projects/Projects';
import { Contact } from './layout/sections/contact/Contact';
import contactPhoto from '../src/assets/img/contact-photo.png'
import bgFooter from '../src/assets/img/bg-footer-3.png'
import { Footer } from './layout/sections/footer/Footer';


function App() {
    return (
        <div className="App">
            <Header />
            <Main/>
            <Skills/>
            <Projects/>
            <Contact tittle={"Contact me"} src={contactPhoto}/>
            <Footer  img={bgFooter}/>
        </div>
    );
}

export default App;

