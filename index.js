let files, output;
let cars = [];
let temp = 1;
let copiedFiles;
document.getElementById("folder").addEventListener("change", function (event) {
    // output = document.querySelector("ul");
    files = event.target.files;

    for (var i = 0; i < files.length; i++) {
        cars[i] = files[i].name;
    }
    copiedFiles = Object.assign({}, files);
    // console.log(copiedFiles)

    // document.getElementById("demo").innerHTML = "files[3]";


}, false);



function GenerateTable() {
    //Build an array containing Customer records.
    console.log(copiedFiles);
    var customers = new Array();
    customers.push([" S.No ", " Name ", "  Type  ", "  Last_Modified_Date  ","Size", "File_Path"] , );
    for (var j = 0; j < cars.length; j++) {
        customers.push([j + 1, copiedFiles[j].name.split('.')[0], copiedFiles[j].name.split('.')[1].toUpperCase(), copiedFiles[j].lastModifiedDate.toString().split('GMT')[0],copiedFiles[j].size+" bytes", copiedFiles[j].webkitRelativePath
        ]);
    }
    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}
