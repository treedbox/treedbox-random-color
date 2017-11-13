console.log('@treedbox');
/*
use any event that you want:
click,mouseover,mouseout,mousemove
touchstart,touchend,touchcancel,touchmove
wheel,focus,focusout,blur
WARNING: mousemove will result in a bunch of blinks
*/
//multiple event listeners for each element
treedboxRandomColor(randomcolorfill,['mouseover','mouseout','touchstart'],material);
treedboxRandomColor(randomcolorstroke,['mouseover','mouseout','touchstart'],googleColor);
treedboxRandomColor(randomcolor,['mouseover','mouseout','touchstart','touchend'],mergedPaletes);
treedboxRandomColor(randomcolorbg,['mouseover','mouseout','touchstart']);
//or same multiple events for all elements together
treedboxRandomColor([...randomcolorfill,...randomcolorstroke,...randomcolor,...randomcolorbg],['wheel','focus']);

//custom pallete
const vimeoInteresting = [
  '#667daf','#fd585f','#ff8a3d','#a61e2a','#4dbaff','#fbca54','#abd450','#66cc9a'
];
//using custom pallete
treedboxRandomColor(randomcolorfill,['click'],vimeoInteresting);
