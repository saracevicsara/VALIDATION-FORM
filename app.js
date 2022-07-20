let inputs = document.querySelectorAll("input");
let errors = {
  ime_prezime: [],
  korisnicko_ime: [],
  email: [],
  lozinka: [],
  ponovi_lozinku: [],
};
inputs.forEach((element) => {
  element.addEventListener("change", (e) => {
    let currentInput = e.target;
    let inputValue = currentInput.value;
    let inputName = currentInput.getAttribute("name");
    if (inputValue.length > 4) {
      console.log("idealno");
    } else {
      errors[inputName] = ["polje mora imati najmanje 5 karaktera"];
    }
  });
});
const populateErrors = (errors) => {
  for (let key of Object.keys(errors)) {
    let input = document.querySelector(`input[name="${key}"]`);
    let parentElement = input.parentElement;
    let errorsElement = document.createElement("ul");
    parentElement.appendChild(errorsElement);

    errors[key].forEach((error) => {
      let li = document.createElement("li");
      li.innerHTML = error;
      errorsElement.appendChild(li);
    });
  }
};
