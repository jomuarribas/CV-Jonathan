import { data } from '../../data'
import './skills.css'

export const skills = () => {
  const main = document.getElementById('main');
  const skillsSection = document.createElement('section');
  skillsSection.id = 'habilidades';
  main.appendChild(skillsSection);

  const skillsTitle = document.createElement('h3');
  skillsTitle.textContent = 'Habilidades:'
  skillsSection.appendChild(skillsTitle);

  for (const skill of data[4].Habilidades) {

    const skillTitle = document.createElement('h4')
    skillTitle.textContent = skill.key
    const skillDescription = document.createElement('p')
    skillDescription.textContent = skill.value

    skillsSection.appendChild(skillTitle)
    skillsSection.appendChild(skillDescription)

  }

}