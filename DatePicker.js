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
  var year = date.getFullYear();
  // Contains sample data. Dates will need to be added programmatically.
  return `
  <table>
    <thead>
      <tr>
        <th colspan="7">${month} ${year}</th>
      </tr>
    </thead>
    <tbody>
      <tr id="weekday-row">
        <td>Su</td>
        <td>Mo</td>
        <td>Tu</td>
        <td>We</td>
        <td>Th</td>
        <td>Fr</td>
        <td>Sa</td>
      </tr>
      <tr class="date-row">
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
      </tr>
      <tr class="date-row">
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
      </tr>
      <tr class="date-row">
        <td>15</td>
        <td>16</td>
        <td>17</td>
        <td>18</td>
        <td>19</td>
        <td>20</td>
        <td>21</td>
      </tr>
      <tr class="date-row">
        <td>22</td>
        <td>23</td>
        <td>24</td>
        <td>25</td>
        <td>26</td>
        <td>27</td>
        <td>28</td>
      </tr>
      <tr class="date-row">
        <td>29</td>
        <td>30</td>
        <td>31</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
      </tr>
    </tbody>
  </table>
  `
}