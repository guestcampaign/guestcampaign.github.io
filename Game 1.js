(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Game 1_atlas_1", frames: [[0,432,1052,430],[0,1492,1344,124],[0,993,1982,124],[1054,626,992,124],[1134,0,844,127],[1034,1618,957,127],[0,1618,1032,127],[0,864,1970,127],[0,1119,1881,127],[0,1370,1389,120],[0,1248,1647,120],[0,1747,980,119],[1054,432,920,192],[0,0,1132,430]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Cabin = function() {
	this.initialize(img.Cabin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3751,1667);


(lib.guest = function() {
	this.initialize(img.guest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4166,224);


(lib.instructions = function() {
	this.initialize(img.instructions);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2553,1110);


(lib.play = function() {
	this.initialize(ss["Game 1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Q1 = function() {
	this.initialize(img.Q1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3528,413);


(lib.Q10 = function() {
	this.initialize(img.Q10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3541,426);


(lib.Q10A1 = function() {
	this.initialize(img.Q10A1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3312,119);


(lib.Q10A2 = function() {
	this.initialize(img.Q10A2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3906,119);


(lib.Q10A3 = function() {
	this.initialize(img.Q10A3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3496,126);


(lib.Q10A4 = function() {
	this.initialize(img.Q10A4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3791,244);


(lib.Q1A1pngcopy = function() {
	this.initialize(ss["Game 1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Q1A2pngcopy = function() {
	this.initialize(img.Q1A2pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3348,124);


(lib.Q1A3pngcopy = function() {
	this.initialize(ss["Game 1_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Q1A4 = function() {
	this.initialize(ss["Game 1_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Q2 = function() {
	this.initialize(img.Q2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3528,413);


(lib.Q2A1 = function() {
	this.initialize(img.Q2A1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3651,244);


(lib.Q2A2 = function() {
	this.initialize(img.Q2A2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3651,244);


(lib.Q2A3pngcopy = function() {
	this.initialize(img.Q2A3pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3648,244);


(lib.Q2A4 = function() {
	this.initialize(img.Q2A4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3392,127);


(lib.Q3 = function() {
	this.initialize(img.Q3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3528,413);


(lib.Q3A1 = function() {
	this.initialize(ss["Game 1_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Q3A2 = function() {
	this.initialize(img.Q3A2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2318,127);


(lib.Q3A3 = function() {
	this.initialize(img.Q3A3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2900,127);


(lib.Q3A4 = function() {
	this.initialize(ss["Game 1_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Q4 = function() {
	this.initialize(img.Q4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3528,413);


(lib.Q4A1 = function() {
	this.initialize(img.Q4A1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4257,119);


(lib.Q4A2 = function() {
	this.initialize(img.Q4A2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3341,126);


(lib.Q4A3 = function() {
	this.initialize(img.Q4A3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3058,119);


(lib.Q4A4 = function() {
	this.initialize(img.Q4A4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3795,244);


(lib.Q5 = function() {
	this.initialize(img.Q5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3528,413);


(lib.Q5A1 = function() {
	this.initialize(ss["Game 1_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Q5A2 = function() {
	this.initialize(ss["Game 1_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Q5A3 = function() {
	this.initialize(ss["Game 1_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Q5A4 = function() {
	this.initialize(ss["Game 1_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Q6 = function() {
	this.initialize(img.Q6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3541,426);


(lib.Q6A1 = function() {
	this.initialize(img.Q6A1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3280,127);


(lib.Q6A2 = function() {
	this.initialize(img.Q6A2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2473,127);


(lib.Q6A3 = function() {
	this.initialize(img.Q6A3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3651,244);


(lib.Q6A4 = function() {
	this.initialize(img.Q6A4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2609,119);


(lib.Q7 = function() {
	this.initialize(img.Q7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3528,413);


(lib.Q7A1 = function() {
	this.initialize(img.Q7A1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3543,119);


(lib.Q7A2 = function() {
	this.initialize(img.Q7A2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4025,119);


(lib.Q7A3 = function() {
	this.initialize(img.Q7A3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3341,119);


(lib.Q7A4 = function() {
	this.initialize(img.Q7A4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4209,119);


(lib.Q8 = function() {
	this.initialize(img.Q8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3528,413);


(lib.Q8A1 = function() {
	this.initialize(img.Q8A1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3890,120);


(lib.Q8A2 = function() {
	this.initialize(img.Q8A2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2412,120);


(lib.Q8A3 = function() {
	this.initialize(ss["Game 1_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Q8A4 = function() {
	this.initialize(ss["Game 1_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Q9 = function() {
	this.initialize(img.Q9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3528,413);


(lib.Q9A1 = function() {
	this.initialize(img.Q9A1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4286,244);


(lib.Q9A2 = function() {
	this.initialize(img.Q9A2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3551,119);


(lib.Q9A3 = function() {
	this.initialize(img.Q9A3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4286,244);


(lib.Q9A4 = function() {
	this.initialize(img.Q9A4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4410,244);


(lib.score = function() {
	this.initialize(ss["Game 1_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.start = function() {
	this.initialize(ss["Game 1_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.thankyou = function() {
	this.initialize(img.thankyou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2804,1083);


(lib.title = function() {
	this.initialize(img.title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2079,415);


(lib.Start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.start();
	this.instance.setTransform(-15.55,14.45,0.3402,0.3402);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AyqNSQh+AAhahZQhZhaAAh9IAAxCQAAh/BZhZQBahZB+AAMAlWAAAQB+AABYBZQBaBZAAB/IAARCQAAB9haBaQhYBZh+AAg");
	this.shape.setTransform(175.2129,89.1753,1.364,1.1946);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCCC").s().p("AyqNSQh+AAhahZQhZhaAAh9IAAxCQAAh/BZhZQBahZB+AAMAlWAAAQB+AABYBZQBaBZAAB/IAARCQAAB9haBaQhYBZh+AAg");
	this.shape_1.setTransform(175.0567,89.2941,1.4972,1.3113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:0.3402,scaleY:0.3402,x:-15.55,y:14.45}}]}).to({state:[{t:this.shape_1},{t:this.instance,p:{scaleX:0.3734,scaleY:0.3734,x:-34.2,y:7.1}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-22.1,449.2,222.9);


(lib.Play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.play();
	this.instance.setTransform(16.3,13.35,0.2978,0.2978);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AyqNSQh+AAhahZQhZhaAAh9IAAxCQAAh/BZhZQBahZB+AAMAlWAAAQB+AABYBZQBaBZAAB/IAARCQAAB9haBaQhYBZh+AAg");
	this.shape.setTransform(174.4207,79.6267,1.2027,1.0533);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCCC").s().p("AyqNSQh+AAhahZQhZhaAAh9IAAxCQAAh/BZhZQBahZB+AAMAlWAAAQB+AABYBZQBaBZAAB/IAARCQAAB9haBaQhYBZh+AAg");
	this.shape_1.setTransform(174.3308,79.6089,1.3037,1.1418);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:0.2978,scaleY:0.2978,x:16.3,y:13.35}}]}).to({state:[{t:this.shape_1},{t:this.instance,p:{scaleX:0.3227,scaleY:0.3227,x:2.95,y:7.75}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-17.4,391.09999999999997,194.1);


(lib.Forms = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A85nzMA5zAAAIAAPnMg5zAAAg");
	this.shape.setTransform(185,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A85H0IAAvnMA5zAAAIAAPng");
	this.shape_1.setTransform(185,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,372,102);


(lib.Answer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eh3MAH+QiwAAAAiwIAAqbQAAiwCwAAMDuZAAAQCwAAAACwIAAKbQAACwiwAAg");
	this.shape.setTransform(786.0122,51,1.007,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#34C6F4").s().p("Eh3MAH+QiwAAAAiwIAAqbQAAiwCwAAMDuZAAAQCwAAAACwIAAKbQAACwiwAAg");
	this.shape_1.setTransform(786.0122,51,1.007,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1572,102);


// stage content:
(lib.Game1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,12];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var count = 0;
		this.total.text = 0;
		
		this.Play1.addEventListener("click", play1.bind(this));
		
		function play1()
		{
			this.Play1.removeEventListener("click", play1.bind(this));	
			this.gotoAndStop(1);
		}
		
		this.Start1.addEventListener("click", start1.bind(this));
		
		function start1()
		{
			this.Start1.removeEventListener("click", start1.bind(this));	
			this.gotoAndStop(2);
		}
		
		this.Answer1a.addEventListener("click", next1.bind(this));
		
		function next1()
		{
			this.Answer1a.removeEventListener("click", next1.bind(this));
			this.gotoAndStop(3);
		}
		
		this.Answer1b.addEventListener("click", next2.bind(this));
		
		function next2()
		{
			this.Answer1b.removeEventListener("click", next2.bind(this));
			this.gotoAndStop(3);
		}
		
		this.Answer1c.addEventListener("click", next3.bind(this));
		
		function next3()
		{
			this.Answer1c.removeEventListener("click", next3.bind(this));
			this.gotoAndStop(3);
		}
		
		this.Answer1d.addEventListener("click", next4.bind(this));
		
		function next4()
		{
			this.Answer1d.removeEventListener("click", next4.bind(this));
			this.gotoAndStop(3);
			count=count+1;
			this.total.text=count;
		}
		
		this.Answer2a.addEventListener("click", next5.bind(this));
		
		function next5()
		{
			this.Answer2a.removeEventListener("click", next5.bind(this));
			this.gotoAndStop(4);
		}
		
		this.Answer2b.addEventListener("click", next6.bind(this));
		
		function next6()
		{
			this.Answer2b.removeEventListener("click", next6.bind(this));
			this.gotoAndStop(4);
		}
		
		this.Answer2c.addEventListener("click", next7.bind(this));
		
		function next7()
		{
			this.Answer2c.removeEventListener("click", next7.bind(this));
			this.gotoAndStop(4);
			count=count+1;
			this.total.text=count;
		}
		
		this.Answer2d.addEventListener("click", next8.bind(this));
		
		function next8()
		{
			this.Answer2d.removeEventListener("click", next8.bind(this));
			this.gotoAndStop(4);
		}
		
		this.Answer3a.addEventListener("click", next9.bind(this));
		
		function next9()
		{
			this.Answer3a.removeEventListener("click", next9.bind(this));
			this.gotoAndStop(5);
		}
		
		this.Answer3b.addEventListener("click", next10.bind(this));
		
		function next10()
		{
			this.Answer3b.removeEventListener("click", next10.bind(this));
			this.gotoAndStop(5);
		}
		
		this.Answer3c.addEventListener("click", next11.bind(this));
		
		function next11()
		{
			this.Answer3c.removeEventListener("click", next11.bind(this));
			this.gotoAndStop(5);
		}
		
		this.Answer3d.addEventListener("click", next12.bind(this));
		
		function next12()
		{
			this.Answer3d.removeEventListener("click", next12.bind(this));
			this.gotoAndStop(5);
			count=count+1;
			this.total.text=count;
		}
		
		this.Answer4a.addEventListener("click", next13.bind(this));
		
		function next13()
		{
			this.Answer4a.removeEventListener("click", next13.bind(this));
			this.gotoAndStop(6);
			count=count+1;
			this.total.text=count;
		}
		
		this.Answer4b.addEventListener("click", next14.bind(this));
		
		function next14()
		{
			this.Answer4b.removeEventListener("click", next14.bind(this));
			this.gotoAndStop(6);
		}
		
		this.Answer4c.addEventListener("click", next15.bind(this));
		
		function next15()
		{
			this.Answer4c.removeEventListener("click", next15.bind(this));
			this.gotoAndStop(6);
		}
		
		this.Answer4d.addEventListener("click", next16.bind(this));
		
		function next16()
		{
			this.Answer4d.removeEventListener("click", next16.bind(this));
			this.gotoAndStop(6);
		}
		
		this.Answer5a.addEventListener("click", next17.bind(this));
		
		function next17()
		{
			this.Answer5a.removeEventListener("click", next17.bind(this));
			this.gotoAndStop(7);
		}
		
		this.Answer5b.addEventListener("click", next18.bind(this));
		
		function next18()
		{
			this.Answer5b.removeEventListener("click", next18.bind(this));
			this.gotoAndStop(7);
		}
		
		this.Answer5c.addEventListener("click", next19.bind(this));
		
		function next19()
		{
			this.Answer5c.removeEventListener("click", next19.bind(this));
			this.gotoAndStop(7);
		}
		
		this.Answer5d.addEventListener("click", next20.bind(this));
		
		function next20()
		{
			this.Answer5d.removeEventListener("click", next20.bind(this));
			this.gotoAndStop(7);
			count=count+1;
			this.total.text=count;
		}
		
		this.Answer6a.addEventListener("click", next21.bind(this));
		
		function next21()
		{
			this.Answer6a.removeEventListener("click", next21.bind(this));
			this.gotoAndStop(8);
		}
		
		this.Answer6b.addEventListener("click", next22.bind(this));
		
		function next22()
		{
			this.Answer6b.removeEventListener("click", next22.bind(this));
			this.gotoAndStop(8);
		}
		
		this.Answer6c.addEventListener("click", next23.bind(this));
		
		function next23()
		{
			this.Answer6c.removeEventListener("click", next23.bind(this));
			this.gotoAndStop(8);
			count=count+1;
			this.total.text=count;
		}
		
		this.Answer6d.addEventListener("click", next24.bind(this));
		
		function next24()
		{
			this.Answer6d.removeEventListener("click", next24.bind(this));
			this.gotoAndStop(8);
		}
		
		this.Answer7a.addEventListener("click", next25.bind(this));
		
		function next25()
		{
			this.Answer7a.removeEventListener("click", next25.bind(this));
			this.gotoAndStop(9);
		}
		
		this.Answer7b.addEventListener("click", next40.bind(this));
		
		function next40()
		{
			this.Answer7b.removeEventListener("click", next40.bind(this));
			this.gotoAndStop(9);
		}
		
		this.Answer7c.addEventListener("click", next26.bind(this));
		
		function next26()
		{
			this.Answer7c.removeEventListener("click", next26.bind(this));
			this.gotoAndStop(9);
		}
		
		this.Answer7d.addEventListener("click", next27.bind(this));
		
		function next27()
		{
			this.Answer7d.removeEventListener("click", next27.bind(this));
			this.gotoAndStop(9);
			count=count+1;
			this.total.text=count;
		}
		
		this.Answer8a.addEventListener("click", next28.bind(this));
		
		function next28()
		{
			this.Answer8a.removeEventListener("click", next28.bind(this));
			this.gotoAndStop(10);
		}
		
		this.Answer8b.addEventListener("click", next29.bind(this));
		
		function next29()
		{
			this.Answer8b.removeEventListener("click", next29.bind(this));
			this.gotoAndStop(10);
		}
		
		this.Answer8c.addEventListener("click", next30.bind(this));
		
		function next30()
		{
			this.Answer8c.removeEventListener("click", next30.bind(this));
			this.gotoAndStop(10);
		}
		
		this.Answer8d.addEventListener("click", next31.bind(this));
		
		function next31()
		{
			this.Answer8d.removeEventListener("click", next31.bind(this));
			this.gotoAndStop(10);
			count=count+1;
			this.total.text=count;
		}
		
		this.Answer9a.addEventListener("click", next32.bind(this));
		
		function next32()
		{
			this.Answer9a.removeEventListener("click", next32.bind(this));
			this.gotoAndStop(11);
		}
		
		this.Answer9b.addEventListener("click", next33.bind(this));
		
		function next33()
		{
			this.Answer9b.removeEventListener("click", next33.bind(this));
			this.gotoAndStop(11);
			count=count+1;
			this.total.text=count;
		}
		
		this.Answer9c.addEventListener("click", next34.bind(this));
		
		function next34()
		{
			this.Answer9c.removeEventListener("click", next34.bind(this));
			this.gotoAndStop(11);
		}
		
		this.Answer9d.addEventListener("click", next35.bind(this));
		
		function next35()
		{
			this.Answer9d.removeEventListener("click", next35.bind(this));
			this.gotoAndStop(11);
		}
		
		this.Answer10a.addEventListener("click", next36.bind(this));
		
		function next36()
		{
			this.Answer10a.removeEventListener("click", next36.bind(this));
			this.gotoAndStop(12);
			count=count+1;
			this.total.text=count;
		}
		
		this.Answer10b.addEventListener("click", next37.bind(this));
		
		function next37()
		{
			this.Answer10b.removeEventListener("click", next37.bind(this));
			this.gotoAndStop(12);
		}
		
		this.Answer10c.addEventListener("click", next38.bind(this));
		
		function next38()
		{
			this.Answer10c.removeEventListener("click", next38.bind(this));
			this.gotoAndStop(12);
		}
		
		this.Answer10d.addEventListener("click", next39.bind(this));
		
		function next39()
		{
			this.Answer10d.removeEventListener("click", next39.bind(this));
			this.gotoAndStop(12);
		}
		
		//count
		this.count = 0;
		this.totalToGo = 10;
		this.check = function (e) {
			if (!e.currentTarget.selected) {
				this.count++;
				e.currentTarget.selected = true;
			}
		};
		
		this.Answer1d.on("click", this.check, this);
		this.Answer2c.on("click", this.check, this);
		this.Answer3d.on("click", this.check, this);
		this.Answer4a.on("click", this.check, this);
		this.Answer5d.on("click", this.check, this);
		this.Answer6c.on("click", this.check, this);
		this.Answer7d.on("click", this.check, this);
		this.Answer8d.on("click", this.check, this);
		this.Answer9b.on("click", this.check, this);
		this.Answer10a.on("click", this.check, this);
		//count
	}
	this.frame_12 = function() {
		this.Forms.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage()
		{
		    window.open("https://forms.office.com/Pages/ResponsePage.aspx?id=DRts1THLhUqT4BH40qIV4CE5_9KDFRxCiHTLRQj57B1UNURZWkUzNzlLTjFLV1RSSjNWOUM0Qjg5Qi4u");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// Scene
	this.instance = new lib.Q1A1pngcopy();
	this.instance.setTransform(160.95,443.5,0.3468,0.3468);

	this.instance_1 = new lib.Q1A2pngcopy();
	this.instance_1.setTransform(161.1,584.55,0.3468,0.3468);

	this.instance_2 = new lib.Q1A3pngcopy();
	this.instance_2.setTransform(160.85,722,0.3468,0.3468);

	this.instance_3 = new lib.Q1A4();
	this.instance_3.setTransform(161,857,0.3468,0.3468);

	this.instance_4 = new lib.Q1();
	this.instance_4.setTransform(113,124,0.4455,0.4455);

	this.Answer1a = new lib.Answer();
	this.Answer1a.name = "Answer1a";
	this.Answer1a.setTransform(899,464,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer1a, 0, 1, 1);

	this.Answer1d = new lib.Answer();
	this.Answer1d.name = "Answer1d";
	this.Answer1d.setTransform(899,878.25,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer1d, 0, 1, 1);

	this.Answer1c = new lib.Answer();
	this.Answer1c.name = "Answer1c";
	this.Answer1c.setTransform(899,740.45,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer1c, 0, 1, 1);

	this.Answer1b = new lib.Answer();
	this.Answer1b.name = "Answer1b";
	this.Answer1b.setTransform(899,602.35,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer1b, 0, 1, 1);

	this.instance_5 = new lib.Q2A3pngcopy();
	this.instance_5.setTransform(160.75,699.25,0.3342,0.3342);

	this.instance_6 = new lib.Q2A4();
	this.instance_6.setTransform(161.2,858.3,0.3342,0.3342);

	this.instance_7 = new lib.Q2A1();
	this.instance_7.setTransform(160.05,425.5,0.3342,0.3342);

	this.instance_8 = new lib.Q2A2();
	this.instance_8.setTransform(160.2,563.05,0.3342,0.3342);

	this.Answer2a = new lib.Answer();
	this.Answer2a.name = "Answer2a";
	this.Answer2a.setTransform(899,464,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer2a, 0, 1, 1);

	this.Answer2d = new lib.Answer();
	this.Answer2d.name = "Answer2d";
	this.Answer2d.setTransform(899,878.25,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer2d, 0, 1, 1);

	this.Answer2c = new lib.Answer();
	this.Answer2c.name = "Answer2c";
	this.Answer2c.setTransform(899,740.45,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer2c, 0, 1, 1);

	this.Answer2b = new lib.Answer();
	this.Answer2b.name = "Answer2b";
	this.Answer2b.setTransform(899,602.35,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer2b, 0, 1, 1);

	this.instance_9 = new lib.Q2();
	this.instance_9.setTransform(113.1,124,0.4455,0.4455);

	this.instance_10 = new lib.Q3A1();
	this.instance_10.setTransform(160.7,444.55,0.3539,0.3539);

	this.instance_11 = new lib.Q3A2();
	this.instance_11.setTransform(160.8,581.95,0.3539,0.3539);

	this.instance_12 = new lib.Q3A3();
	this.instance_12.setTransform(160.8,722.35,0.3539,0.3539);

	this.instance_13 = new lib.Q3A4();
	this.instance_13.setTransform(160.7,855.55,0.3539,0.3539);

	this.Answer3a = new lib.Answer();
	this.Answer3a.name = "Answer3a";
	this.Answer3a.setTransform(899,464,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer3a, 0, 1, 1);

	this.Answer3d = new lib.Answer();
	this.Answer3d.name = "Answer3d";
	this.Answer3d.setTransform(899,878.25,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer3d, 0, 1, 1);

	this.Answer3c = new lib.Answer();
	this.Answer3c.name = "Answer3c";
	this.Answer3c.setTransform(899,740.45,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer3c, 0, 1, 1);

	this.Answer3b = new lib.Answer();
	this.Answer3b.name = "Answer3b";
	this.Answer3b.setTransform(899,602.35,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer3b, 0, 1, 1);

	this.instance_14 = new lib.Q3();
	this.instance_14.setTransform(113.1,124,0.4455,0.4455);

	this.instance_15 = new lib.Q4A1();
	this.instance_15.setTransform(162.4,444.25,0.3346,0.3346);

	this.instance_16 = new lib.Q4A2();
	this.instance_16.setTransform(161.75,585.35,0.3346,0.3346);

	this.instance_17 = new lib.Q4A3();
	this.instance_17.setTransform(161.75,722.65,0.3346,0.3346);

	this.instance_18 = new lib.Q4A4();
	this.instance_18.setTransform(161.75,838.2,0.3346,0.3346);

	this.Answer4a = new lib.Answer();
	this.Answer4a.name = "Answer4a";
	this.Answer4a.setTransform(899,464,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer4a, 0, 1, 1);

	this.Answer4d = new lib.Answer();
	this.Answer4d.name = "Answer4d";
	this.Answer4d.setTransform(899,878.25,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer4d, 0, 1, 1);

	this.Answer4c = new lib.Answer();
	this.Answer4c.name = "Answer4c";
	this.Answer4c.setTransform(899,740.45,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer4c, 0, 1, 1);

	this.Answer4b = new lib.Answer();
	this.Answer4b.name = "Answer4b";
	this.Answer4b.setTransform(899,602.35,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer4b, 0, 1, 1);

	this.instance_19 = new lib.Q4();
	this.instance_19.setTransform(113.1,124,0.4455,0.4455);

	this.instance_20 = new lib.Q5A1();
	this.instance_20.setTransform(159.7,444.2,0.3436,0.3436);

	this.instance_21 = new lib.Q5A2();
	this.instance_21.setTransform(161.55,583.2,0.3436,0.3436);

	this.instance_22 = new lib.Q5A3();
	this.instance_22.setTransform(161.85,720.2,0.3436,0.3436);

	this.instance_23 = new lib.Q5A4();
	this.instance_23.setTransform(162.35,856.2,0.3436,0.3436);

	this.Answer5a = new lib.Answer();
	this.Answer5a.name = "Answer5a";
	this.Answer5a.setTransform(899,464,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer5a, 0, 1, 1);

	this.Answer5d = new lib.Answer();
	this.Answer5d.name = "Answer5d";
	this.Answer5d.setTransform(899,878.25,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer5d, 0, 1, 1);

	this.Answer5c = new lib.Answer();
	this.Answer5c.name = "Answer5c";
	this.Answer5c.setTransform(899,740.45,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer5c, 0, 1, 1);

	this.Answer5b = new lib.Answer();
	this.Answer5b.name = "Answer5b";
	this.Answer5b.setTransform(899,602.35,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer5b, 0, 1, 1);

	this.instance_24 = new lib.Q5();
	this.instance_24.setTransform(113.05,124,0.4456,0.4456);

	this.instance_25 = new lib.Q6();
	this.instance_25.setTransform(113,120.4,0.4439,0.4439);

	this.instance_26 = new lib.Q6A1();
	this.instance_26.setTransform(160.05,445.3,0.3406,0.3406);

	this.instance_27 = new lib.Q6A2();
	this.instance_27.setTransform(159.4,584.15,0.3406,0.3406);

	this.instance_28 = new lib.Q6A3();
	this.instance_28.setTransform(159.05,699.5,0.3406,0.3406);

	this.instance_29 = new lib.Q6A4();
	this.instance_29.setTransform(159.85,859.2,0.3406,0.3406);

	this.Answer6a = new lib.Answer();
	this.Answer6a.name = "Answer6a";
	this.Answer6a.setTransform(899,464,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer6a, 0, 1, 1);

	this.Answer6d = new lib.Answer();
	this.Answer6d.name = "Answer6d";
	this.Answer6d.setTransform(899,878.25,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer6d, 0, 1, 1);

	this.Answer6c = new lib.Answer();
	this.Answer6c.name = "Answer6c";
	this.Answer6c.setTransform(899,740.45,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer6c, 0, 1, 1);

	this.Answer6b = new lib.Answer();
	this.Answer6b.name = "Answer6b";
	this.Answer6b.setTransform(899,602.35,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer6b, 0, 1, 1);

	this.instance_30 = new lib.Q7();
	this.instance_30.setTransform(113.1,124.3,0.4455,0.4455);

	this.instance_31 = new lib.Q7A1();
	this.instance_31.setTransform(159.55,446.75,0.3279,0.3279);

	this.instance_32 = new lib.Q7A2();
	this.instance_32.setTransform(159.1,583.9,0.3279,0.3279);

	this.instance_33 = new lib.Q7A3();
	this.instance_33.setTransform(159.6,721.9,0.3279,0.3279);

	this.instance_34 = new lib.Q7A4();
	this.instance_34.setTransform(159.55,856.75,0.3279,0.3279);

	this.Answer7a = new lib.Answer();
	this.Answer7a.name = "Answer7a";
	this.Answer7a.setTransform(899,464,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer7a, 0, 1, 1);

	this.Answer7d = new lib.Answer();
	this.Answer7d.name = "Answer7d";
	this.Answer7d.setTransform(899,878.25,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer7d, 0, 1, 1);

	this.Answer7c = new lib.Answer();
	this.Answer7c.name = "Answer7c";
	this.Answer7c.setTransform(899,740.45,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer7c, 0, 1, 1);

	this.Answer7b = new lib.Answer();
	this.Answer7b.name = "Answer7b";
	this.Answer7b.setTransform(899,602.35,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer7b, 0, 1, 1);

	this.instance_35 = new lib.Q8A1();
	this.instance_35.setTransform(159,446.7,0.3267,0.3267);

	this.instance_36 = new lib.Q8A2();
	this.instance_36.setTransform(159.7,584.6,0.3267,0.3267);

	this.instance_37 = new lib.Q8A3();
	this.instance_37.setTransform(159.75,722.8,0.3267,0.3267);

	this.instance_38 = new lib.Q8A4();
	this.instance_38.setTransform(158.55,860.15,0.3267,0.3267);

	this.Answer8a = new lib.Answer();
	this.Answer8a.name = "Answer8a";
	this.Answer8a.setTransform(899,464,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer8a, 0, 1, 1);

	this.Answer8d = new lib.Answer();
	this.Answer8d.name = "Answer8d";
	this.Answer8d.setTransform(899,878.25,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer8d, 0, 1, 1);

	this.Answer8c = new lib.Answer();
	this.Answer8c.name = "Answer8c";
	this.Answer8c.setTransform(899,740.45,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer8c, 0, 1, 1);

	this.Answer8b = new lib.Answer();
	this.Answer8b.name = "Answer8b";
	this.Answer8b.setTransform(899,602.35,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer8b, 0, 1, 1);

	this.instance_39 = new lib.Q8();
	this.instance_39.setTransform(113.1,124,0.4455,0.4455);

	this.instance_40 = new lib.Q9A1();
	this.instance_40.setTransform(163,427,0.3104,0.3104);

	this.instance_41 = new lib.Q9A2();
	this.instance_41.setTransform(163,585.95,0.3104,0.3104);

	this.instance_42 = new lib.Q9A3();
	this.instance_42.setTransform(163,702,0.3104,0.3104);

	this.instance_43 = new lib.Q9A4();
	this.instance_43.setTransform(163,841.25,0.3104,0.3104);

	this.Answer9a = new lib.Answer();
	this.Answer9a.name = "Answer9a";
	this.Answer9a.setTransform(899,464,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer9a, 0, 1, 1);

	this.Answer9d = new lib.Answer();
	this.Answer9d.name = "Answer9d";
	this.Answer9d.setTransform(899,878.25,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer9d, 0, 1, 1);

	this.Answer9c = new lib.Answer();
	this.Answer9c.name = "Answer9c";
	this.Answer9c.setTransform(899,740.45,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer9c, 0, 1, 1);

	this.Answer9b = new lib.Answer();
	this.Answer9b.name = "Answer9b";
	this.Answer9b.setTransform(899,602.35,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer9b, 0, 1, 1);

	this.instance_44 = new lib.Q9();
	this.instance_44.setTransform(113.1,124,0.4455,0.4455);

	this.instance_45 = new lib.Q10A1();
	this.instance_45.setTransform(161.65,446.8,0.3193,0.3193);

	this.instance_46 = new lib.Q10A2();
	this.instance_46.setTransform(161.7,584.85,0.3193,0.3193);

	this.instance_47 = new lib.Q10A3();
	this.instance_47.setTransform(161.9,723.9,0.3193,0.3193);

	this.instance_48 = new lib.Q10A4();
	this.instance_48.setTransform(161.55,840.1,0.3193,0.3193);

	this.Answer10a = new lib.Answer();
	this.Answer10a.name = "Answer10a";
	this.Answer10a.setTransform(899,464,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer10a, 0, 1, 1);

	this.Answer10d = new lib.Answer();
	this.Answer10d.name = "Answer10d";
	this.Answer10d.setTransform(899,878.25,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer10d, 0, 1, 1);

	this.Answer10c = new lib.Answer();
	this.Answer10c.name = "Answer10c";
	this.Answer10c.setTransform(899,740.45,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer10c, 0, 1, 1);

	this.Answer10b = new lib.Answer();
	this.Answer10b.name = "Answer10b";
	this.Answer10b.setTransform(899,602.35,1,1,0,0,0,786,51);
	new cjs.ButtonHelper(this.Answer10b, 0, 1, 1);

	this.instance_49 = new lib.Q10();
	this.instance_49.setTransform(113.1,124,0.4455,0.4455);

	this.Forms = new lib.Forms();
	this.Forms.name = "Forms";
	this.Forms.setTransform(846.05,761.1,0.9678,0.95,0,0,0,369.9,52.2);
	new cjs.ButtonHelper(this.Forms, 0, 1, 2, false, new lib.Forms(), 3);

	this.text = new cjs.Text("/", "normal 400 96px 'tk-droid-sans'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 116;
	this.text.lineWidth = 50;
	this.text.parent = this;
	this.text.setTransform(914.8929,317.7,1.689,1.689);
	if(!lib.properties.webfonts['tk-droid-sans']) {
		lib.webFontTxtInst['tk-droid-sans'] = lib.webFontTxtInst['tk-droid-sans'] || [];
		lib.webFontTxtInst['tk-droid-sans'].push(this.text);
	}

	this.total = new cjs.Text("", "96px 'Times'", "#FFFFFF");
	this.total.name = "total";
	this.total.textAlign = "center";
	this.total.lineHeight = 81;
	this.total.lineWidth = 93;
	this.total.parent = this;
	this.total.setTransform(794.7464,318.7,1.689,1.689);

	this.text_1 = new cjs.Text("10", "96px 'Times'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 81;
	this.text_1.lineWidth = 101;
	this.text_1.parent = this;
	this.text_1.setTransform(1025.1557,320.6,1.689,1.689);

	this.instance_50 = new lib.score();
	this.instance_50.setTransform(496.5,122,0.875,0.875);

	this.instance_51 = new lib.thankyou();
	this.instance_51.setTransform(335.45,587,0.4006,0.4006);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.Answer1b},{t:this.Answer1c},{t:this.Answer1d},{t:this.Answer1a},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.instance_9},{t:this.Answer2b},{t:this.Answer2c},{t:this.Answer2d},{t:this.Answer2a},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_14},{t:this.Answer3b},{t:this.Answer3c},{t:this.Answer3d},{t:this.Answer3a},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},1).to({state:[{t:this.instance_19},{t:this.Answer4b},{t:this.Answer4c},{t:this.Answer4d},{t:this.Answer4a},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]},1).to({state:[{t:this.instance_24},{t:this.Answer5b},{t:this.Answer5c},{t:this.Answer5d},{t:this.Answer5a},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]},1).to({state:[{t:this.Answer6b},{t:this.Answer6c},{t:this.Answer6d},{t:this.Answer6a},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]},1).to({state:[{t:this.Answer7b},{t:this.Answer7c},{t:this.Answer7d},{t:this.Answer7a},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30}]},1).to({state:[{t:this.instance_39},{t:this.Answer8b},{t:this.Answer8c},{t:this.Answer8d},{t:this.Answer8a},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35}]},1).to({state:[{t:this.instance_44},{t:this.Answer9b},{t:this.Answer9c},{t:this.Answer9d},{t:this.Answer9a},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40}]},1).to({state:[{t:this.instance_49},{t:this.Answer10b},{t:this.Answer10c},{t:this.Answer10d},{t:this.Answer10a},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45}]},1).to({state:[{t:this.instance_51},{t:this.instance_50},{t:this.text_1},{t:this.total},{t:this.text},{t:this.Forms}]},1).wait(1));

	// Instructions
	this.instance_52 = new lib.title();
	this.instance_52.setTransform(243.9,201.25,0.6307,0.6307);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#34C6F4").ss(50,1,1).p("EiMihZwMEZFAAAMAAACzhMkZFAAAg");
	this.shape.setTransform(900.3801,600.5652,1.0005,1.0443);

	this.Start1 = new lib.Start();
	this.Start1.name = "Start1";
	this.Start1.setTransform(903.05,897,0.7771,0.7771,0,0,0,177.5,88.1);
	new cjs.ButtonHelper(this.Start1, 0, 1, 1);

	this.instance_53 = new lib.instructions();
	this.instance_53.setTransform(342.5,260.05,0.4357,0.4357);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_52}]}).to({state:[{t:this.instance_53},{t:this.Start1},{t:this.shape}]},1).to({state:[]},1).wait(11));

	// Main
	this.instance_54 = new lib.guest();
	this.instance_54.setTransform(394.5,489.25,0.2436,0.2436);

	this.Play1 = new lib.Play();
	this.Play1.name = "Play1";
	this.Play1.setTransform(900.05,890,0.8995,0.8995,0,0,0,177.5,78.1);
	new cjs.ButtonHelper(this.Play1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Play1},{t:this.instance_54}]}).to({state:[]},1).wait(12));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("EiM0BS8MAAAil3MEZpAAAMAAACl3g");
	this.shape_1.setTransform(900.0182,600.0552,0.9985,1.1304);

	this.instance_55 = new lib.Cabin();
	this.instance_55.setTransform(-453.8,-3.95,0.7357,0.7357);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.898)").s().p("EiM0BS8MAAAil3MEZpAAAMAAACl3g");
	this.shape_2.setTransform(900.0182,600.0552,0.9985,1.1304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_55},{t:this.shape_1}]}).to({state:[]},1).to({state:[{t:this.instance_55},{t:this.shape_2}]},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(446.2,575.6,1859.6000000000001,649.9);
// library properties:
lib.properties = {
	id: '1943F7EE16114D118A12C55A3EF465A4',
	width: 1800,
	height: 1200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Cabin.jpg?1625103781837", id:"Cabin"},
		{src:"images/guest.png?1625103781837", id:"guest"},
		{src:"images/instructions.png?1625103781837", id:"instructions"},
		{src:"images/Q1.png?1625103781837", id:"Q1"},
		{src:"images/Q10.png?1625103781837", id:"Q10"},
		{src:"images/Q10A1.png?1625103781837", id:"Q10A1"},
		{src:"images/Q10A2.png?1625103781837", id:"Q10A2"},
		{src:"images/Q10A3.png?1625103781837", id:"Q10A3"},
		{src:"images/Q10A4.png?1625103781837", id:"Q10A4"},
		{src:"images/Q1A2pngcopy.png?1625103781837", id:"Q1A2pngcopy"},
		{src:"images/Q2.png?1625103781837", id:"Q2"},
		{src:"images/Q2A1.png?1625103781837", id:"Q2A1"},
		{src:"images/Q2A2.png?1625103781837", id:"Q2A2"},
		{src:"images/Q2A3pngcopy.png?1625103781837", id:"Q2A3pngcopy"},
		{src:"images/Q2A4.png?1625103781837", id:"Q2A4"},
		{src:"images/Q3.png?1625103781837", id:"Q3"},
		{src:"images/Q3A2.png?1625103781837", id:"Q3A2"},
		{src:"images/Q3A3.png?1625103781837", id:"Q3A3"},
		{src:"images/Q4.png?1625103781837", id:"Q4"},
		{src:"images/Q4A1.png?1625103781837", id:"Q4A1"},
		{src:"images/Q4A2.png?1625103781837", id:"Q4A2"},
		{src:"images/Q4A3.png?1625103781837", id:"Q4A3"},
		{src:"images/Q4A4.png?1625103781837", id:"Q4A4"},
		{src:"images/Q5.png?1625103781837", id:"Q5"},
		{src:"images/Q6.png?1625103781837", id:"Q6"},
		{src:"images/Q6A1.png?1625103781837", id:"Q6A1"},
		{src:"images/Q6A2.png?1625103781837", id:"Q6A2"},
		{src:"images/Q6A3.png?1625103781837", id:"Q6A3"},
		{src:"images/Q6A4.png?1625103781837", id:"Q6A4"},
		{src:"images/Q7.png?1625103781837", id:"Q7"},
		{src:"images/Q7A1.png?1625103781837", id:"Q7A1"},
		{src:"images/Q7A2.png?1625103781837", id:"Q7A2"},
		{src:"images/Q7A3.png?1625103781837", id:"Q7A3"},
		{src:"images/Q7A4.png?1625103781837", id:"Q7A4"},
		{src:"images/Q8.png?1625103781837", id:"Q8"},
		{src:"images/Q8A1.png?1625103781837", id:"Q8A1"},
		{src:"images/Q8A2.png?1625103781837", id:"Q8A2"},
		{src:"images/Q9.png?1625103781837", id:"Q9"},
		{src:"images/Q9A1.png?1625103781837", id:"Q9A1"},
		{src:"images/Q9A2.png?1625103781837", id:"Q9A2"},
		{src:"images/Q9A3.png?1625103781837", id:"Q9A3"},
		{src:"images/Q9A4.png?1625103781837", id:"Q9A4"},
		{src:"images/thankyou.png?1625103781837", id:"thankyou"},
		{src:"images/title.png?1625103781837", id:"title"},
		{src:"images/Game 1_atlas_1.png?1625103781469", id:"Game 1_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1943F7EE16114D118A12C55A3EF465A4'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;