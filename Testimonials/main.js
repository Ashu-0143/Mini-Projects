const persons = [
{
  name: "Mark, patron",
  img: "static/img1.jpg",
  txt: "The library's online renewal system is so convenient. I can renew my books without having to visit the library.",
},
{
  name: "David, researcher",
  img: "static/img3.jpg",
  txt: "The library's digital resources have been a lifesaver for my research projects. Thank you!",
},
{
  name: "Sarah, librarian",
  img: "static/img4.jpg",
  txt: "I've never had any issues with the library's website. It's always up and running smoothly",
},
{
  name: "Emily, student",
  img: "static/img2.jpg",
  txt: "The online catalog is so easy to use! I can find books and reserve them in minutes."
}
];
const title= document.querySelector(".username");
const face = document.querySelector("img");
const info = document.querySelector("p");

let iteration = 0;

changePage();

function changePage() {
  const {nme=persons[iteration].name,
        taxt=persons[iteration].txt,
        imz=persons[iteration].img}
        = persons[iteration];
  
  face.src = imz;
  info.innerText = taxt;
  title.innerText = nme;
  iteration++;
  if (iteration === persons.length) {
    iteration = 0;
  }
  setTimeout(() => {
    changePage();
  }, 5000);
  
}