var li = new XMLHttpRequest();
li.open('GET','https://puzzle.qieee.top/api/rank')
li.onload = function()
{
    if(li.status === 200)
    {
        var ranklist = JSON.parse(li.responseText);
        var table = document.getElementById('rank_table');
        var i = 0;
        for(i = 0;i < ranklist.length;i++)
        {
            var rankDate = ranklist[i];
            var row = document.createElement('tr');
            var rankcell = document.createElement('td')
            rankcell.textContent = i;
            var namecell = document.createElement('td');
            namecell.textContent = rankDate.name;
            var idcell = document.createElement('td');
            idcell.textContent = rankDate.id;
            var scorecell = document.createElement('td');
            var level0_cell = document.createElement('td');
            level0_cell.textContent = rankDate.level0.score;
            if(rankDate.level0.score === 10)
            {
                level0_cell.textContent.ClassName = 'passed';
            }
            else
            {
                level0_cell.textContent.ClassName = 'not_passed';
            }
            var level1_cell = document.createElement('td');
            level1_cell.textContent = rankDate.level1.score;
            if(rankDate.level0.score === 10)
            {
                level1_cell.textContent.ClassName = 'passed';
            }
            else
            {
                level1_cell.textContent.ClassName = 'not_passed';
            }
            var level2_cell = document.createElement('td');
            level2_cell.textContent = rankDate.level2.score;
            if(rankDate.level0.score === 10)
            {
                level2_cell.textContent.ClassName = 'passed';
            }
            else
            {
                level2_cell.textContent.ClassName = 'not_passed';
            }
            var level3_cell = document.createElement('td');
            level3_cell.textContent = rankDate.level3.score;
            if(rankDate.level0.score === 10)
            {
                level3_cell.textContent.ClassName = 'passed';
            }
            else
            {
                level3_cell.textContent.ClassName = 'not_passed';
            }
            scorecell.textContent = level0_cell.textContent + level1_cell.textContent + level2_cell.textContent + level3_cell.textContent;
            row.appendChild(rankcell);
            row.appendChild(namecell);
            row.appendChild(idcell);
            row.appendChild(scorecell);
            row.appendChild(level0_cell);
            row.appendChild(level1_cell);
            row.appendChild(level2_cell);
            row.appendChild(level3_cell);
            table.appendChild(row);
        }
        
    }

}

li.send();





const tbody = document.querySelector('#getinformation');

const rows = Array.from(tbody.querySelectorAll('tr'));

rows.sort((a, b) => {
return parseInt(b.children[3].textContent) - parseInt(a.children[3].textContent);
});

rows.forEach((row, index) => {
row.children[0].textContent = index + 1;
tbody.appendChild(row);
});