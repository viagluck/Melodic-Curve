$(document).ready(function(){

	// define a canvas for Raphael
	var paper = Raphael("paper");

	// grid drawing function definition
	var columnWidth = 10, rowHeight = 8;
	var numColumns = 128, numRows = 38;
	var drawGrid = function(numColumns, numRows, columnWidth, rowHeight, lineWidth, color){

		var columnLeftPosition = -columnWidth;
		var rowTopPosition = -rowHeight;
		var xAxisLabel = 1;
		var gutter = 6;
		// draw columns
		for(var i = 0; i <= numColumns; i++){
			paper.path("M" + (columnLeftPosition + columnWidth) + ",0 V" + numRows*rowHeight)
			.attr({stroke : color, "stroke-width": lineWidth});
			
			// //label x-axis every 4 columns (a column == quarter note) except last column
			// if(i%4 == 0 && i != numColumns){
			// 	paper.text(columnLeftPosition + columnWidth, (numRows*rowHeight) + gutter, xAxisLabel);
			// 	xAxisLabel++;
			// }
			columnLeftPosition+=columnWidth;
		}

		// draw rows
		for(var i = 0; i <= numRows; i++){
			paper.path("M0, " + (rowTopPosition + rowHeight) + " H" + numColumns*columnWidth)
			.attr({stroke : color, "stroke-width": lineWidth});
			rowTopPosition+=rowHeight;
		}
	}

	// note duration
	var w = 4, h = 2, q = 1, e = 1/2, s = 1/4;
	// note pallete
	var gs2 = -8,ab2 =-8,a2=-7,as2=-6,bb2=-6, b2=-5,c3=-4,cs3=-3,db3=-3,d3=-2,ds3=-1,eb3=-1, e3= 0, f3= 1, fs3= 2, gb3= 2, g3= 3, gs3= 4, ab3= 4, a3= 5, as3= 6, bb3= 6, b3= 7, 
        c4= 8, cs4= 9, db4= 9, d4= 10, ds4= 11, eb4= 11, e4= 12, f4= 13, fs4= 14, gb4= 14,
        g4= 15, gs4= 16, ab4= 16, a4= 17, as4= 18, bb4= 18, b4=19, c5= 20, cs5= 21, db5= 21, d5= 22,
        ds5= 23, eb5= 23, e5= 24, f5= 25, fs5= 26, gb5= 26, g5= 27, gs5= 28, ab5= 28
        a5= 29, as5= 30, bb5= 30, b5= 31, c6= 32, cs6 = 33, db6 = 33, d6=34, ds6=35, eb6=35,e6=36,f6=37,fs6=38; 
	// melodies
	var edelweiss = [[h,d4],[q,f4],[h+q,c5],[h,bb4],[q,f4],[h+q,eb4],[h,d4],[q,d4],[q,d4],[q,eb4],[q,f4],[h+q,g4],[h+q,f4],[h,d4],[q,f4],[h+q,c5],[h,bb4],[q,f4],[h+q,eb4],[h,d4],[q,f4],[q,f4],[q,g4],[q,a4],[h+q,bb4],[h+q,bb4],[q+e,c5],[e,f4],[q,f4],[q,a4],[q,g4],[q,f4],[h,d4],[q,f4],[h+q,bb4],[h,g4],[q,bb4],[h,c5],[q,bb4],[h+q,a4],[h+q,f4],[h,d4],[q,f4],[h+q,c5],[h,bb4],[q,f4],[h+q,eb4],[h,d4],[q,f4],[q,f4],[q,g4],[q,a4],[h+q,bb4],[h+q,bb4]];
	
	// var somethingGood = [[q,c4],[q,a4],[q,bb4],[q,a4],[q,bb4],[h,a4],[h,f4],[h,b3],[h,b3],[h,b3],
	// 					 [q,c4],[q,a4],[q,bb4],[q,a4],[q,bb4],[q,a4],[q,f4],[h,d4],[w,g4],[h+q,g4],
	// 					 [q,c4],[q,a4],[q,bb4],[q,a4],[q,bb4],[h,c5],[h,c4],[q,d4],[q,f4],[q,g4],[q+h+h,bb4],
	// 					 [q,bb4],[q,a4],[q,bb4],[q,a4],[q,f4],[q,c4],[h,e4],[w+h+q,f4],
	// 					 [q,f4],[q+e,bb4],[e,a4],[h,bb4],[q+e,b4],[e,as4],[h,b4],[q+e,c5],[e,a4],[h+w,f4],
	// 					 [q+e,bb4],[e,a4],[h,bb4],[h+q,b4],[q,f4],[w+h+q,e4],
	// 					 [q,c4],[q,a4],[q,bb4],[q,a4],[q,bb4],[h+q,c5],[q,c4],[h,d4],[h+h+q,f4],[q,g4],[q,a4],[q,bb4],[h,a4],[h,b4],[h,c4],[w+w,f4]];














	var neMeQuittePas = [[e+e,e4],[e,f4],[e+q,e4],
						 [e+e,e4],[e,f4],[e+q,e4],
						 [e+e,e4],[e,f4],[e,e4],[q,d4],
						 [e+e,d4],[e,e4],[e+q,d4],
						 [e+e,d4],[e,e4],[e+q,d4],
						 [e+e,d4],[e,e4],[e+q,d4],
						 [e+e,d4],[e,e4],[e,d4],[q,c4],
						 [e+e,c4],[e,d4],[e+q,c4],
						 [e+e,c4],[e,d4],[e,c4],[q,b3],
						 [e+e,b3],[e,c4],[e+q,b3],
						 [e+e,b3],[e,c4],[e,b3],[q,a3],
						 [e+e,a3],[e,b3],[e+q,a3],
						 [e+e,a3],[e,b3],[e+q,a3],
						 [e+e,a3],[e,b3],[e,a3],[q,gs3],
						 [e+e,gs3],[e,a3],[e,gs3],[q,a3],
						 [e+e,a3],[e,b3],[e+q,a3],
						 [e+e,e4],[e,fs4],[e,gs4],[q,a4],
						 [e+e,a4],[e,b4],[e,a4],[q,c5],
						 [e+e,c5],[e,b4],[e,a4],[q,b4],
						 [e+e,b4],[e,gs4],[e,e4],[q,a4],
						 [e+e,a4],[e,b4],[e,a4],[q,c5],
						 [e+e,c5],[e,b4],[e,a4],[q,g4],
						 [e,g4],[e,d4],[e,g4],[q,f4],[q,e4],
						 [e,e4],[e,gs4],[e,a4],[e,b4],[q,c5],
						 [e+e,c5],[e,e5],[e,c5],[q,bb4],
						 [e+e,bb4],[e,d5],[e,bb4],[q,a4],
						 [e+e,a4],[e,gs4],[e,a4],[q,a4],
						 [e+e,a4],[e,b4],[e,a4],[q,g4],
						 [e+e,g4],[e,a4],[e,g4],[q,f4],
						 [e+e,f4],[e,g4],[e,g4],[q,e4],
						 [e+e,e4],[e,f4],[e+q+q+q,e4]];

	var autumnLeaves = [[q,e4],[q,fs4],[q,g4],[w+q,c5],
						[q,d4],[q,e4],[q,fs4],[w+q,b4],
						[q,c4],[q,d4],[q,e4],[w+q,a4],
						[q,b3],[q,cs4],[q,ds4],[w+q,g4],
						[q,e4],[q,fs4],[q,g4],[w+q,c5],
						[q,d4],[q,e4],[q,fs4],[w+q,b4],
						[q,c4],[q,d4],[q,e4],[w+q,a4],
						[q,fs4],[q,a4],[q,g4],[w+h,e4],
						[q,ds4],[q,e4],[q,fs4],[q,b3],[h+q,fs4],
						[q,fs4],[q,e4],[q,fs4],[w+q,g4],
						[q,g4],[q,fs4],[q,g4],[w+q,a4],
						[q,d4],[q+e,d5],[e,c5],[w+h,b4],
						[q,as4],[q,b4],[q+q,c5],[q+q,a4],[h+q,fs4],
						[q,c5],[h+w,b4],[h,e4],[h+q,a4],[q,g4],[h,fs4],[q,g4],[q,b3],[w+w,e4]];

	var iFallInLoveTooEasily = 
	[[q,c5],[e,b4],[e,c5],[q+e,bb4],[e,a4],[e,g4],[e,a4],[h+q,g4],
	[q,a4],[e,g4],[e,a4],[q+e,g4],[e,f4],[w,e4],
	[q,f4],[e,e4],[e,f4],[q+e,eb4],[e,d4],[e,c4],[e,d4],[e,eb4],[e+h,g4],[q,fs4],[e,g4],[e,a4],[q+q+w,d5],
	[q,eb5],[e,d5],[e,eb5],[q+e,d5],[e,c5],[h+e,b4],[e,g4],[e,a4],[e,g4],[h+q,c5],[e,bb4],[e,c5],[h+e,ab4],[e,g4],[e,ab4],[e,g4],[q+e+e,c5],[q+e,bb4],[e,ab4],[q/3,g4],[q/3,ab4],[(q/3)+h+q+q,g4],[e,f4],[e,e4],[q+e+e,g4],[w,eb4]];

	// ~76pbm
	var pathetiqueAndante = [[e,fs5],[e,e5],[e,d5],[e,b4],[e,a4],[e,fs4],[e,a4],[q+e,d5],[e,b4],[h+e,a4],
	[e,fs5],[e,e5],[e,d5],[e,a4],[e,fs4],[e,d4],[e,fs4],[q+e,b4],[e+h,a4],
	[q,a5],[e,g5],[e,fs5],[q,fs5],[q,e5],[q,g5],[e,fs5],[e,e5],[q,e5],[q,d5],
	[e,fs5],[e,e5],[e,d5],[e,a4],[e,fs4],[e,d4],[e,fs4],[q+e,b4],[e+h,a4],
	[q,a5],[e,g5],[e,fs5],[q,fs5],[q,e5],[q,g5],[e,fs5],[e,e5],[q,e5],[q,d5],
	[e,fs5],[e,e5],[e,d5],[e,a4],[e,fs4],[e,d4],[e,fs4],[q+e,b4],
	[e,a4],[q,fs5],[e,fs5],[e+s,c6],[e,fs6],[h,b5],[q+e,b5],[e,e6],[h,a5],[q+e,a5],[e,c6],[q+e,gs5],[e,b5],[q+e,g5],[e,as5],[q+e,fs5],[e,a5],[h,d5]];

	var michelle = [[h,c5],[h,c5],[q,c5],[q,db5],[h,ab4],[q,g4],[q,c5],[q,g4],[q,g4],[q,f4],[q,ab4],[q,b4],[q,ab4],[h,g4],[q,f4],[q,ab4],[w,g4],
	[h,c5],[h,c5],[q,c5],[q,db5],[h,ab4],[q,g4],[q,c5],[q,g4],[q,g4],[q,f4],[q,ab4],[q,b4],[q,ab4],[h,g4],[q/3,f4],[q/3,g4],[q/3,ab4],[h+q+e,g4],
	[e,c5],[h/3,f5],[h/3,eb5],[h/3,c5],[h/3,f5],[h/3,eb5],[h/3,c5],[q,g5],[h+q+e,f5],[e,c5],[e,db5],[e,c5],[h/3,c5],[h/3,db5],[h/3,ab4],[w+e,ab4],
	[e,c5],[e+s,c5],[s,c5],[q,f5],[q,c5],[e,bb4],[h,a4],[e,a4],[q,bb4],[q+q+q+q+q+q+q+q+h,c5],[q,bb4],[q,ab4],[w,g4]];

	var girl = [[e+s,c5],[s,d5],[e,eb5],[e,eb5],[e,eb5],[e,eb5],[e,f5],[e,eb5],[e,d5],[e,c5],[q,c5],[q,g4],[q,c5],[q,bb4],[e+s,ab4],[s,c5],[e+s,b4],[s,c5],[e+s,d5],[s,c5],[e+s,b4],[s,ab4],[h+q,g4],
	[e,c5],[e,d5],[e,eb5],[e,eb5],[e,eb5],[e,eb5],[e,f5],[e,eb5],[e,d5],[e,c5],[q,c5],[q,g4],[q,c5],[q,bb4],[e+s,ab4],[s,c5],[e+s,b4],[s,c5],[e+s,d5],[s,c5],[e+s,b4],[s,ab4],[h+q,g4],
	[e+s,c5],[s,bb4],[h,bb4],[q/3,c5],[q/3,bb4],[q/3,g4],[q,g4],[w,g4],[e+s,c5],[s,bb4],[h,bb4],[q/3,c5],[q/3,bb4],[q/3,g4],[q,g4],[w,g4],
	[w+w,c5],[q,f5],[q+w,eb5],[w+w,c5],[q,f5],[q,eb5],[q,f5],[q,eb5],[q,f5],[q,eb5],[h,f5],[h,bb4],[q/3,c5],[q/3,bb4],[q/3,g4],[q,g4],[w,g4],[e+s,c5],[s,bb4],[h,bb4],[q/3,c5],[q/3,bb4],[q/3,g4],[q,g4],[w,g4]];

	var barcarolle = [[e,d4],[e,e4],[e,fs4],[e,g4],[e,a4],[e,bb4],[e,c5],[e,d5],[e,g5],[e,fs5],[e,g5],[h+e,d5],[e,d5],[e,a4],[e,c5],[h+e,bb4],[e,bb4],[e,fs4],[e,a4],[h+e,g4],
	[e,d4],[e,e4],[e,fs4],[e,g4],[e,a4],[e,bb4],[e,c5],[e,d5],[e,g5],[e,f5],[e,g5],[h+e,d5],[e,f5],[e,eb5],[e,f5],[h+e,c5],[e,eb5],[e,d5],[e,eb5],[h+e,bb4],[e,d5],[e,c5],[e,d5],[e,c5],[e,bb4],[e,a4],[e,g4],[q+e,bb4],[e,a4],[h+e,g4],
	[e,g4],[e,a4],[e,bb4],[e,c5],[e,d5],[e,eb5],[e,f5],[e,g5],[e,a5],[e,bb5],[e,c6],[h+e,f5],[e,f5],[e,g5],[e,bb5],[h+e,eb5],[e,eb5],[e,f5],[e,a5],[h+e,d5],
	[e,g4],[e,a4],[e,bb4],[e,c5],[e,d5],[e,eb5],[e,f5],[e,g5],[e,a5],[e,bb5],[e,c6],[h+e,d5],[e,d5],[e,e5],[e,fs5],[h+e,g5],[e,d5],[e,c5],[e,bb4],[h+e,fs5],
	[e,c5],[e,bb4],[e,a4],[e,g5],[e,d5],[e,cs5],[e,d5],[e,eb5],[e,d5],[e,bb4],[e+h,g4]];

	var sym40 = [[e,eb5],[e+q,d5],[e,eb5],[e+q,d5],[e,eb5],[e+q,d5],[q+q,bb5],[e,bb5],[e,a5],[q,g5],[e,g5],[e,f5],[q,eb5],[e,eb5],[e,d5],[q+q+q,c5],
				 [e,d5],[e+q,c5],[e,d5],[e+q,c5],[e,d5],[e+q,c5],[q+q,a5],[e,a5],[e,g5],[q,fs5],[e,fs5],[e,eb5],[q,d5],[e,d5],[e,c5],[q+q+q,bb4],
				 [e,bb5],[e,a5],[q,a5],[q,c6],[q,fs5],[q,a5],[q,g5],[q+q,d5],[e,bb5],[e,a5],[q,a5],[q,c6],[q,fs5],[q,a5],[q,g5],[q,bb5],[e,a5],[e,g5],[e,f5],[e,eb5],[q,d5],[q,fs5],[q,g5],[q,a5],[q,bb5],[e,c6],[e,bb5],[q,a5],[q,g5],[h,fs5],
				 [h,cs6],[h,d6],[h,cs6],[h,d6],[h,cs6],[q,d6],[q,cs6],[q,d6],[q,cs6],[h,d6]];

	//~72bpm
	var blueInGreen = [[h+q,e5],[q,d5],[h+q,c5],[q,bb4],[h+q,a4],[q,g4],[q,f4],[h+q,d5],[q+e,e4],[e,d4],[e,cs4],[e,d4],[e,f4],[e,a4],[h+q,c5],[q,a4],[h+q,g4],[q,f4],[h+q,c5],[q,gs4],[h+q,b4],[q,a4],[h+q,f5],[q,cs5],
					   [h+q,e5],[q,d5],[h+q,c5],[q,bb4],[h+q,a4],[q,g4],[q,f4],[h+q,d5],[q+e,e4],[e,d4],[e,cs4],[e,d4],[e,f4],[e,a4],[h+q,c5],[q,a4],[h+q,g4],[q,f4],[h+q,c5],[q,gs4],[h+q,b4],[q,a4],[h+q,g5],[q,f5],[h+q,e5],[q,d5],[h+q,c5],[q,bb4],[w,a4]];


	var mahler5 = [[q+e,cs4],[e,ds4],[h,e4],[h,gs4],[h, gs4],[q+e,fs4],[e,e4],[h,ds4],[h,c4],[h,c4],[q+e,ds4],[e,e4],[h,fs4],[h,fs4],[q+e,fs4],[s,gs4],[s,fs4],[q+e,e4],[e,ds4],[q,ds4],[q,e4],[h,e4],[h,e4],
	[q+e,cs4],[e,ds4],[h,e4],[h,cs5],[h,cs5],[q+e,b4],[e,a4],[h,fs4],[h,ds4],[h,ds4],[q+e,cs5],[e,b4],[q+e,b4],[e,a4],[q+e,cs5],[e,b4],[q+e,b4],[e,a4],[q+e,gs4],[e,g4],[h,g4],[h,gs4],[h,gs4],[h,e4],[q,ds4],[w,ds4],[h,ds4],[h/3,cs4],[h/3,ds4],[h/3,e4],[w,ds4],[h,ds4],[w,ds4],[h,ds4],[h/3,cs4],[h/3,ds4],[h/3,e4],[h+q,b3],[q/3,b3],[q/3,cs4],[q/3,ds4],[h+q,a3],[q/3,a3],[q/3,b3],[q/3,cs4],[w+q,gs2]];
	
	var melodies = [ 
		[neMeQuittePas,"Ne Me Quitte Pas\n(Jacques Brel)\n1959"], 
		[girl, "Girl\n(John Lennon)\n1965"],
		[pathetiqueAndante, "Symphony No. 6 - Andante\n(P.I. Tchaikovsky)\n1893"],
		[michelle, "Michelle\n(Paul McCartney)\n1965"],
		[barcarolle, "Barcarolle\n(P.I. Tchaikovsky)\n1876"],
		[iFallInLoveTooEasily,"I Fall In Love Too Easily\n(Jule Styne)\n1944"],
		[sym40, "Symphony No. 40 - Allegro Molto\n(W.A. Mozart)\n1788"],
		[blueInGreen, "Blue In Green\n(Bill Evans)\n1959"],
		[mahler5, "Symphony No. 5 - Trauermarsch\n(Gustav Mahler)\n1902"],
		[edelweiss, "Edelweiss\n(Richard Rodgers)\n1959"]

	];

	// melody curve function definition
	var cumulativeX = 0;
	var xUnit = columnWidth;
	var yUnit = rowHeight;
	var yAxisLength = rowHeight*numRows;
	var melodyPath = "";

	var drawMelodicCurve = function(melody){
	var cumulativeX = 0;
	var xUnit = columnWidth;
	var yUnit = rowHeight;
	var yAxisLength = rowHeight*numRows;
	var melodyPath = "";
		for(var i = 0; i < melody.length; i++){
			// note durations (x values) have to be added 
			cumulativeX+=melody[i][0]*xUnit; 
			// pitches (y values) have to be subtracted from y axis length 
			// to work like a normal graph that has its origin at the bottom left corner
			adjustedY=yAxisLength - melody[i][1]*yUnit; 
			if(i == 0){
				melodyPath+= "M0 " + /*yAxisLength + " V" +*/  adjustedY + " H" + cumulativeX;
			}
			else{
				// if(melody[i][0] <= e)// idealizes curve by getting rid of notes shorter than a quarter
				// 	melodyPath+= " H" + cumulativeX;
				// else
				melodyPath+= " V" + adjustedY + " H" + cumulativeX;
				//if(i == melody.length-1)
					//melodyPath+= " V" + yAxisLength + "z";
			}
		}
		return melodyPath;	
	}

	// draw the grid
	//drawGrid(numColumns, numRows, columnWidth, rowHeight, 0.5, "#898989");

		// var i = 10;
		// var f = function(){
		// 	paper.path("M" + i + ",10" + "H" + (i + 10));
		// 	i+=5;
		// 	if(i > 1000)
		// 		clearInterval(interval);
		// }

		// var interval = setInterval(f,50);
		
	// draw melody curve
	var p = paper.path(drawMelodicCurve(neMeQuittePas));

	var counter = 1;
	var transition = function(){
			// transition to the next melody over 3 seconds
			p.animate({path : drawMelodicCurve(melodies[counter][0])}, 3000, "easein");
			// change the melody name, fading in over 2 seconds
			title.attr({text : melodies[counter][1], opacity : 0})
				 .animate({opacity : 1}, 2000);
			// conditions for melodies to loop
			if(counter == melodies.length-1)
				counter = 0;
			else
				counter++;
	};
	var sun = paper.circle(120,40,20)
		.attr({
			cursor : "pointer",
			stroke : "none",
			fill: 'r(0.7,0.7)#F4D03F-#D35400'
		})
		.click(transition)

	var title = paper.text(500,350, "Ne Me Quitte Pas\n(Jacques Brel)\n1959")
	.attr({"font-size" : 16, "font-family": "Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif"});

	var instruction = paper.text(125,0,"Click the sun to see different melodic skylines!")
	.attr({"font-size" : 12, "font-family": "Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif"});		
});