import { data } from '../../data';
import './nav.css'

export const nav = () => {
  const header = document.getElementById('header');
  const nav = document.createElement('nav');
  header.appendChild(nav);

  const menuDiv = document.createElement('div');
  menuDiv.className = 'menuDiv';
  nav.appendChild(menuDiv);

  const resumen = document.createElement('a');
  resumen.setAttribute('href', '#resumen')
  resumen.classList.add('menu');
  const educacion = document.createElement('a');
  educacion.setAttribute('href', '#educacion')
  educacion.classList.add('menu');
  const habilidades = document.createElement('a');
  habilidades.setAttribute('href', '#habilidades')
  habilidades.classList.add('menu');
  const experiencias = document.createElement('a');
  experiencias.setAttribute('href', '#experiencias')
  experiencias.classList.add('menu');
  const herramientas = document.createElement('a');
  herramientas.setAttribute('href', '#herramientas')
  herramientas.classList.add('menu');

  resumen.textContent = 'RESUMEN'
  educacion.textContent = 'EDUCACION'
  habilidades.textContent = 'HABILIDADES'
  experiencias.textContent = 'EXPERIENCIAS'
  herramientas.textContent = 'HERRAMIENTAS'

  menuDiv.appendChild(resumen);
  menuDiv.appendChild(educacion);
  menuDiv.appendChild(habilidades);
  menuDiv.appendChild(experiencias);
  menuDiv.appendChild(herramientas);

  const tengoExperiencia = document.createElement('form');
  tengoExperiencia.classList.add('tengoExperiencia');
  const tengoExperienciaP = document.createElement('p');
  tengoExperienciaP.textContent = '¿Tengo experiencia...?'
  const tengoExperienciaInput = document.createElement('input');
  tengoExperienciaInput.type = 'text';
  tengoExperienciaInput.placeholder = 'sobre...';
  const tengoExperienciaButton = document.createElement('button');
  tengoExperienciaButton.textContent = 'Buscar';

  menuDiv.appendChild(tengoExperiencia);
  tengoExperiencia.appendChild(tengoExperienciaP);
  tengoExperiencia.appendChild(tengoExperienciaInput);
  tengoExperiencia.appendChild(tengoExperienciaButton);

  const menuH = document.createElement('span');
  menuH.className = 'material-symbols-outlined';
  menuH.textContent = 'menu'
  nav.appendChild(menuH);

  const result = document.createElement('p');
  result.className = 'result'
  tengoExperiencia.appendChild(result)

  tengoExperienciaButton.addEventListener('click', (e) => {
    e.preventDefault();
    result.innerHTML = '';
    const search = e.target.form[0].value

    const searching = (array, search) => {
      return array.some(function (objeto) {
        return Object.values(objeto).some(function (valor) {
          if (typeof valor === 'string' && search.length >= 3 && valor.toLowerCase().includes(search.toLowerCase())) {
            return true;
          } else if (Array.isArray(valor) || (typeof valor === 'object' && valor !== null)) {
            return searching([valor], search);
          }
          return false;
        });
      });
    }
    if (searching(data, search)) { result.innerHTML = "Si tengo experiencia."; result.classList.add("resultAnimation"); }
    else { result.innerHTML = "No se encuentra entre mis aptitudes."; result.classList.add("resultAnimation") }

  });

  menuH.addEventListener('click', (e) => {
    e.preventDefault();
    if (menuDiv.className === 'menuDiv') { menuDiv.classList.add('menuDiv2'); }
    else { menuDiv.classList.remove('menuDiv2') }

  });


};
