(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"../images/f04.png", id:"f04"},
		{src:"../images/f04a.png", id:"f04a"},
		{src:"sounds/f16.mp3", id:"f16"}
	]
};

// stage content:
(lib.video1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation("synched",0,false);
	this.instance.setTransform(262,230.6,0.9,0.9,0,0,0,494.9,275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1396));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,274.5,538.1,553.7);


// symbols:
(lib.f04 = function() {
	this.initialize(img.f04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,481);


(lib.f04a = function() {
	this.initialize(img.f04a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,481);


(lib.Tween14 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.text = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("O2", "14px 'HelveticaNeue'");
	this.text.lineHeight = 16;
	this.text.setTransform(124,-10.8);

	// Layer 1
	this.text_1 = new cjs.Text("CO2", "14px 'HelveticaNeue'");
	this.text_1.lineHeight = 16;
	this.text_1.setTransform(-143.8,-9.5);

	this.addChild(this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143.8,-10.8,289.9,21.6);


(lib.Imageaa = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhIBZIhDgmQAKgmAVgkQAqhLA5ABQA3ABA1AiQAaARAPAQQgjACgjAMQhGAWgCA3QgCAkgfAAQgPAAgWgJg");
	mask.setTransform(102.5,265.3);

	// Layer 1
	this.instance = new lib.f04a();
	this.instance.setTransform(28,60.1);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(88.5,255.5,28.1,19.8);


(lib.Image = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.f04();
	this.instance.setTransform(28,60.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(28,60.1,177,480.9);


(lib.dsd = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FF9191","#D90000","#800000","#F56A6A"],[0,0.129,0.651,0.902,1],-0.6,-1,0,-0.6,-1,3.1).s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAGAAAHAGQAGAFAAAHQAAAIgGAFQgHAGgGAAQgHAAgFgGg");
	this.shape.setTransform(2.9,2.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,1,4,4);


(lib.blueparticle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#9DE2F2","#199DBF","#0F5E71","#74CDE2"],[0,0.102,0.573,0.878,1],-0.4,-0.9,0,-0.4,-0.9,3.4).s().p("AgQARQgIgIAAgJQAAgJAIgHQAHgIAJAAQAIAAAJAIQAIAHAAAJQAAAJgIAIQgJAIgIAAQgJAAgHgIg");
	this.shape.setTransform(0.1,0.1,1,1,0,0,0,0.1,0.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.502)").s().p("AgQARQgIgIAAgJQAAgJAIgHQAHgIAJAAQAIAAAJAIQAIAHAAAJQAAAJgIAIQgJAIgIAAQgJAAgHgIg");
	this.shape_1.setTransform(0.6,0.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,5.6,5.6);


(lib.background = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.557,1],-292.5,-77,292.6,-77).ss(1,1,1).p("EgtnAAAMBbPAAA");
	this.shape.setTransform(0,124);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.557,1],-292.5,19.5,292.6,19.5).ss(1,1,1).p("EAtoAAAMhbPAAA");
	this.shape_1.setTransform(0,-31.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.557,1],-327.1,147.6,327.2,147.6).ss(1,1,1).p("EgtnAAAMBbPAAA");
	this.shape_2.setTransform(0,-147.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAtoAMlIAKAAEgtngMkIgKAA");
	this.shape_3.setTransform(0,-228);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(252,248,243,0)","rgba(224,177,106,0.91)","rgba(255,255,255,0)","#FFFFFF","#FFFFFF"],[0,0.576,1,1,1],-245.5,2.9,219,2.9).s().p("EgtnAN8IAA5NIAAiqMBbPAAAIAACqIAAZNg");
	this.shape_4.setTransform(0,213.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(111,136,113,0.702)","rgba(251,174,23,0)"],[0,0.6,1],-169.6,26.5,140.5,26.5).s().p("EgtnAMJIAAgFIAA4MMBbPAAAIAAYMIAAAFg");
	this.shape_5.setTransform(0,46.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9E2C3").s().p("EgtnAACIAAgDMBbPAAAIAAADg");
	this.shape_6.setTransform(0,124.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(228,76,22,0.702)","rgba(251,174,23,0)"],[0,0.6,1],-212,46.7,166.9,46.7).s().p("EgtnAMlIAA5IMBbPAAAIAAZIg");
	this.shape_7.setTransform(0,-228);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(209,140,37,0.702)","rgba(251,174,23,0)"],[0,0.6,1],-211,-88.3,167.9,-88.3).s().p("EgtnAJDIAAyFMBbPAAAIAASFg");
	this.shape_8.setTransform(0,-89.5);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-294,-309.5,588.1,612.6);


(lib.Animation_balla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.dsd("synched",0);
	this.instance.setTransform(37.9,94.5,1.331,1.331,0,0,0,3,3.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).wait(1).to({regX:2.9,regY:2.9,x:40.6,y:95.6,alpha:0.21},0).wait(1).to({x:42.9,y:96.9,alpha:0.398},0).wait(1).to({x:45,y:98.1,alpha:0.563},0).wait(1).to({x:46.8,y:99.1,alpha:0.706},0).wait(1).to({x:48.3,y:100,alpha:0.827},0).wait(1).to({x:49.6,y:100.8,alpha:0.924},0).wait(1).to({regX:3,regY:3.1,x:50.7,y:101.7,alpha:1},0).to({guide:{path:[50.6,101.7,69,113.2,69.4,121.2,82.7,148,73.5,171.9,64.4,195.7,59.7,198.9,56.8,203.7,54.3,206.8,24.4,226.9,28.2,244.2,33.9,261.6,36.1,270.6,38.3,279.5,37,280.1,21.4,277.2,6.8,257.2,-7.8,237.2,-11.5,213.3,-14.6,176.4,15,176.3,41.2,176.2,55.3,192.8]}},53).to({_off:true},1).wait(1).to({_off:false,x:65,y:205.1},0).to({guide:{path:[64.9,205,76,220.1,79.1,246.8,82.8,279.3,81.2,319.6,79.9,349.6,68.8,360.8]}},21).to({x:32,y:376,alpha:0},11).wait(5));

	// Layer 6
	this.instance_1 = new lib.dsd("synched",0);
	this.instance_1.setTransform(32.4,109.5,1.331,1.331,0,0,0,3,3.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).wait(1).to({regX:2.9,regY:2.9,x:35.7,y:108.9,alpha:0.165},0).wait(1).to({x:38.6,y:108.8,alpha:0.317},0).wait(1).to({x:41.3,y:108.9,alpha:0.456},0).wait(1).to({x:43.8,y:109.1,alpha:0.58},0).wait(1).to({x:46,y:109.3,alpha:0.691},0).wait(1).to({x:48,y:109.7,alpha:0.789},0).wait(1).to({x:49.7,y:110,alpha:0.873},0).wait(1).to({x:51.2,y:110.4,alpha:0.943},0).wait(1).to({regX:3,regY:3.1,x:52.5,y:111.1,alpha:1},0).to({guide:{path:[52.4,111,62,113.9,69.4,121.2,82.7,148,73.5,171.9,64.4,195.7,59.7,198.9,56.8,203.7,50.7,209.3,24.4,226.9,28.2,244.2,33.9,261.6,36.1,270.6,38.3,279.5,37,280.1,21.4,277.2,6.8,257.2,-7.8,237.2,-11.5,213.3,-14.6,176.4,15,176.3,40.9,176.2,55,192.4]}},50).to({_off:true},1).wait(1).to({_off:false,x:65.1,y:205.4},0).to({guide:{path:[65,205.2,76.4,221.3,78.9,250.8,81.8,286.5,80.3,322.8,79.3,348.3,69.8,361.3]}},20).to({x:30.5,y:386.2,alpha:0},16).wait(11));

	// Layer 5
	this.instance_2 = new lib.dsd("synched",0);
	this.instance_2.setTransform(37.4,90.9,1.331,1.331,0,0,0,3,3.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(1).to({regX:2.9,regY:2.9,x:41.7,y:92.4,alpha:0.185},0).wait(1).to({x:45.5,y:94.2,alpha:0.353},0).wait(1).to({x:48.8,y:96,alpha:0.504},0).wait(1).to({x:51.7,y:97.8,alpha:0.637},0).wait(1).to({x:54.1,y:99.8,alpha:0.754},0).wait(1).to({x:55.9,y:101.4,alpha:0.853},0).wait(1).to({x:57.4,y:102.8,alpha:0.935},0).wait(1).to({regX:3,regY:3.1,x:58.8,y:104.2,alpha:1},0).to({guide:{path:[58.7,104.2,71.5,116.3,69.4,121.2,82.7,148,73.5,171.9,64.4,195.7,59.7,198.9,56.8,203.7,54.3,206.8,24.4,226.9,28.2,244.2,33.9,261.6,36.1,270.6,38.3,279.5,37,280.1,21.4,277.2,6.8,257.2,-7.8,237.2,-11.5,213.3,-14.6,176.4,15,176.3,41.5,176.2,55.6,193.2]}},51).to({_off:true},1).wait(1).to({_off:false,x:65.3,y:205.7},0).to({guide:{path:[65.3,205.6,76.7,221.9,79.4,252.3,82.8,289.4,81.5,317.2,80.1,345.1,67.5,363.4]}},21).to({x:32.8,y:362.6,alpha:0},21).wait(23));

	// Layer 4
	this.instance_3 = new lib.dsd("synched",0);
	this.instance_3.setTransform(30.2,102.4,1.331,1.331,0,0,0,3,3.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).wait(1).to({regX:2.9,regY:2.9,x:34,y:102.6,alpha:0.243},0).wait(1).to({x:38.1,y:103,alpha:0.456},0).wait(1).to({x:41.2,y:104.4,alpha:0.637},0).wait(1).to({x:43.4,y:106.2,alpha:0.789},0).wait(1).to({x:45.4,y:107.7,alpha:0.91},0).wait(1).to({regX:3,regY:3.1,x:47.2,y:109.1,alpha:1},0).to({guide:{path:[47.2,109.1,47.4,109.2,47.5,109.2,48,109.3,48.5,109.3,50.2,109.2,52,109.1,55,108.8,57.6,110.3,58.2,110.8,58.9,111.1,59.9,111.4,60.9,111.6,61.2,111.7,61.5,111.7,62.9,111.7,64.4,111.8,68.8,116.2,69.4,121.2,82.7,148,73.5,171.9,64.4,195.7,59.7,198.9,56.8,203.7,54.3,206.8,24.4,226.9,28.2,244.2,33.9,261.6,36.1,270.6,38.3,279.5,37,280.1,21.4,277.2,6.8,257.2,-7.8,237.2,-11.5,213.3,-14.6,176.4,15,176.3,41.1,176.2,55.2,192.7]}},54).to({_off:true},1).wait(1).to({_off:false,x:64.3,y:204.1},0).to({guide:{path:[64.2,204,76.6,220.1,79.4,250.2,82.8,285.3,81.4,315.2,80.3,339.8,71.6,356.5]}},22).to({x:31.8,y:379.8,alpha:0},17).wait(15));

	// Layer 3
	this.instance_4 = new lib.dsd("synched",0);
	this.instance_4.setTransform(32.5,96.8,1.331,1.331,0,0,0,3,3.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).wait(1).to({regX:2.9,regY:2.9,x:35.9,y:98.6,alpha:0.21},0).wait(1).to({x:38.7,y:100.4,alpha:0.398},0).wait(1).to({x:41.4,y:101.9,alpha:0.563},0).wait(1).to({x:43.9,y:102.8,alpha:0.706},0).wait(1).to({x:46,y:102.7,alpha:0.827},0).wait(1).to({x:47.8,y:102.6,alpha:0.924},0).wait(1).to({regX:3,regY:3.1,x:49.3,y:103.1,alpha:1},0).to({guide:{path:[49.2,103.1,49.5,103.2,49.9,103.3,50.3,103.5,50.8,103.9,51.2,104.3,51.5,104.5,52.7,105.3,53.9,106.1,54.3,106.4,54.6,106.7,54.9,107,55.6,107.3,55.8,107.5,56.4,107.6,57.1,108,57.8,108.4,59,109.1,60.2,109.9,60.9,110.4,62,110.9,62.8,111.3,63.8,111.2,68.7,115.9,69.4,121.2,82.7,148,73.5,171.9,64.4,195.7,59.7,198.9,56.8,203.7,54.3,206.8,24.4,226.9,28.2,244.2,33.9,261.6,36.1,270.6,38.3,279.5,37,280.1,21.4,277.2,6.8,257.2,-7.8,237.2,-11.5,213.3,-14.6,176.4,15,176.3,41.5,176.2,55.6,193.2]}},51).to({_off:true},1).wait(1).to({_off:false,x:65.3,y:205.7},0).to({guide:{path:[65.2,205.6,76.5,221.8,79.4,250.3,82.9,285,81.5,315,80.1,345.1,67.4,363.4]}},21).to({x:35.6,y:387.8,alpha:0},16).wait(24));

	// Layer 1
	this.instance_5 = new lib.dsd("synched",0);
	this.instance_5.setTransform(30.3,114.1,1.331,1.331,0,0,0,3,3.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:2.9,regY:2.9,x:35.3,y:115.2,alpha:0.243},0).wait(1).to({x:40.6,y:116.1,alpha:0.456},0).wait(1).to({x:44.5,y:114.9,alpha:0.637},0).wait(1).to({x:47.9,y:114.6,alpha:0.789},0).wait(1).to({x:50.6,y:114.1,alpha:0.91},0).wait(1).to({regX:3,regY:3.1,x:52.8,y:115.1,alpha:1},0).to({guide:{path:[52.7,114.3,54.1,114.3,55.5,114.6,55.8,114.7,56,114.7,56.5,114.7,56.9,114.8,57.2,115,57.4,115.1,57.9,115.2,58.6,115.5,59.1,115.6,59.6,115.8,64.8,117.8,69.4,121.2,82.7,148,73.5,171.9,64.4,195.7,59.7,198.9,56.8,203.7,54.3,206.8,24.4,226.9,28.2,244.2,33.9,261.6,36.1,270.6,38.3,279.5,37,280.1,21.4,277.2,6.8,257.2,-7.8,237.2,-11.5,213.3,-14.6,176.4,15,176.3,41.1,176.2,55.2,192.7]}},48).to({_off:true},1).wait(1).to({_off:false,x:65.3,y:205.6},0).to({guide:{path:[65.2,205.4,76.6,221.5,79.4,249.7,82.8,284.2,81.5,314.6,80.2,343.2,68.9,361.1]}},20).to({x:27.5,y:400.1,alpha:0},20).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,111.2,97.2,253.3);


(lib.Animation_2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance = new lib.Imageaa();
	this.instance.setTransform(-54.6,-189.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).wait(93));

	// Layer 8
	this.instance_1 = new lib.blueparticle("synched",0);
	this.instance_1.setTransform(56.9,258.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({x:33.5,y:263.9,alpha:1},9).to({guide:{path:[33.4,263.9,19.6,238.1,12.7,196.5,4.7,148.7,6.4,114.1,7.2,96.7,22.5,95,24.2,94.9,25.7,96.1,28.5,111.6,30.5,127.7,33,148,50.2,159.2,57.1,163.8,58.2,155.1,62.1,126.5,65.9,97.6,67.7,84.3,58.6,76.4,55,73.3,50.3,73.8,37.9,75,25.8,77.9,20.7,79.2,15.3,78.4,-8.8,74.2,-10.1,50.1,-10.7,37.2,-2.4,24.2,3.4,15,18.6,6.5]}},77).to({x:56,y:-12.5,alpha:0},9).wait(7));

	// Layer 7
	this.instance_2 = new lib.blueparticle("synched",0);
	this.instance_2.setTransform(42.7,274.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({x:28.7,y:256.7,alpha:1},10).to({guide:{path:[29.6,256.2,18.6,232.1,12.7,196.5,4.7,148.6,6.4,114.1,7.2,96.6,22.5,94.9,24.2,94.8,25.7,96.1,28.5,111.5,30.5,127.7,33,148,50.2,159.2,57.1,163.7,58.2,155.1,62.1,126.4,65.9,97.6,67.7,84.3,58.6,76.4,55,73.3,50.3,73.8,37.9,75,25.8,77.8,20.7,79.1,15.3,78.3,-8.8,74.2,-10.1,50,-10.7,37.2,-2.4,24.1,5,12.6,27.1,2.1]}},81).to({x:61.8,y:7.4,alpha:0},11).wait(8));

	// Layer 6
	this.instance_3 = new lib.blueparticle("synched",0);
	this.instance_3.setTransform(50.2,258.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({x:30.2,y:260.2,alpha:1},9).to({guide:{path:[31.2,259.5,19,234.7,12.7,196.5,4.7,148.6,6.4,114.1,7.2,96.6,22.5,94.9,24.2,94.8,25.7,96.1,28.5,111.5,30.5,127.7,33,148,50.2,159.2,57.1,163.7,58.2,155.1,62.1,126.4,65.9,97.6,67.7,84.3,58.6,76.4,55,73.3,50.3,73.8,37.9,75,25.8,77.8,20.7,79.1,15.3,78.3,-8.8,74.2,-10.1,50,-10.7,37.2,-2.4,24.1,3.6,14.8,19.2,6.1]}},84).to({x:62.5,y:-23.5,alpha:0},11).wait(12));

	// Layer 5
	this.instance_4 = new lib.blueparticle("synched",0);
	this.instance_4.setTransform(46.6,263);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({x:30.2,y:260.2,alpha:1},6).to({guide:{path:[31.2,259.5,19,234.7,12.7,196.5,4.7,148.6,6.4,114.1,7.2,96.6,22.5,94.9,24.2,94.8,25.7,96.1,28.5,111.5,30.5,127.7,33,148,50.2,159.2,57.1,163.7,58.2,155.1,62.1,126.4,65.9,97.6,67.7,84.3,58.6,76.4,55,73.3,50.3,73.8,37.9,75,25.8,77.8,20.7,79.1,15.3,78.3,-8.8,74.2,-10.1,50,-10.7,37.2,-2.4,24.1,2.8,16,15.2,8.5]}},88).to({x:62.5,y:-4.6,alpha:0},8).wait(19));

	// Layer 4
	this.instance_5 = new lib.blueparticle("synched",0);
	this.instance_5.setTransform(31.4,259.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({guide:{path:[31.3,259.7,29.4,255.8,27.6,251.5]},alpha:1},8).to({guide:{path:[27.7,251.6,18.1,228.8,12.7,196.5,4.7,148.6,6.4,114.1,7.2,96.6,22.5,94.9,24.2,94.8,25.7,96.1,28.5,111.5,30.5,127.5,33,148,50.2,159.2,57.1,163.7,58.2,155.1,62.1,126.2,65.9,97.6,67.7,84.3,58.6,76.4,55,73.3,50.3,73.8,37.9,75,25.8,77.8,20.7,79.1,15.3,78.3,-8.8,74.2,-10.1,50,-10.7,37.2,-2.4,24.1,2.8,16,15.2,8.5]}},86).to({x:48.4,y:-15,alpha:0},11).wait(22));

	// Layer 1
	this.instance_6 = new lib.blueparticle("synched",0);
	this.instance_6.setTransform(45.2,285);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:28.4,y:256,alpha:1},6).to({guide:{path:[29.3,255.5,18.5,231.6,12.7,196.5,4.7,148.7,6.4,114.1,7.2,96.7,22.5,95,24.2,94.9,25.7,96.1,28.5,111.6,30.5,127.7,33,148,50.2,159.2,57.1,163.8,58.2,155.1,62.1,126.5,65.9,97.6,67.7,84.3,58.6,76.4,55,73.3,50.3,73.8,37.9,75,25.8,77.9,20.7,79.2,15.3,78.4,-8.8,74.2,-10.1,50.1,-10.7,37.2,-2.4,24.2,2.8,16.1,15.2,8.5]}},85).to({x:54.1,y:-12.6,alpha:0},9).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.7,258.3,19.6,29.7);


(lib.MC_Redparticles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 14 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiYZlQgGgOgBgQIABgQQgDiHALh3QAVjrBHAAIBzAfQB0AfBdAAQAjAAA1j3IAuj9IgQjHQgQjJAAg+QgBhKggi/IgdipIgXgkIgGgJQADAIAAAHQAAAFhgB1QhgB1AAAdQAAAOAoBWQAoBmAABiQAABOgGAbQgUBUhGgRQAFAXgLAaQgQAngyAAQiDAAgzkOQgQhUgGhlIgChVQAAh4AShFQAkiJBpAAQAcAAA3g9QA6g9AmAAQAOADAPAIIADgKIiKheQgdgVg0gVQhJgeg2AAQhjAAg1AzQgnAnAAAtQAABQAUAvQAQAlAEAbIAFADQAGAEAAAPQhbDjglAAQgLAAgEgIIgBgJQAAgGAFgHQgkhrgHgdQgOg8AAhEIAAgEIgDgZQgGgxAAg8IABgyQAAhOAygmQBJg2DLgLIgIgBQB8gMCXBMQA9AfAoAiIALAKQAIACAJAIQAlhYAuAkIAdhPQAkhgAAhMQAAhUgih8QgkiEgsg4QgfARhJAWIhoAfQgwAPgXArQgJASgKAGQgPAKgfAAQgyAAgOgqQgHgVADgYQAAgKAIhQQAIhQAAgKQAAhTgMg/QgMhAAAgnQAAgvACgNQAEgcARgHQAqgQCXBpQCAAtBIBKQAZAZAaAmIArA+QBFBeArCXQAoCMAAB3QgCBegSBWQgfCVhCATQARAbAAALQAAACAJAKQASAHABAUIAAABIAAABIAAAEQgCAJgGAHIgGAFQgIAGgKAAIgCAAQgLAAgLgFQAMAUAZAtQApgEAQA8QAGAlAUBfQAaCGAGCAIAREIQAPDlAAAmQAABcgoC4QgoC1ggA+QhJCMieCrQitC7hSAAQhAAAgSgpgAmCk/IAAAAIAAgBIAAABgAmWm9QAAAOAEAaIgEgrIAAADg");
	mask.setTransform(5.6,126.5);

	// Layer 13
	this.instance = new lib.Animation_balla("synched",119);
	this.instance.setTransform(-30.1,-113.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(131));

	// Layer 12
	this.instance_1 = new lib.Animation_balla("synched",109);
	this.instance_1.setTransform(-30.1,-113.8);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(131));

	// Layer 9
	this.instance_2 = new lib.Animation_balla("synched",99);
	this.instance_2.setTransform(-30.1,-113.8);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(131));

	// Layer 8
	this.instance_3 = new lib.Animation_balla("synched",89);
	this.instance_3.setTransform(-30.1,-113.8);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(131));

	// Layer 7
	this.instance_4 = new lib.Animation_balla("synched",79);
	this.instance_4.setTransform(-30.1,-113.8);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(131));

	// Layer 11
	this.instance_5 = new lib.Animation_balla("synched",69);
	this.instance_5.setTransform(-30.1,-113.8);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(131));

	// Layer 6
	this.instance_6 = new lib.Animation_balla("synched",59);
	this.instance_6.setTransform(-30.1,-113.8);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(131));

	// Layer 5
	this.instance_7 = new lib.Animation_balla("synched",49);
	this.instance_7.setTransform(-30.1,-113.8);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(131));

	// Layer 4
	this.instance_8 = new lib.Animation_balla("synched",39);
	this.instance_8.setTransform(-30.1,-113.8);

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(131));

	// Layer 3
	this.instance_9 = new lib.Animation_balla("synched",29);
	this.instance_9.setTransform(-30.1,-113.8);

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(131));

	// Layer 2
	this.instance_10 = new lib.Animation_balla("synched",9);
	this.instance_10.setTransform(-30.1,-113.8);

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(131));

	// Layer 1
	this.instance_11 = new lib.Animation_balla("synched",0);
	this.instance_11.setTransform(-30.1,-113.8);

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.8,-25.8,99.2,314.4);


(lib.MC_BlueParticles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 12
	this.instance = new lib.Animation_2a("synched",129);
	this.instance.setTransform(-6.7,-145.1,1,1,0,0,0,38.5,139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(131));

	// Layer 13
	this.instance_1 = new lib.Animation_2a("synched",109);
	this.instance_1.setTransform(-6.7,-145.1,1,1,0,0,0,38.5,139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(131));

	// Layer 11
	this.instance_2 = new lib.Animation_2a("synched",99);
	this.instance_2.setTransform(-6.7,-145.1,1,1,0,0,0,38.5,139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(131));

	// Layer 10
	this.instance_3 = new lib.Animation_2a("synched",89);
	this.instance_3.setTransform(-6.7,-145.1,1,1,0,0,0,38.5,139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(131));

	// Layer 9
	this.instance_4 = new lib.Animation_2a("synched",79);
	this.instance_4.setTransform(-6.7,-145.1,1,1,0,0,0,38.5,139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(131));

	// Layer 8
	this.instance_5 = new lib.Animation_2a("synched",69);
	this.instance_5.setTransform(-6.7,-145.1,1,1,0,0,0,38.5,139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(131));

	// Layer 7
	this.instance_6 = new lib.Animation_2a("synched",59);
	this.instance_6.setTransform(-6.7,-145.1,1,1,0,0,0,38.5,139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(131));

	// Layer 6
	this.instance_7 = new lib.Animation_2a("synched",49);
	this.instance_7.setTransform(-6.7,-145.1,1,1,0,0,0,38.5,139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(131));

	// Layer 5
	this.instance_8 = new lib.Animation_2a("synched",39);
	this.instance_8.setTransform(-6.7,-145.1,1,1,0,0,0,38.5,139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(131));

	// Layer 3
	this.instance_9 = new lib.Animation_2a("synched",19);
	this.instance_9.setTransform(-6.7,-145.1,1,1,0,0,0,38.5,139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(131));

	// Layer 1
	this.instance_10 = new lib.Animation_2a("synched",0);
	this.instance_10.setTransform(-6.7,-145.1,1,1,0,0,0,38.5,139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.9,-311,82.2,314.1);


(lib.Animation_MCa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Red Particle Loop
	this.instance = new lib.MC_Redparticles();
	this.instance.setTransform(177.6,36.8,1,1,0,0,0,-14,-55.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(458));

	// Blue particle loop
	this.instance_1 = new lib.MC_BlueParticles();
	this.instance_1.setTransform(152.7,300.8,1,1,0,0,0,-2.5,-71.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(458));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82.3,-42.7,183,486);


(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.text("synched",0);
	this.instance.setTransform(517.9,488.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween14("synched",0);
	this.instance_1.setTransform(517.9,488.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1227).to({state:[{t:this.instance_1}]},7).wait(181));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1227).to({_off:false},0).to({_off:true,alpha:1},7).wait(181));

	// MC_Animation
	this.anim1_mc = new lib.Animation_MCa();
	this.anim1_mc.setTransform(344.4,147.3);
	this.anim1_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.anim1_mc).wait(11).to({_off:false},0).wait(1404));

	// Layer 11
	this.instance_2 = new lib.Image();
	this.instance_2.setTransform(399.9,46.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(1411));

	// Layer 46
	this.instance_3 = new lib.background("synched",0);
	this.instance_3.setTransform(507.5,330.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({y:327.9,alpha:1},4).wait(1410));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;