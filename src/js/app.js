import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
 

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
document.querySelector('body').addEventListener('click', () => {
  for(let i = 0; i < 5; i++){
    let createArticle = document.createElement('article');
    createArticle.className = 'message';
    createArticle.textContent = 'asd';
    document.querySelector('body').appendChild(createArticle);
  }
})
