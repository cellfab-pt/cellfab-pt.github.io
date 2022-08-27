function openTab(evt, TabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("div_TabContent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("button_TabLinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function openSubTab(sub_evt, SubTabName) {
    var i, subtabcontent, subtablinks;
    subtabcontent = document.getElementsByClassName("div_SubTabContent");
    for (i = 0; i < subtabcontent.length; i++) {
      subtabcontent[i].style.display = "none";
    }
    subtablinks = document.getElementsByClassName("button_SubTabLinks");
    for (i = 0; i < subtablinks.length; i++) {
      subtablinks[i].className = subtablinks[i].className.replace(" active", "");
    }
    document.getElementById(SubTabName).style.display = "block";
    sub_evt.currentTarget.className += " active";
  }
  
function addVariable(LengthElectrode /*  ,**NAME_OF_VARIABLE_NO_SPACE**  */) { 
  var table = document.getElementById("Table"); // initialise table
  var row = table.insertRow(); 
  var countRows = counter;
  
  // add cell to the table
  var cell1 = row.insertCell(0); 
  var cell2 = row.insertCell(1);
  
  /* ----------------------------
         ADD CELL TEMPLATE
  -------------------------------
  var cell**n+1** = row.insertCell(**n**);
  */

  // remove button
  var remove_button = document.createElement('input');
  remove_button.setAttribute('type', 'button');
  remove_button.setAttribute('value', 'Remove');
  remove_button.setAttribute('onclick', 'removeRow(this)');
  
  // initialize table cells
  cell1.innerHTML = LengthElectrode; 
  /* ----------------------------
         INITIALIZE CELL TEMPLATE
  -------------------------------
  cell**n**.innerHTML = **NAME_OF_VARIABLE_NO_SPACE** ;
  */
 
  cell2.innerHTML = "<br><button type='button' onclick='removeRow(this)' >Remove </button><br>";

  countRows++; 
  document.getElementById("counter").value = countRows; 

  alert("Slitting variables added");

  document.getElementById('LengthElectrode').value = null;
  
  /* ----------------------------
         RESET INPUT FIELD TEMPLATE
  -------------------------------
  document.getElementById('**NAME_OF_VARIABLE_NO_SPACE**').value = null;
  */

  // go to table tab after adding the variables
  document.getElementById('Table_tab').click();
}

function doneProcess() {
  window.location.href = 'VacuumDrying.html';  // navigate page to coating & drying
}

function removeRow(oButton) {
  var MixingTable = document.getElementById('Table');
  MixingTable.deleteRow(oButton.parentNode.parentNode.rowIndex);
}
