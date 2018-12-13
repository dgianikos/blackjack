Values = ["2","3","4","5","6","7","8","9","10","J","Q","K"]
Suits = ["Heart", "Diamond", "Club", "Spade"]
var Deck = [];
var Hand = [];
var PrintTextValue = ' ';
var gameOver = false

function setup() {
	createCanvas(999,800);
	background(0,215,0);
	
	//Initialize Deck
	for (var i = 0; i < 52; i++) {
    Deck[i] = new CardObject();
	}
	MakeADeck();
	
//make the buttons
addcard=createButton('Hit');
addcard.size(100,50);
addcard.style('font-size', '20px');
addcard.position(250,600);
addcard.mousePressed(New_DealACard);
	
stop=createButton('Stand');
stop.size(100,50);
stop.style('font-size', '20px');
stop.position(250,500);
stop.mousePressed(stand);
	
	//Initial Hand  Choose two cards from Deck[] and place into Hand[]
	//(eventually you will want to make so there are no repeats)
	
	var RandomCard = floor(random(52));
	Hand[0] = Deck[RandomCard];
	RandomCard = floor(random(52));
	Hand[1] = Deck[RandomCard];
	
	//print(Hand[0].Value+" "+ Hand[0].Suit)
   
}

function draw() {
   background(0,215,100,30);
   strokeWeight(3);	
	 stroke(0);
	
	 textSize(75);
   fill(255,255,0);	 
   text('BLACKJACK  PAYS 3 TO 2', 5, 100);

   fill(255,255,255);
   textSize(65);
   text('DEALER STANDS ON 17',75,200);
	
	 fill(0,0,0);
	 stroke(0,0,0);
	 textSize(25);
	 
	 DisplayHand();
	 noFill();
   rect(400,450,200,275);
}

function stand(){
	AddcardValues();
}  // closes stand

function New_DealACard() {
	var RandomCard = floor(random(52));
	Hand.push(Deck[RandomCard]);
  
}

function DisplayHand() {
	for (var i = 0;i < Hand.length; i++) {
	  PrintTextValue = [Hand[i].Value+ Hand[i].SuitSyms[Hand[i].SuitNum] ];	
		strokeWeight(1);
	  text(PrintTextValue,450,475+50*i);
		
	}  // close loop
}  // close  DisplayHand

function CalculateHand() {
	for (var i = 0;i < Hand.length; i++) {
		//write function that caculates hands
	}

}

function MakeADeck() {  //Initializes the deck with all 52 cards
  for (var i = 0; i < Suits.length; i++) { //for all suits
		for (var j = 0; j < Values.length; j++) {
			 var Count = i*Values.length + j;
			 Deck[Count].SuitNum = i;
			 Deck[Count].Suit = Suits[i];
	     Deck[Count].Value = Values[j];
			 //print(['The '+Count+' card is the '+Deck[Count].Value+' of '+Deck[Count].Suit+'s']) ;
		}  // end for j
	}	   // end for i 
}  // closes MakeADeck

function CardObject() {     //Make a structure
 this.Suit = 'Heart';
 this.Value = 'Jack';
 this.SuitNum = 0;
 this.SuitSyms =['♥','♦','♣','♠'];
 this.num=0;
}


function AddcardValues() {
	gameOver == true;

}
function hit() {
	background(0,150,0)
	changeCard()
	if (card == 1) {
		changeSuit()
	}
	if (rndNum > 10) {
		playTotal = playTotal + 10
		if (playTotal > 21) {
			gameOver == true;
			checkWin()
	}
} else {
		playTotal = playTotal + rndNum
		if (playTotal > 21) {
			gameOver == true;
			checkWin()
	}
	}
	
   //Hand[i].Value + Hand[i].Value + Hand[i].Value + Hand[i].Value = handTotal 
	//text(handTotal,100, 100);

} // closes AddcardValues

function Winner() {
	if (playTotal > 21) {
		text("Player Bust", 450,450)
} else if (AITotal > 21) {
		text("House Bust", 450,450)
} else {
		if (playTotal > AITotal) {
			text("Player Wins",450,450)
	} else if (playTotal < AITotal) {
			text("House Wins", 450,450)
	} else {
			text("Push", 450,450)
	}
}
}
