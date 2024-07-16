
var button1 = document.getElementsByClassName("but")[0];
button1.style.width = "15%";
button1.style.height = "6%";
button1.style.borderRadius = "15px";
button1.style.fontSize = "155%";
button1.style.backgroundColor = "grey";

button1.onclick = fun;

var clickCount = 0; 

function fun() {
    clickCount++;
    button1.style.marginTop = "2%";
    tab.style.display = "table";
    tab.style.marginTop = "20px"; 
    tab.style.width = "50%";
    tab.style.height = "20%";
    tab.style.border = "1px solid blue";
    tab.style.borderCollapse = "collapse";
    row1.style.width = "100%";
    row1.style.height = "3%";
    row1.style.border = "1px solid gold";
    button1.style.top = "100px";
    // row1.style.background="linearGradient"

    if (clickCount === 1) {
        // Initial table setup
        row1Cell1.innerHTML = "Name";
        row1Cell2.innerHTML = "Roll No";
        row1Cell3.innerHTML = "Branch";
        row1Cell4.innerHTML = "CGPA";
        row1Cell5.innerHTML = "Update";
        row1Cell6.innerHTML = "Delete";

        row2Cell21.innerHTML = "Rasmini";
        row2Cell22.innerHTML = "22A91A61E1";
        row2Cell23.innerHTML = "AIML";
        row2Cell24.innerHTML = "9.3";

        row3Cell31.innerHTML = "Junaid";
        row3Cell32.innerHTML = "22A91A6144";
        row3Cell33.innerHTML = "AIML";
        row3Cell34.innerHTML = "9.2";

        // Update and Delete buttons for initial rows
        cell25.innerHTML = "<button onclick='updateRow(this.parentNode.parentNode)'> Update </button>";
        cell35.innerHTML = "<button onclick='updateRow(this.parentNode.parentNode)'> Update </button>";
        cell26.innerHTML = "<button onclick='deleteRow(this.parentNode.parentNode)'> Delete </button>";
        cell36.innerHTML = "<button onclick='deleteRow(this.parentNode.parentNode)'> Delete </button>";
    } else if (clickCount > 1) {
        var name = prompt("Enter Name:");
        var rollNo = prompt("Enter Roll No:");
        var branch = prompt("Enter Branch:");
        var cgpa = prompt("Enter CGPA:");

        if (name && rollNo && branch && cgpa) {
            var newRow = document.createElement("tr");

            var newCell1 = document.createElement("td");
            newCell1.innerHTML = name;
            newRow.appendChild(newCell1);

            var newCell2 = document.createElement("td");
            newCell2.innerHTML = rollNo;
            newRow.appendChild(newCell2);

            var newCell3 = document.createElement("td");
            newCell3.innerHTML = branch;
            newRow.appendChild(newCell3);

            var newCell4 = document.createElement("td");
            newCell4.innerHTML = cgpa;
            newRow.appendChild(newCell4);

            // Update and Delete buttons for new row
            var newCell5 = document.createElement("td");
            newCell5.innerHTML = "<button onclick='updateRow(this.parentNode.parentNode)'> Update </button>";
            newRow.appendChild(newCell5);

            var newCell6 = document.createElement("td");
            newCell6.innerHTML = "<button onclick='deleteRow(this.parentNode.parentNode)'> Delete </button>";
            newRow.appendChild(newCell6);

            tab.appendChild(newRow);
        }
    }
}

function updateRow(row) {
    var cells = row.getElementsByTagName("td");

    var name = prompt("Enter updated Name:", cells[0].innerHTML);
    var rollNo = prompt("Enter updated Roll No:", cells[1].innerHTML);
    var branch = prompt("Enter updated Branch:", cells[2].innerHTML);
    var cgpa = prompt("Enter updated CGPA:", cells[3].innerHTML);

    if (name && rollNo && branch && cgpa) {
        cells[0].innerHTML = name;
        cells[1].innerHTML = rollNo;
        cells[2].innerHTML = branch;
        cells[3].innerHTML = cgpa;
    }
}

function deleteRow(row) {
    row.parentNode.removeChild(row);
}

var bod = document.getElementsByTagName("body")[0];
bod.style.display = "flex";
bod.style.width = "100%";
bod.style.height = "100%";
bod.style.justifyContent = "center";
bod.style.alignItems = "center";
bod.style.flexDirection = "column";
bod.style.backgroundColor="green";

var tab = document.getElementsByTagName("table")[0];
var row1 = document.createElement("tr");
var cell1 = document.createElement("th");
var cell2 = document.createElement("th");
var cell3 = document.createElement("th");
var cell4 = document.createElement("th");
var cell5 = document.createElement("th");
var cell6 = document.createElement("th");
tab.style.backgroundColor="white";


var row2 = document.createElement("tr");
var cell21 = document.createElement("td");
var cell22 = document.createElement("td");
var cell23 = document.createElement("td");
var cell24 = document.createElement("td");
var cell25 = document.createElement("td");
var cell26 = document.createElement("td");

var row3 = document.createElement("tr");
var cell31 = document.createElement("td");
var cell32 = document.createElement("td");
var cell33 = document.createElement("td");
var cell34 = document.createElement("td");
var cell35 = document.createElement("td");
var cell36 = document.createElement("td");

tab.appendChild(row1);
var row1Cell1 = row1.appendChild(cell1);
var row1Cell2 = row1.appendChild(cell2);
var row1Cell3 = row1.appendChild(cell3);
var row1Cell4 = row1.appendChild(cell4);
var row1Cell5 = row1.appendChild(cell5);
var row1Cell6 = row1.appendChild(cell6);

tab.appendChild(row2);
var row2Cell21 = row2.appendChild(cell21);
var row2Cell22 = row2.appendChild(cell22);
var row2Cell23 = row2.appendChild(cell23);
var row2Cell24 = row2.appendChild(cell24);
var row2Cell25 = row2.appendChild(cell25);
var row2Cell26 = row2.appendChild(cell26);

tab.appendChild(row3);
var row3Cell31 = row3.appendChild(cell31);
var row3Cell32 = row3.appendChild(cell32);
var row3Cell33 = row3.appendChild(cell33);
var row3Cell34 = row3.appendChild(cell34);
var row3Cell35 = row3.appendChild(cell35);
var row3Cell36 = row3.appendChild(cell36);

tab.setAttribute("class", "tab1");
tab.style.display = "none";
