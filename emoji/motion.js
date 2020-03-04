var diameter = 20; 
var clockWise = [{x:0,y:0},{x:diameter/2,y:diameter/2},{x:0,y:diameter},{x:-diameter/2,y:diameter/2},{x:0,y:0}];
var counterClockWise = [{x:0,y:0},{x:-diameter/2,y:diameter/2},{x:0,y:diameter},{x:diameter/2,y:diameter/2},{x:0,y:0}]

TweenMax.to("#leftEye .pupil", 3 ,{
    bezier:{
        curviness:1.5,
        values: clockWise
    },
    ease:Power0.easeNone,repeat:-1
});

TweenMax.to("#rightEye .pupil", 3.1 ,{
    bezier:{
        curviness:1.5,
        values: counterClockWise
    },
    ease:Power0.easeNone,repeat:-1
});