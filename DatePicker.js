'use-strict'

class DatePicker {
  // Example fixedDate. Will be replaced when a day is clicked on calendar
  fixedDate = new FixedDate(1, 30, 1776);

  constructor(id, dateSelection){
    this.id = id;
    dateSelection(id, this.fixedDate);
  }

  render(date){
    document.getElementById(this.id).innerHTML += getCalendarHTML(date);
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

function getCalendarHTML(date){
  var month = numToMonth(date.getMonth() + 1); // Add one since getMonth index starts at 0

  return `
  <table>
    <thead>
      <tr>
        <th colspan="7">${month}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Su</td>
        <td>Mo</td>
        <td>Tu</td>
        <td>We</td>
        <td>Th</td>
        <td>Fr</td>
        <td>Sa</td>
      </tr>
    </tbody>
  </table>
  `
}