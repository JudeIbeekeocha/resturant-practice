import "./styles/styles.css";
import "./styles/nav.css";
import { renderMenuPage } from "./menu.js";
function renderHomePage(){
    const welcomeText = document.createElement('h3')
    
    welcomeText.innerHTML = '<h3 class="welcome-text">Welcome to <span id="agr">AGR</span></h3>'
    document.querySelector('#content').appendChild(welcomeText)
}

renderHomePage()

document.querySelector('#menu').addEventListener('click', ()=>{
    document.querySelector('#content').innerHTML=''
    renderMenuPage()

})
document.querySelector('#home').addEventListener('click', ()=>{
    document.querySelector('#content').innerHTML=''
    renderHomePage()

})
