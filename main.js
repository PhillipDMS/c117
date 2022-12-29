function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/qwKpUV5gs/model.json", modelready);

}
function modelready(){
    console.log("model has been loaded");
    classifier.classify(gotresults);
}
function gotresults(error, results){
if (error){
console.error(error);
}else{
    console.log(results);
    randomnumberR=Math.floor(Math.random()*255)+1;
    randomnumberG=Math.floor(Math.random()*255)+1;
    randomnumberB=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML=results[0].label;
    document.getElementById("result_confidence").innerHTML=(results[0].confidence.toFixed(2))*100+"%";
    document.getElementById("result_label").style.color="rgb("+randomnumberR+","+randomnumberG+","+randomnumberB+")";
    document.getElementById("result_confidence").style.color="rgb("+randomnumberR+","+randomnumberG+","+randomnumberB+")";
 

    img1=document.getElementById("ear");
    
    if(results[0].label=="Cat"){
        img1.src="cat1.gif";
        
    }
    else
    if(results[0].label=="Dog"){
        img1.src="dog-barking.gif";
        
    }
    else
    if(results[0].label=="chicken"){
        img1.src="chicken.gif";
        
    }
    else
     {      img1.src="ear.png";
       
    }



}
}