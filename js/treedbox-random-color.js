/*! Treedbox Random Color 2.0 https://github.com/treedbox/treedbox-random-color */
//color palettes
const materialDark = [
  '#D32F2F','#C2185B','#7B1FA2','#512DA8','#303F9F',
  '#1976D2','#0288D1','#0097A7','#00796B','#388E3C',
  '#689F38','#AFB42B','#FBC02D','#FFA000','#F57C00',
  '#E64A19','#5D4037','#616161','#455A64'
];
const material = [
  '#009688','#00BCD4','#03A9F4','#2196F3','#3F51B5',
  '#4CAF50','#607D8B','#673AB7','#795548','#8BC34A',
  '#9C27B0','#9E9E9E','#CDDC39','#E91E63','#F44336',
  '#FF5722','#FF9800','#FFC107','#FFEB3B'
];
const materialLight = [
  '#FFCDD2','#F8BBD0','#E1BEE7','#D1C4E9','#C5CAE9',
  '#BBDEFB','#B3E5FC','#B2EBF2','#B2DFDB','#C8E6C9',
  '#DCEDC8','#F0F4C3','#FFF9C4','#FFECB3','#FFE0B2',
  '#FFCCBC','#D7CCC8','#F5F5F5','#CFD8DC'
];
//a custom palette,you can make your owm:
const googleColor = [
  '#4285F4','#34A853','#FBBC05','#EA4335'
];

//merge of some palettes in a single array
const mergedPaletes = [
  ...material,...materialDark,...materialLight
];
//join all palettes but mantain the array structure
const palettes = [
  materialDark,material,materialLight,mergedPaletes,googleColor
];

//get all elements with specific classes
//to change text color:
let randomcolor = document.querySelectorAll('.randomcolor');
//to change background color:
let randomcolorbg = document.querySelectorAll('.randomcolorbg');
//to change fill color:
let randomcolorfill = document.querySelectorAll('.randomcolorfill');
//to change stroke color:
let randomcolorstroke = document.querySelectorAll('.randomcolorstroke');

//generate random number between min and max inclusive
const random = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;
//choose a random color
const color = e => e[random(0,e.length - 1)];
//choose a random palette
const randomPalette = e => palettes[random(0,palettes.length - 1)];
//verify if element contain an specific class
const containClass = (el,c) => el.classList.contains(c);

//set color
const SetRandomColor = (e,pallete) =>{
  if (pallete == undefined){
    pallete = randomPalette();
  }
  //get element from target
  let el = e.target;
  //you can use a single palette:
  if (containClass(el,'randomcolorfill')) el.style.fill = color(pallete);
    //add a custom palette that you want:
  if (containClass(el,'randomcolorstroke')) el.style.stroke = color(pallete);
    //merge some palettes:
  if (containClass(el,'randomcolor')) el.style.color = color(pallete);
    //or choose a random palette
  if (containClass(el,'randomcolorbg')) el.style.backgroundColor = color(pallete);
};

//add listener event for each element
const treedboxRandomColor = (group,ev,pallete) =>{
  group.forEach(el =>{
    ev.forEach(evt => el.addEventListener(evt,e =>{
      SetRandomColor(e,pallete);
    },{passive:true}));
  });
};
