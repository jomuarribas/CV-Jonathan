import { data } from '../../data'
import './experiences.css'

export const experiences = () => {
  const main = document.getElementById('main');
  const experiencesSection = document.createElement('section');
  experiencesSection.id = 'experiencias';
  main.appendChild(experiencesSection);

  const experiencesTitle = document.createElement('h3');
  experiencesTitle.textContent = 'Experiencias clave:'
  experiencesSection.appendChild(experiencesTitle);

  for (const experience of data[5].experienciasClave) {
    console.log(experience.key);

    const experienceTitle = document.createElement('h4')
    experienceTitle.textContent = experience.key
    const experienceDescription = document.createElement('p')
    experienceDescription.textContent = experience.value

    experiencesSection.appendChild(experienceTitle)
    experiencesSection.appendChild(experienceDescription)
  }
}