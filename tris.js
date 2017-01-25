var grid=[0,0,0,0,0,0,0,0,0,0];
var cord=[[0,0],[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]];
var rig=[0,0,0,0];
var col=[0,0,0,0];
var diag=[0,0,0];
var turno=1;
var numMosse=0;
resultString="";

function printData(cellId){
	
	// input
	var tdId=document.getElementById(cellId);
	if(grid[cellId]!=0){
		return;
	}
	numMosse++;
	grid[cellId]=turno;
	if(turno==1){
		tdId.innerHTML="X";
		turno=4;
	}else{
		tdId.innerHTML="O";
		turno=1;
	}
	
	// main
	rig[cord[cellId][0]]+=grid[cellId];
	col[cord[cellId][1]]+=grid[cellId];
	if(rig[cord[cellId][0]]==col[cord[cellId][1]]){
		diag[0]+=grid[cellId];
	}
	if((rig[cord[cellId][0]]+col[cord[cellId][1]])==4){
		diag[1]+=grid[cellId];
	}
	cand=Math.max(rig[cord[cellId][0]], col[cord[cellId][1]],diag[0], diag[1]);
	if(cand==12 || cand==3){
		if(grid[cellId]==1){
			resultString="Ha vinto X";
		}else{
			resultString="Ha vinto O";
		}
	}
	if(numMosse==9) resultString="Patta";
	
	// output	
	if(resultString) alert(resultString);
}
