const customeYearCalendar = new UICustomeFullCalendar({
    year: 2022,
    target: document.querySelector('#reservationCalenda')
});

console.table(customeYearCalendar.CustomeUI( function({startsOn, monthName, numberDaysInMonth, monthId, year, HtmlMonthDays}){
    return `<h1>Hola mundo este es el mes de ${monthName}</h1>`;
}))