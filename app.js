const originalText = document.getElementsByName("originalText")[0];
const encryptedPlace = document.getElementsByClassName("encrypted")[0];
console.log(originalText.value);
console.log(encryptedPlace.value);

const encryptButton = document.getElementById("encrypt");
const decryptButton = document.getElementById("decrypt");

console.log(encryptButton.textContent, decryptButton.textContent);

const encrypting = () => {
  let encryptedText = originalText.value.toLowerCase().split("");
  encryptedText = encryptedText.map((x) => {
    switch (x) {
      case "a":
        return (x = "ai");
      case "e":
        return (x = "enter");
      case "i":
        return (x = "imes");
      case "o":
        return (x = "ober");
      case "u":
        return (x = "ufat");
      default:
        return x;
    }
  });

  console.log(encryptedText);
  encryptedPlace.innerHTML = encryptedText.join("");
  originalText.value = "";
};

encryptButton.addEventListener("click", encrypting);
