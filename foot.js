


$(document).ready(function() {
  $.getJSON("https://puzzle.qieee.top/api/rank", function(data) {
    var table = $("<table></table>");
    var headerRow = $("<tr></tr>");
    headerRow.append("<th>Name</th>");
    headerRow.append("<th>ID</th>");
    headerRow.append("<th>Level 0 Score</th>");
    headerRow.append("<th>Level 1 Score</th>");
    headerRow.append("<th>Level 2 Score</th>");
    headerRow.append("<th>Level 3 Score</th>");
    table.append(headerRow);
    $.each(data, function(index, item) {
      var row = $("<tr></tr>");
      row.append("<td>" + item.name + "</td>");
      row.append("<td>" + item.id + "</td>");
      $.each(item.score, function(index, score) {
        row.append("<td>" + score.score + "</td>");
      });
      table.append(row);
    })
    $("#rank_table").append(table);
  });
});

const tbody = document.querySelector('#getinformation');

const rows = Array.from(tbody.querySelectorAll('tr'));

rows.sort((a, b) => {
return parseInt(b.children[7].textContent) - parseInt(a.children[7].textContent);
});

rows.forEach((row, index) => {
row.children[0].textContent = index + 1;
tbody.appendChild(row);
});
