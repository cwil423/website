
// Code for playground
const backgrounds = [
  "url(https://wallpaperboat.com/wp-content/uploads/2019/06/minimalist-desktop-2.jpg)",
  "url(https://wallpaperaccess.com/full/99836.jpg)",
  "url(http://cdn.wallpapername.com/1920x1080/20180625/5b31532c0cd03.jpg)",
  "url(https://i.pinimg.com/originals/3f/a0/40/3fa040b186dbfc221b96b62c7083c03b.jpg)",
  "url(http://cdn.miscellaneoushi.com/1920x1080/20180325/5ab7be38b3f0c.jpg)",
  "url(https://wallpaperaccess.com/full/1261630.jpg)",

]

const backgroundButton = document.querySelector('.bgButton');
const background = document.querySelector('body');

backgroundButton.addEventListener('click', changeBackground);

function changeBackground () {
  let random = Math.floor(Math.random()*backgrounds.length)
  background.style.backgroundImage = backgrounds[random]
}

