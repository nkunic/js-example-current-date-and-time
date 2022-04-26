// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!

/*** CURRENT DATE AND TIME ***/

/* Napiši JavaScript program koji će u konzuli prikazati tačan datum i vreme sledećem formatu.
U ovakvom formatu:
Danas je: Četvrtak.
Trenutno vreme : 9 AM  : 22 : 24 */

/* Date today */
var today = new Date();
console.log(today); // Today date: 2022-04-16T13:12:38.178Z

var day = today.getDay();
// var day = new Date().getDay();
console.log(day); // 6

var daylist = [
  'Nedelja',
  'Ponedeljak',
  'Utorak',
  'Sreda ',
  'Četvrtak',
  'Petak',
  'Subota',
];

var dayToday = daylist[day];
console.log(dayToday); // Subota

console.log('*** Danas je: ' + daylist[day] + '.***'); // *** Danas je: Subota.***

/* Hours */
var hour = today.getHours();
console.log(hour); // 15 (Hour)

var minute = today.getMinutes();
console.log(minute); // 39 (Minutes)

var second = today.getSeconds();
console.log(second); // 33 (Seconds)

var prepand = hour >= 12 ? ' PM ' : ' AM ';
console.log(prepand); // PM

hour = hour >= 12 ? hour - 12 : hour;
console.log(hour); // 3

/* Noon or 12PM */
if (hour === 0 && prepand === ' PM ') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = ' Noon';
  } else {
    hour = 12;
    prepand = ' PM';
  }
}

/* Midnight or 12AM */
if (hour === 0 && prepand === ' AM ') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = ' Midnight';
  } else {
    hour = 12;
    prepand = ' AM';
  }
}

console.log(
  '*** Trenutno vreme: ' +
    hour +
    prepand +
    ' : ' +
    minute +
    'min' +
    ' : ' +
    second +
    'sec ***'
); // *** Trenutno vreme: 3 PM : 48min : 47sec ***
