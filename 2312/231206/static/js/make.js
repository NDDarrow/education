

$(function(){
    $("#make").on("click" , makeTable);
});

function makeTable(){
    var row = Number($("#row").val());
    var col = Number($("#col").val());
    
    var table = "<table>"
    for(var i = 1; i <= row; i++){
        table +="<tr>";
        for(var k = 1; k <= col; k++){
            table += "<td></td>"
        }
        table += "</tr>"
    }
    table += "</table>"
    opener.$("#draw").html(table); 

    opener.$("#size").attr("disabled",false)

    window.close();
};