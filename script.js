const newWord = document.getElementById("newWord");
const searchWord = document.getElementById("searchWord");
const resultSearch = document.getElementById("resultSearch");
const searchBtn = document.getElementById("searchBtn");

const dictionary = [];

function timeOutMessage(time) {
  setTimeout(() => {
    resultSearch.textContent = "";
    searchBtn.disabled = false;
    searchWord.value = "";
  }, time);
}

function save() {
  if (newWord.value !== "") {
    dictionary.push(newWord.value);
    newWord.value = "";
  }
}

function search() {
  timeOutMessage(3000);
  searchBtn.disabled = true;

  for (let i = 0; i < dictionary.length; ++i) {
    if (searchWord.value === dictionary[i]) {
      resultSearch.textContent = "The dictionary contains the word!";
      return;
    }
  }
  resultSearch.textContent = "The dictionary does not contain the word!";
}
