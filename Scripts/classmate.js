var user_name_str;
var gender_str;
var galic_str;
var complexion_str;
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
    if (document.getElementById("complexion_checkbox").checked) {
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
    document.getElementById("display_option").style.display = "inline"
    document.getElementById("display_option").innerHTML = student_id_str + " is a vampire";
    }
}


