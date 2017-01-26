var matr; //matrice del tris
var giocatore;
var turno;
var numMosse; // numero delle mosse
var resultString; // risultato
var col; // numeri determinante per le tre colonna
var rig; // numeri determinante per le tre riga
var dig; // numeri determinante per le due diagonali
var det; // determinate
info(); // informazioni di debug
start();


// porta allo stato iniziale
function start(){
	console.log("**************  START ***************");
	matr=[[0,0,0],[0,0,0],[0,0,0]];
	giocatore=1;
	turno=1;
	numMosse=0;
	resultString="";
	col=[0,0,0];
	rig=[0,0,0];
	dig=[0,0];
	det=0;
}

// porta alle condizioni iniziali
function restart(){
	start();
	for(id=0;id<9;id++) window.document.getElementById(id).innerHTML="";
}

// funzione chiamata dall'evento onclick sulla cella
function printData(numRig, numCol){
	// input
	var tdId=document.getElementById(3*numRig+numCol);
	if(matr[numRig][numCol]!=0) return; // valore casella già assegnato
	numMosse++
	console.log("================  " +numMosse+ "  ================");
	console.log("coordinate riga  colonna : ("+numRig+","+numCol+")");
	if(turno==1){
		tdId.innerHTML="X";
		turno=-1;
	}else{
		tdId.innerHTML="O";
		turno=1;
	}
	matr[numRig][numCol]=giocatore;
	
	//main
	console.log("giocatore: " + giocatore);
	// calcolo numeri determinante
	rig[numRig]+=giocatore; 
	col[numCol]+=giocatore;
	if(numRig==numCol) dig[0]+=giocatore;
	if(numRig+numCol==2) dig[1]+=giocatore;
	// calcolo determinante
	det=Math.max(0,Math.max(rig[numRig],col[numCol],dig[0],dig[1])-2) +
	Math.min(0,Math.min(rig[numRig],col[numCol],dig[0],dig[1])+2);
	console.log("numeri determinante:");
	console.log("\trighe:     ("+rig[0]+","+rig[1]+","+rig[2]+")");
	console.log("\tcolonne:   ("+col[0]+","+col[1]+","+col[2]+")");
	console.log("\tdiagonali: ("+dig[0]+","+dig[1]+")");
	console.log("determinante: "+ det);
	// determina risultato
	if(det>0) resultString="Ha vinto X";
	if(det<0) resultString="Ha vinto O";
	if(det==0) if(numMosse<9){
		giocatore=turno;
		return;
	}else resultString="Patta"; // finito le mosse
	giocatore = turno;
	console.log("risultato: " + resultString);

	// output
	alert(resultString);
	console.log("           ***   END  ***");
	restart();
}

// informazione di log
function info(){
	console.log("  ********************  info ********************  ");
	console.log("==============   numero delle mosse  ==============");
	console.log("coordinate riga  colonna : della cella selezionata");
	console.log("giocatore: 1 giocatore X, -1 giocatore O");
	console.log("numeri determinante compresi fra -3 e 3:");
	console.log("\tcalcolati per ogni riga, colona, diagonale;");
	console.log("\t3 vince X , -3 vince O, altrimenti nessuno vince;");
	console.log("determinante ha valore -1,0,1:");
	console.log("\t1 vince X , -1 vince O, altrimenti nessuno vince;");
	console.log("risultato: dice chi ha vinto o se è patta");
	console.log("  ***********************************************  ");
}
