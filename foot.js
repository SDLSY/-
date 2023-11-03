$(document).ready(function() 
    {
    $.getJSON("https://puzzle.qieee.top/api/rank", function(data) 
    {
    var Level0 = 0;
    var Level1 = 0;
    var Level2 = 0;
    var Level3 = 0;
    var i = 0;
    var table = $("<table></table>");
    var headerRow = $("<tr></tr>");
    headerRow.append("<th>排名</th>");
    headerRow.append("<th>姓名</th>");
    headerRow.append("<th>ID</th>");
    headerRow.append("<th>Level_0</th>");
    headerRow.append("<th>Level_1</th>");
    headerRow.append("<th>Level_2</th>");
    headerRow.append("<th>Level_3</th>");
    headerRow.append("<th>Score</th>");
    table.append(headerRow);
    $.each(data, function(index, item) 
    {
      var sum = 0;
      $.each(item.score, function(index, score) 
      {
        sum += score.score;
      }
      );
      item.sum_score = sum;
    }
    );
    data.sort
    (function(a, b) 
    {
      return b.sum_score - a.sum_score;
    }
    );
    $.each
    (data, function(index, item) 
    {
      i++;
      var row = $("<tr></tr>");
      row.append("<td>" + i + "</td>")
      row.append("<td>" + item.name + "</td>");
      row.append("<td>" + item.id + "</td>");
      $.each
      (item.score, function(index, score)
      {
        var cellClass = score.score === 10 ? "passed" : "not_passed";
        if ( score.level ===  0 && score.score === 10) {
          Level0++;
        }
        if ( score.level ===  1 && score.score === 10) {
          Level1++;
        }
        if ( score.level ===  2 && score.score === 10) {
          Level2++;
        }
        if ( score.level ===  3 && score.score === 10) {
          Level3++;
        }

        row.append("<td class='" + cellClass + "'>" + score.score + "</td>");
      }
      );
      row.append("<td>" + item.sum_score + "</td>")
      table.append(row);
    }
    );
    $("#table-container").append(table);
    var ctx = document.getElementById('yi').getContext('2d');
    var data = {
    labels: ['level0', 'level1', 'level2', 'level3'],
    datasets: [{
        data: [Level0,Level1,Level2,Level3],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    }]
  };

    var piels = new Chart(ctx, {
    type: 'pie',
    data: data,
  });
  }
  );
  
}
);
