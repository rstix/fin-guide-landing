document.getElementById('addRowBtn').addEventListener('click', function() {
  // Create a new table row
  var newRow = document.createElement('div');
  newRow.classList.add('table-row');

  // Create input fields for each column
  for (var i = 0; i < 3; i++) {
    var newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.classList.add('table-row-item');
    newRow.appendChild(newInput);
  }

  for (var i = 0; i < 2; i++) {
    var newInput = document.createElement('div');
    newInput.classList.add('table-row-item');
    newRow.appendChild(newInput);
  }

  // Append the new row to the table
  document.querySelector('.table').appendChild(newRow);
});