import { data } from '../../data';
import './nav.css'

export const nav = () => {
  const header = document.getElementById('header');
  const nav = document.createElement('nav');
  header.appendChild(nav);

  const resumen = document.createElement('a');
  resumen.setAttribute('href', '#resumen')
  const educacion = document.createElement('a');
  educacion.setAttribute('href', '#educacion')
  const habilidades = document.createElement('a');
  habilidades.setAttribute('href', '#habilidades')
  const experiencias = document.createElement('a');
  experiencias.setAttribute('href', '#experiencias')
  const herramientas = document.createElement('a');
  herramientas.setAttribute('href', '#herramientas')

  resumen.textContent = 'RESUMEN'
  educacion.textContent = 'EDUCACION'
  habilidades.textContent = 'HABILIDADES'
  experiencias.textContent = 'EXPERIENCIAS'
  herramientas.textContent = 'HERRAMIENTAS'

  nav.appendChild(resumen);
  nav.appendChild(educacion);
  nav.appendChild(habilidades);
  nav.appendChild(experiencias);
  nav.appendChild(herramientas);
};