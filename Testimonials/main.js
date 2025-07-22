const persons = [
{
  name: "Raghavendhra@21",
  img: "static/img1",
  txt: "I really love to be here ! , Thank you",
},
{
  name: "Mike@009",
  img: "static/img1",
  txt: "Great luck to you as you are looking at my face right now , Thank you",
},
{
  name: "Shyam@091",
  img: "static/img2",
  txt: "I appreciate myself and love to be here as a Unique guy over you all ! , Thank you",
}];
const us= document.querySelector(".username");
const i = document.querySelector("img");
const t = document.querySelector(".info");

let iteration = 0;

changePage();

function changePage() {
  const { nme, imz, taxt } = persons[iteration];
  i.src = imz;
  t.innerText = taxt;
  us.innerText = nme;
  iteration++;
  if (iteration === persons.length) {
    iteration = 0;
  }
  setTimeout(() => {
    changePage();
  }, 5000);
  
}