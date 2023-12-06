import { skills } from './components/skills/skills';
import { educacion } from './components/education/education';
import { footerPage } from './components/footer/footer';
import { nav } from './components/nav/nav';
import { personalInf } from './components/personal-inf/personal-inf';
import { resumen } from './components/resumen/resumen';
import { rrss } from './components/rrss/rrss';
import './style.css'
import { experiences } from './components/experiences/experiences';
import { gitHub } from './components/gitHub/gitHub';
import { tools } from './components/tools/tools';

const header = document.createElement('header');
header.id = 'header';
document.body.appendChild(header);

const main = document.createElement('main');
main.id = 'main';
document.body.appendChild(main);

const footer = document.createElement('footer');
footer.id = 'footer';
document.body.appendChild(footer);

nav();
personalInf();
rrss();
resumen();
educacion();
skills();
gitHub();
experiences();
tools();
footerPage();