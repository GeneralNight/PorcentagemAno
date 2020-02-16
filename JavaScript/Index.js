var hoje = new Date();
var inicioAno= new Date('1/1/'+hoje.getFullYear());
var fimAno= new Date('1/1/'+(hoje.getFullYear()+1));
var diaHoje = hoje.getDate();
var mesHoje = hoje.getMonth()+1;
var anoHoje = hoje.getFullYear();
var dataHoje = new Date(mesHoje+'/'+diaHoje+'/'+anoHoje);
var diaAnoTime = dataHoje.getTime() - inicioAno.getTime();
var diaAnoDay = diaAnoTime / (1000*3600*24) +1;

var Difference_In_Time = fimAno.getTime() - inicioAno.getTime(); 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

var porcntAno = (diaAnoDay*100/Difference_In_Days).toFixed(1); 

document.getElementById('txtQtdDiasRestantes').innerHTML='Dia '+diaAnoDay+' / '+Difference_In_Days;

document.getElementById('Progresso').style.width = porcntAno+'%';

document.getElementById('roundPercentText').innerHTML=porcntAno+'%';