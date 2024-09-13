import { checkNames } from "./characters-filter";
import { obtainCharacters } from "./characters.api";
import { Character } from "./characters.model";

const createImageElement = (
  name: string,
  imageUrl: string
): HTMLImageElement => {
  const image = document.createElement("img");
  image.src = `http://localhost:3000/${imageUrl}`;
  image.alt = name;
  return image;
};

// const createPElement = (text: string): HTMLParagraphElement => {
//   const paragraph = document.createElement("p");
//   paragraph.textContent = text;
//   return paragraph;
// };

const createLabelledPElement = (label: string, text: string): HTMLParagraphElement => {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `<strong>${label}:</strong> ${text}`;
  return paragraph;
};


const createCharacterContent = (character: Character): HTMLDivElement => {
  const characterElement = document.createElement("div");
  characterElement.classList.add("character-container");
  const containerPElement = document.createElement("div");
  containerPElement.classList.add('p-elements-container')

  const image = createImageElement(character.nombre, character.imagen);
  characterElement.appendChild(image);

  

  const name = createLabelledPElement('Nombre', character.nombre);
  name.classList.add('character-name');
  containerPElement.appendChild(name);


  //specialty
  const speciality = createLabelledPElement('Especialidad', character.especialidad);
  containerPElement.appendChild(speciality);

  const skillsElement = createLabelledPElement('Habilidades', character.habilidades.join(', '));
  containerPElement.appendChild(skillsElement);

  characterElement.appendChild(containerPElement)

  console.log('character content created')
  return characterElement;
};

const showCharacters = async (): Promise<void> => {
  const characters = await obtainCharacters();
  const list = document.querySelector("#grupo-personajes");
  console.log(characters);

  if (list && list instanceof HTMLDivElement) {
    characters.forEach((character) => {
      const characterContainer = createCharacterContent(character);
      list.appendChild(characterContainer);
      console.log('character content appended to Document')
    });
  } else {
    throw new Error("List HTML element not found");
  }
};

const filterButton = document.querySelector("#filter-button");
if (filterButton && filterButton instanceof HTMLButtonElement) {
  filterButton.addEventListener("click", () => checkNames());
  console.log("filter button clicked");
}

document.addEventListener("DOMContentLoaded", showCharacters);

