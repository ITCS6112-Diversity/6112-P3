'use-strict'

class DatePicker {
  // Example fixedDate. Will be replaced when a day is clicked on calendar
  fixedDate = new FixedDate(1, 30, 1776);

  constructor(id, dateSelection){
    this.id = id;
    dateSelection(id, this.fixedDate);
  }

  render(date){
    console.log("called")
    generateCalendar(date);
  }
}

class FixedDate {
  constructor(month, day, year){
    this.month = numToMonth(month);
    this.day = day;
    this.year = year;
  }
}

function numToMonth(month){
  switch(month){
    case 1:
      return "January"
    case 2:
      return "February"
    case 3:
      return "March"
    case 4:
      return "April"
    case 5:
      return "May"
    case 6:
      return "June"
    case 7:
      return "July"
    case 8:
      return "August"
    case 9:
      return "September"
    case 10:
      return "October"
    case 11:
      return "November"
    case 12:
      return "December"
  }
}

function generateCalendar(date){
  var month = numToMonth(date.getMonth() + 1); // Add one since getMonth index starts at 0
  var year = date.getFullYear();
  // Contains sample data. Dates will need to be added programmatically.
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableHeadRow = document.createElement("tr").setAttribute("id", "calendar-title");
  const tableHeadCell = document.createElement("th").setAttribute("colspan", "7");
  //tableHeadCell.innerHTML = `${month} ${year}`

  const tableBody = document.createElement("tbody");
  const tableBodyRowWeekday = document.createElement("tr").setAttribute("id", "weekday-row");
  const tableBodyRowWeekdayCellSu = document.createElement("td").innerHTML = "Su";
  const tableBodyRowWeekdayCellMo = document.createElement("td").innerHTML = "Mo";
  const tableBodyRowWeekdayCellTu = document.createElement("td").innerHTML = "Tu";
  const tableBodyRowWeekdayCellWe = document.createElement("td").innerHTML = "We";
  const tableBodyRowWeekdayCellTh = document.createElement("td").innerHTML = "Th";
  const tableBodyRowWeekdayCellFr = document.createElement("td").innerHTML = "Fr";
  const tableBodyRowWeekdayCellSa = document.createElement("td").innerHTML = "Sa";


  // <table>
  //   <thead>
  //     <tr id="calendar-title">
  //       <th colspan="7">${month} ${year}</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     <tr id="weekday-row">
  //       <td>Su</td>
  //       <td>Mo</td>
  //       <td>Tu</td>
  //       <td>We</td>
  //       <td>Th</td>
  //       <td>Fr</td>
  //       <td>Sa</td>
  //     </tr>
  //   </tbody>
  // </table>
  
}


const div1 = document.getElementById("datepicker1");
const div2 = document.getElementById("datepicker2");
const button1 = document.createElement("button")
const button2 = document.createElement("button")

var datePicker1 = new DatePicker("datepicker1", function (id, fixedDate) {
  console.log("DatePicker with id", id,
      "selected date:", fixedDate.month + "/" + fixedDate.day + "/" + fixedDate.year);
});

var datePicker2 = new DatePicker("datepicker2", function (id, fixedDate) {
  console.log("DatePicker with id", id,
      "selected date:", fixedDate.month + "/" + fixedDate.day + "/" + fixedDate.year);
});

button1.onclick = function () {datePicker1.render(new Date())}
button2.onclick = function () {datePicker2.render(new Date())}

button1.innerHTML = "Generate"
button2.innerHTML = "Generate"
div1.appendChild(button1);
div2.appendChild(button2);

