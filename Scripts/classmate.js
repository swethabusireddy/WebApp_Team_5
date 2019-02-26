var user_name_str;
var gender_str;
var galic_str;
var shadow_str;
var comment_str;
var modal = document.getElementById('AddClasmate');
function output_user_info() {
    var user_name_str = document.getElementById('first_name').value + " " + document.getElementById('middle_name').value +
        " " + document.getElementById('last_name').value;
    var gender_str;
    if (document.getElementById("male_radio").checked) {
        gender_str = "Male";
    }
    else {
        gender_str = "Female";
    }

    var galic_str;
    if (document.getElementById("galic_checkbox").checked) {
        galic_str = "Y";
    }
    else {
        galic_str = "N";
    }

    var complexion_str;
    if (document.getElementById("complexionPale_checkbox").checked) {
        complexion_str = "Y";
    }
    else {
        complexion_str = "N";
    }

    var shadow_str;
    if (document.getElementById("shadow_checkbox").checked) {
        shadow_str = "Y";
    }
    else {
        shadow_str = "N";
    }

    var comment_str = document.getElementById("comment").value;

    var table = document.getElementById("saving_table");
    // Create an empty <tr> element and add it to the 1st position of the table:
    // BE CAREFUL!!! row 0 is our heading row
    var row = table.insertRow(1);
    // Try this
    // var row = table.insertRow(0);
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    // Add some text to the new cells:
    cell1.innerHTML = user_name_str;
    cell2.innerHTML = gender_str;
    cell3.innerHTML = galic_str;
    cell4.innerHTML = complexion_str;
    cell5.innerHTML = shadow_str;
    modal.style.display = "none";

}
function delete_row() {
    // delete the second row
    document.getElementById("saving_table").deleteRow(1);
}

function delete_last_row() {
    var table = document.getElementById('saving_table');
    var row_count = table.rows.length;

    table.deleteRow(row_count - 1);
}

function getRandomInt(min, max) {
    // round up
    min = Math.ceil(min);
    // round down
    max = Math.floor(max);
    // Math.random() random number in the range 0–1
    // inclusive of 0, but not 1
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function display_chosen_option() {
    var e = document.getElementById ("mySelect");
    var x = e.options [e.selectedIndex] .text;
    if (x == "Random Guess")
    {
        var student_id = getRandomInt(1, 4);
    // Create student id string based on 'Model' component
    var student_id_str = document.getElementById("student_"+student_id).getElementsByTagName("td")[0].innerHTML;
    document.getElementById("display_option").style.display = "inline";
    document.getElementById("chart_div").style.display = "none";
    document.getElementById("display_option").innerHTML = student_id_str + " is a vampire";
    }
    else
    {
        document.getElementById("display_option").style.display = "none";
        document.getElementById("chart_div").style.display = "inline";
        drawChart();
    }
}

    // draws it.
function drawChart() {
      var data = new google.visualization.DataTable();
      // classmate_data_processing(classmate_data, data);
      classmate_data_processing(data);


      // Set chart options
      var options = {'title':'How many vampires in the class?',
                     'width':400,
                     'height':300};

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
}

function classmate_data_processing(result_data) {
    var data = [];
    var headers = [];
    for (var i=0; i<saving_table.rows[0].cells.length; i++) {
        headers[i] = saving_table.rows[0].cells[i].innerHTML;
    }
    for (var i = 1; i<saving_table.rows.length; i++) {
        var tableRow = saving_table.rows[i];
        var rowData = {};
        for (var j = 0; j < tableRow.cells.length; j++) {
            rowData[ headers[j] ] = tableRow.cells[j].innerHTML;
        }
        data.push(rowData);
    }

    var num_human = 0;
    var num_vampire = 0;
    var total_Score = 0;

    for (var k = 0; k<= data.length - 1; k++) {
        if (data[k]['Garlic'] == 'N')
        {
            total_Score += 3;
        }
        if (data[k]['Complexion'] == 'Y')
        {
            total_Score += 3;
        }
        if (data[k]['shadow'] == 'N')
        {
            total_Score += 4;
        }
        if (total_Score > 6)
        {
            num_vampire++;
        }
        else
        {
            num_human++;
        }
    }

    result_data.addColumn('string', 'Element');
      result_data.addColumn('number', 'Count');

    result_data.addRows([
        ['Human', num_human],
        ['Vampire', num_vampire]
        ]);
}

