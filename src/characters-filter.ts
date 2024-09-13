//fx that uses the userinput, runs through a loop of all the names in the api/html and checks for matchs (.some())

//get user input fx
const obtenerValorCampo = (): string => {
  const elementoCampo = document.querySelector("#input");

  if (elementoCampo && elementoCampo instanceof HTMLInputElement) {
    return elementoCampo.value;
  } else {
    throw new Error("No value for input found");
  }
};

export const checkNames = (): void => {
  const userInput = obtenerValorCampo();
  const charactersContainer = document.querySelectorAll(".character-container");

  charactersContainer.forEach((characterElement) => {
    const nameElement = characterElement.querySelector(
      ".character-name"
    ) as HTMLElement;

    if (nameElement) {
      const characterName = nameElement.textContent || ""; //gets text content for name

      if (characterName.includes(userInput)) {
        (characterElement as HTMLElement).style.display = "";
        console.log("match");
      } else {
        (characterElement as HTMLElement).style.display = "none";
        console.log("no matches");
      }
    }

    //need to link this to the button
  });
};



// if (filterButton && filterButton instanceof HTMLButtonElement) {

// }
