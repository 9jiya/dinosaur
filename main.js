Webcam.attach('#camera');
Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});
function take_photo(){
    Webcam.snap(function(e){
        document.getElementById("result").innerHTML = '<img id="image1" src="'+e+'"/>';
    });
}
console.log("ml5",ml5.version);
classfier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/J3u_JOGEO/",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
function identify(){
    d = document.getElementById("image1");
    classfier.classify(d,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("name").innerHTML = results[0].label;
        document.getElementById("acc").innerHTML = results[0].label;
    }
}