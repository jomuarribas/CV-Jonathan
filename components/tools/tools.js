import { data } from '../../data';
import './tools.css'

export const tools = () => {
  const main = document.getElementById('main');
  const toolsSection = document.createElement('section');
  toolsSection.id = 'herramientas';
  main.appendChild(toolsSection);

  const toolsTitle = document.createElement('h3');
  toolsTitle.textContent = 'Herramientas de colaboración:'
  toolsSection.appendChild(toolsTitle);

  for (const tool of data[6].herramientasDeColaboracion) {

    const toolTitle = document.createElement('h4')
    toolTitle.textContent = tool.key
    const toolDescription = document.createElement('p')
    toolDescription.textContent = tool.value

    toolsSection.appendChild(toolTitle)
    toolsSection.appendChild(toolDescription)
  }
}