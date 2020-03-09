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

TweenMax.to("#rightEye .eyebrow", 2, {rotation: -40, x:-10, y:4, repeat:-1, yoyo:true});
TweenMax.to("#leftEye .eyebrow", 2, {rotation: 40, x:10, y:4, repeat:-1, yoyo:true});
TweenMax.to("#face", 2, {backgroundColor: "red", repeat:-1, yoyo:true});