let magazine = "give me one grand today night";
let note = "give one grand today";

let magazineArr = magazine.split(' ');
let noteArr = note.split(' ');

for (let i = 0; i < noteArr.length; i++) {
  if (magazineArr.includes(noteArr[i])) {
    let index = magazineArr.indexOf(noteArr[i]);
    magazineArr.splice(index, 1);
  } else {
    console.log('No');
    break;
  }

  if (i === noteArr.length - 1) console.log('Yes');
}