import quoteApi from "./api.js";
async function quoteGenerate() {
  const res = await fetch(quoteApi);
  const data = await res.json();
  const randomIndex = Math.floor(Math.random() * data.length); // Get a random index
  const randomQuote = data[randomIndex];
  newQuote(randomQuote);
}

const textWrap = document.getElementsByClassName("text-wrap")[0];
const quoteText = document.getElementsByClassName("quote-text")[0];
const quoteOwner = document.getElementsByClassName("quote-owner")[0];

function newQuote(quoteData) {
  quoteText.textContent = "";
  quoteOwner.textContent = "";

  quoteOwner.textContent = quoteData.author;
  quoteText.textContent = quoteData.text;

  textWrap.appendChild(quoteText);
  textWrap.appendChild(quoteOwner);
}
quoteGenerate();
export default quoteGenerate;
