import { data } from '../../data';
import './education.css'

export const educacion = () => {
  const main = document.getElementById('main');
  const educacionSection = document.createElement('section');
  educacionSection.id = 'educacion';
  main.appendChild(educacionSection);

  const educacionH3 = document.createElement('h3');
  educacionH3.textContent = 'Educación:';

  const educacionDiv = document.createElement('div');
  educacionDiv.innerHTML = `
      <p>ESCUELA: ${data[3].educacion[0].institucion}</p>
      <p>PROGRAMA: ${data[3].educacion[1].programa}</p>
      <p>TÍTULO: ${data[3].educacion[2].titulo}</p>
`
  educacionSection.appendChild(educacionH3);
  educacionSection.appendChild(educacionDiv);

  const cursosButton = document.createElement('button');
  cursosButton.textContent = 'Cursos destacados';
  educacionSection.appendChild(cursosButton);

  const cursosDiv = document.createElement('div');
  cursosDiv.className = 'cursosDiv';
  educacionSection.appendChild(cursosDiv);

  const cursosDestacados = document.createElement('div');
  cursosDestacados.innerHTML = `
      <p>${data[3].educacion[3].cursosDestacados[0]}</p>
      <p>${data[3].educacion[3].cursosDestacados[1]}</p>
  `;

  cursosDiv.appendChild(cursosDestacados);

  cursosButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (cursosDiv.style.display === 'none' || cursosDiv.style.display === '') {
      cursosDiv.style.display = 'flex'
    }
    else { cursosDiv.style.display = 'none' }
  });
}