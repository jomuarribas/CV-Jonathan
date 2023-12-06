import { data } from '../../data'
import './resumen.css'

export const resumen = () => {
  const main = document.getElementById('main');
  const resumenSection = document.createElement('section');
  resumenSection.id = 'resumen';
  main.appendChild(resumenSection);

  const resumenH3 = document.createElement('h3');
  resumenH3.textContent = 'Acerca de mi:';
  const resumenP = document.createElement('p');
  resumenP.textContent = data[2].resumen[0].descripcion;

  resumenSection.appendChild(resumenH3);
  resumenSection.appendChild(resumenP);

}