
// TextAreas
const encryptText = document.querySelector(".user-text");
const copyText = document.querySelector(".inputCopy");

// Result Button
const textFound = document.querySelector(".text-found");
const notFound = document.querySelector(".not-found");


// reemplaza los caracteres acentuados o con diacríticos en el texto ingresado en el campo encryptText por sus equivalentes sin diacríticos, y luego convierte todo el texto a minúsculas

let message;

document.addEventListener("keyup", () => {
  let de = "ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç´",
    a = "AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc",
    re = new RegExp("[" + de + "]", "ug");

  encryptText.value = encryptText.value.replace(re, (match) =>
    a.charAt(de.indexOf(match))
  );

  encryptText.value = encryptText.value.toLowerCase();
});

function encrypt() {
  if (encryptText.value) {
    message = encryptText.value
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("u", "ufat")
      .replaceAll("o", "ober");

    copyText.value = message;//El texto encriptado se copia al campo de texto
    encryptText.value = "";//Se vacía el campoencryptText
    textFound.classList.remove("display-none");//muestra o oculta mensajes en la interfaz de usuario dependiendo de si se ingresó texto o no
    notFound.classList.add("display-none");
  } else {
    textFound.classList.add("display-none");
    notFound.classList.remove("display-none");
  }
}

function decrypt() {
  if (encryptText.value) {
    message = encryptText.value
      .replaceAll("ai", "a")
      .replaceAll("imes", "i")
      .replaceAll("enter", "e")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");

    copyText.value = message;
    encryptText.value = "";
    textFound.classList.remove("display-none");
    notFound.classList.add("display-none");
  } else {
    textFound.classList.add("display-none");
    notFound.classList.remove("display-none");
  }
}

function copy() {
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}
