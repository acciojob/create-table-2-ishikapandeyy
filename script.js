function createTable() {
    //Write your code here
 let rn = prompt("Input number of rows");
 let cn = prompt("Input number of columns");
  
    if (rn === null || cn === null || isNaN(rn) || isNaN(cn)) {
        return;
    }
    rn = Number(rn);
    cn = Number(cn);

     if (rn <= 0 || cn <= 0) {
        alert("Rows and columns must be greater than 0");
        return;
    }

  let table = document.getElementById("myTable");

    table.innerHTML = "";

    for (let i = 0; i < rn; i++) {
        let tableRow = document.createElement("tr");

        for (let j = 0; j < cn; j++) {
            let tableData = document.createElement("td");

            tableData.textContent = `Row-${i} Column-${j}`;

            tableRow.appendChild(tableData);
        }

        table.appendChild(tableRow);
    }
}
