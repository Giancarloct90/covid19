// VARIABLEs
const search = document.getElementById('txt');
const bt = document.getElementById('btn');
var cont = [];

// EVENTS LISTENERS
search.addEventListener('keyup', function (e) {
    let filter = e.target.value.toUpperCase();
    let row = document.getElementById('divCountry');
    let divCol = row.getElementsByClassName('col-md-2');

    for (let i = 0; i < divCol.length; i++) {
        con = divCol[i].getElementsByTagName("div")[0];
        txtValue = con.textContent || con.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            divCol[i].style.display = "";
        } else {
            divCol[i].style.display = "none";
        }
    };
});

// FUNCTION
function findText(e) {
    console.log(e.target.value.toLowerCase());
}

function aler() {
    alert(search.value);
}