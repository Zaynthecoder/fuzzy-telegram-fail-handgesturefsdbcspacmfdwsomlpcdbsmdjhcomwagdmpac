//https://teachablemachine.withgoogle.com/models/mc7IH1MZH/model.json
meaning= "";
console.log("hello user this is a a nice website. you are smart you know about the console");
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");
console.log("hello user hi what are you doing")
Webcam.attach( '#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mc7IH1MZH/model.json', modelLoaded);

function modelLoaded() {
    console.log("The model has loaded yay this means it will probably work user");
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);       
}
function gotResult(error,results) {
    if (error) {
        console.error(error);

    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction = results[0].label;
        speak();
        if(results[0].label == "victory") {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        if(results[0].label == "best") {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if(results[0].label == "amazing") {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        
        }
}