var date = new Date();

const END_CLASS_TIMES = [
    [10, 15],
    [11, 05],
    [11, 55],
    [12, 45],
    [14, 15],
    [15, 05],
    [15, 55],
    [16, 45],
    [17, 35]
];

window.onload = function(){
    var table = document.getElementById("main_table");
    var cell_index = Math.max(1, date.getDay()), highlight_row = 1, first = true;
    for(var i = table.rows.length - 1; i > 0; i--){
        if(table.rows[i].cells[cell_index].innerText != ""){
            var time = END_CLASS_TIMES[i - 1];
            if(date.getHours() > time[0] || (date.getHours() == time[0] && date.getMinutes() > time[1])){
                if(first) {
                    highlight_row = 1;
                    cell_index++;
                }
                break;
            }
            highlight_row = i;
            first = false;
        }
    }
    table.rows[highlight_row].cells[cell_index].dataset.highlight_cell="true";
    for(var i = 0; i < table.rows.length; i++){
        var cell = table.rows[i].cells[cell_index];
        if(cell != null){
            cell.dataset.highlight_line = "true";
            cell.innerHTML = "<span>" + cell.innerText + "</span>"
        }
        if(cell_index == 6 && table.rows[i].cells[cell_index + 1] != null){
            table.rows[i].cells[cell_index + 1].dataset.highlight_line = "true"
            table.rows[i].cells[cell_index + 1].innerHTML = "<span>" + cell.innerText + "</span>"
        }
    }
}