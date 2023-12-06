import { data } from '../../data';
import './gitHub.css'

export const gitHub = () => {
  const main = document.getElementById('main');
  const gitHubSection = document.createElement('section');
  gitHubSection.id = 'gitHub';
  gitHubSection.style.height = '60px';
  main.appendChild(gitHubSection);

  const gitHubTitle = document.createElement('h2');
  gitHubTitle.textContent = 'MIS PROYECTOS';
  gitHubSection.appendChild(gitHubTitle);

  const gitHubIconDiv = document.createElement('div');
  gitHubIconDiv.classList.add('gitHubIcon');
  gitHubSection.appendChild(gitHubIconDiv);
  const gitHubIcon = document.createElement('img');
  gitHubIcon.src = '/assets/github.png';
  const gitHubName = document.createElement('h2');
  gitHubName.textContent = 'GitHub';

  gitHubTitle.addEventListener('click', (e) => {
    e.preventDefault();
    gitHubSection.style.height = '200px';
    gitHubTitle.style.pointerEvents = 'none';
    setTimeout(() => {
      gitHubIconDiv.appendChild(gitHubName);
      gitHubIconDiv.appendChild(gitHubIcon);
    }, 900);
  });

  gitHubIcon.addEventListener('click', (e) => {
    e.preventDefault();
    const url = data[1].redesSociales[4].gitHub;
    window.open(url, '_blank');
  });
};