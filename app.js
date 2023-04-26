const originalText = document.getElementsByName("originalText")[0];
const encryptedPlace = document.getElementsByClassName("encrypted")[0];
// console.log(originalText.value);
// console.log(encryptedPlace.value);

const encryptButton = document.getElementById("encrypt");
const decryptButton = document.getElementById("decrypt");

// console.log(encryptButton.textContent, decryptButton.textContent);

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

  // console.log(encryptedText);
  if (encryptedText.length != 0) {
    let result = document.createElement("div");
    result.id = "result";

    result.innerHTML = encryptedText.join("");
    console.log(result.textContent);
    encryptedPlace.appendChild(result);
    originalText.value = "";

    let copyButton = document.createElement("button");
    copyButton.id = "copy";
    copyButton.innerText = "Copiar";
    copyButton.onclick = function () {
      navigator.clipboard.writeText(result.textContent);
    };
    encryptedPlace.appendChild(copyButton);
  }
};

const decrypting = () => {
  let decryptedText = originalText.value
    .toLowerCase()
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  // console.log(decryptedText);
  if (decryptedText.length != 0) {
    encryptedPlace.innerHTML = decryptedText;
    originalText.value = "";
  }
};

encryptButton.addEventListener("click", encrypting);

decryptButton.addEventListener("click", decrypting);
