var tabObj = new ej.navigations.Tab();

tabObj.appendTo('#header-tab-element');

ej.grids.Grid.Inject(ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'Name', headerText: 'Name', textAlign: 'Left', width: 175, type: 'string' },
        { field: 'Company', width: 75, headerText: 'Company', type: 'string', textAlign: 'Right' },
        { field: 'Date', headerText: 'Date', width: 85, format: 'dMy' },
        { field: 'Employee', headerText: 'Employee', textAlign: 'Center', width: 130, format: 'string' },
        { field: 'Verified', headerText: '#', width: 50, displayAsCheckBox: true }
    ],
    allowSorting: true,
    allowPaging: true,
    pageSettings: { pageSize: 14 }
});

grid.appendTo('#Grid');

var arts = ["Çağrılar", "Çağrı Listele", "Çağrı Düzenle"];
var listviewInstance = new ej.lists.ListView({
    dataSource: arts
});
listviewInstance.appendTo("#leftMenu");

ej.base.enableRipple(true);

var button = new ej.buttons.Button({ cssClass: `e-flat` }, '#flatbtn');
var button = new ej.buttons.Button({ cssClass: `e-flat` }, '#flatbtn-trash');
var button = new ej.buttons.Button({ cssClass: `e-outline` }, '#outlinebtn');

radiobutton = new ej.buttons.RadioButton({ label: 'Gelen', name: 'position', checked: true });
radiobutton2 = new ej.buttons.RadioButton({ label: 'Giden', name: 'position', checked: false });
radiobutton.appendTo('#incoming');
radiobutton2.appendTo('#outgoing');

var today = new Date();
var currentYear = today.getFullYear();
var currentMonth = today.getMonth();
var currentDay = today.getDate();

var datepicker = new ej.calendars.DatePicker({
    format: 'dd/MM/yyyy',
    //sets the min date
    min: new Date(currentYear, currentMonth, 7),
    //sets the max date
    max: new Date(currentYear, currentMonth, 27),
    //sets the value
    value: new Date(new Date().setDate(14))
});
datepicker.appendTo('#datepicker');

var timepicker = new ej.calendars.TimePicker({
    placeholder: 'Select a time',
    //sets the min value
    min: new Date('3/8/2017 9:00 AM'),
    //sets the max value
    max: new Date('3/8/2017 11:30 AM'),
    //sets the value
    value: new Date('3/8/2017 11:00 AM')
});
timepicker.appendTo('#timepicker');

radiobutton3 = new ej.buttons.RadioButton({ label: 'Kayıtlı Bağlantı', name: 'connection', checked: true });
radiobutton4 = new ej.buttons.RadioButton({ label: 'Bağlantı Değil', name: 'connection', checked: false });
radiobutton3.appendTo('#connection');
radiobutton4.appendTo('#notConnection');

document.getElementById('targetButton').onclick = function () {
    // Initialize and render alert dialog
    ej.popups.DialogUtility.alert('Baglanti');
}
document.getElementById('targetButton2').onclick = function () {
    // Initialize and render alert dialog
    ej.popups.DialogUtility.alert('Telefon');
}

var inputobj = new ej.inputs.TextBox({
    placeholder: 'First Name',
    floatLabelType: 'Never'
});
inputobj.appendTo('#firstName');

var inputobj2 = new ej.inputs.TextBox({
    placeholder: 'Last Name',
    floatLabelType: 'Never'
});
inputobj2.appendTo('#lastName');

var inputobj3 = new ej.inputs.TextBox({
    placeholder: 'Company',
    floatLabelType: 'Never'
});
inputobj3.appendTo('#company');

var inputobj7 = new ej.inputs.TextBox({
    floatLabelType: 'Never'
});
inputobj7.appendTo('#subject');

var inputobj4 = new ej.inputs.TextBox({
    placeholder: 'Connection',
    floatLabelType: 'Never'
});
inputobj4.appendTo('#connectionInput');

var inputobj5 = new ej.inputs.TextBox({
    placeholder: 'Phone',
    floatLabelType: 'Never'
});
inputobj5.appendTo('#phone');

var inputobj6 = new ej.inputs.TextBox({
    placeholder: 'Phone',
    floatLabelType: 'Never'
});
inputobj6.appendTo('#phone2');

let sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
var listObj = new ej.dropdowns.DropDownList({
    dataSource: sportsData,
    popupWidth: '250px',
    popupHeight: "250px",
});
listObj.appendTo('#ddl');

let compData = ['Makrovit', 'Solimpeks', 'Better Half'];
var listObj = new ej.dropdowns.DropDownList({
    dataSource: compData,
    popupWidth: '250px',
    popupHeight: "250px",
});
listObj.appendTo('#ddlComp');

var floatTypeNever = new ej.inputs.TextBox({
    floatLabelType: 'Never'
});
floatTypeNever.appendTo('#multiline-never');

var button = new ej.buttons.Button();
button.appendTo('#submitbtn');

const activeConnectionClass = () => {
    let connectionCard = document.querySelector('#connectionCard');
    let notConnectionCard = document.querySelector('#notConnectionCard');

    connectionCard.classList.remove('disabled');
    notConnectionCard.classList.add('disabled');
}

const activeNotConnectionClass = () => {
    let connectionCard = document.querySelector('#connectionCard');
    let notConnectionCard = document.querySelector('#notConnectionCard');

    connectionCard.classList.add('disabled');
    notConnectionCard.classList.remove('disabled');
}