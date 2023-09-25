'use-strict'

class DatePicker {
  // Example fixedDate. Will be replaced when a day is clicked on calendar
  fixedDate = new FixedDate(1, 1, 1);

  constructor(id, dateSelection){
    this.id = id;
    dateSelection(id, this.fixedDate);
  }

  render(date){
    // debugger;
    const datePicker = document.getElementById(this.id);
    main(date, datePicker);
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

// Credit: These functions are adapted from sample calendar creation code on Project 3 Recitation page.

function getTableCaption(date){
  const month = date.toLocaleString('default', { month: 'long' });
  const calendarTableCaption = document.createElement("caption");
  const cellText = document.createTextNode(month + " " + date.getFullYear());
  calendarTableCaption.appendChild(cellText);
  return calendarTableCaption;
}

function getRow(values, rowType, date, element){
  let headerRow = document.createElement("tr");
  for (const index_dynamic in values) {
      const headerCell = document.createElement(rowType);
      const cellText = document.createTextNode(values[index_dynamic].value);
      headerCell.appendChild(cellText);
      if (values[index_dynamic].active && headerCell.nodeName == "TD") {
          headerCell.addEventListener('click',
              function(){
                new DatePicker(element, function (id, fixedDate) {
                  fixedDate.month = numToMonth(date.getMonth() + 1);
                  fixedDate.day = values[index_dynamic].value;
                  fixedDate.year = date.getFullYear();
                  console.log("DatePicker with id", element.id,
                      "selected date:", fixedDate.month + " " + fixedDate.day + ", " + fixedDate.year);
                });
              })
      }
      else{
          headerCell.setAttribute("class", "not-in-month");
      }
      headerRow.appendChild(headerCell);
  }
  return headerRow;
}

function getHeaderRow1Data(){
  return [{value:"\u2190", active: true},
      {value:"\u00A0", active: false},
      {value:"\u00A0", active: false},
      {value:"\u00A0", active: false},
      {value:"\u00A0", active: false},
      {value:"\u00A0", active: false},
      {value:"\u2192", active: true}];
}

function getHeaderRow2Data(){
  return [{value:"Su", active: false},
      {value:"Mo", active: false},
      {value:"Tu", active: false},
      {value:"We", active: false},
      {value:"Th", active: false},
      {value:"Fr", active: false},
      {value:"Sa", active: false}];
}

function getTableHeader(date, element){
  const calendarTableHeader = document.createElement("thead");
  const headerRow = getRow(getHeaderRow1Data(),"th", date, element);
  headerRow.children[0].setAttribute("class", "month-selector");
  headerRow.children[0].addEventListener('click',
      function(){
          date.setMonth(date.getMonth() - 1);
          main(date, element);
      })
  headerRow.children[6].setAttribute("class", "month-selector");
  headerRow.children[6].addEventListener('click',
      function(){
          date.setMonth(date.getMonth() + 1);
          main(date, element);
      })
  calendarTableHeader.appendChild(headerRow);
  calendarTableHeader.appendChild(getRow(getHeaderRow2Data(),"th", date, element));
  return calendarTableHeader;
}

function getTableBody(date, element){
  const month = date.getMonth();
  const gridDays = new Date(date.getFullYear(), date.getMonth(), 1);
  gridDays.setDate(gridDays.getDate() - gridDays.getDay());
  const calendarTableBody = document.createElement("tbody");
  for(let i = 0; i < 7; i++){
      if (i > 4 && gridDays.getMonth() !== month){
          break
      }
      const rowData = [];
      for(let j = 0; j < 7; j++){
          rowData.push({value: gridDays.getDate(), active: gridDays.getMonth() === month});
          gridDays.setDate(gridDays.getDate() + 1);
      }
      const row = getRow(rowData,"td", date, element);
      calendarTableBody.appendChild(row);
  }
  return calendarTableBody;
}

function getTable(date, element){
  const calendarTable = document.createElement("table");
  calendarTable.appendChild(getTableCaption(date, element));
  calendarTable.appendChild(getTableHeader(date, element));
  calendarTable.appendChild(getTableBody(date, element));
  return calendarTable;
}

function main(date, element){
  const calendarContainer = element;
  if (calendarContainer.firstElementChild !== null) {
      calendarContainer.removeChild(calendarContainer.firstElementChild);
  }
  calendarContainer.appendChild(getTable(date, element));
}

var calendarHTML = `
<table>
  <caption>
      January 1990
  </caption>
  <thead>
    <tr>
        <th class="month-selector">&larr;</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th class="month-selector">&rarr;</th>
    </tr>
    <tr>
        <th>Su</th>
        <th>Mo</th>
        <th>Tu</th>
        <th>We</th>
        <th>Th</th>
        <th>Fr</th>
        <th>Sa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="not-in-month">0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
`;

const div1 = document.getElementById("datepicker1");
const div2 = document.getElementById("datepicker2");