const btn = document.getElementById("btncharacters");
const div = document.getElementById("characters");


btn.addEventListener('click', () => {
    console.log("api")
    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => renderCharacters(data.results));
 });

function renderCharacters(characters){
    characters.forEach(c => {
        div.innerHTML += `<img src="${c.image}">`;
    });
}