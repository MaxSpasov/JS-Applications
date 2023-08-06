import { createPost, showHome } from "./home.js";

const homeAnchorElement = document.querySelector('a');
homeAnchorElement.addEventListener('click', showHome)
const buttonsElements = document.querySelector('button');
const cancelButtonElement = buttonsElements[0];
const createPostButtonElement = buttonsElements[1];
console.log(createPostButtonElement);
createPostButtonElement.addEventListener('click', createPost);