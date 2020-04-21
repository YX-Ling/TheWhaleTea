var frame = window.parent.document.getElementById("whaleLogoIframe");
var w = frame.clientWidth;
var h = frame.clientHeight;

var homeLogo;
var homeWahleText;
var homeIntroArtText;
var homeWahleTextH;
var homeIntroArtTextH;

var swimWhaleSheets;
var swimWhaleData;

var swimWhaleanime = [];
var swimWhales = [];

function preload(){
    homeLogo=loadImage("../assets/homeAssets/homelogo.png");
    homeWahleText = loadImage("../assets/homeAssets/homeWhaleText.png");
    homeIntroArtText = loadImage("../assets/homeAssets/homeIntroArtText.png");
    homeWahleTextH = loadImage("../assets/homeAssets/homeWhaleTextHorizontal.png");
    homeIntroArtTextH = loadImage("../assets/homeAssets/homeIntroArtTextHorizontal.png");
    swimWhaleSheets = loadImage("../assets/homeAssets/swimWhale.png");
    swimWhaleData = loadJSON("../assets/homeAssets/swimWhale.json");
}

function setup() {
    createCanvas(w, h);

    let frames = swimWhaleData.frames;
    for (let i = 0; i < frames.length; i++){
        let pos = frames[i].position;
        let img = swimWhaleSheets.get(pos.x, pos.y, pos.w, pos.h);
        swimWhaleanime.push(img);
    }

    if(w>h){
        homeLogo.resize(0,h*0.8);
        homeWahleText.resize(0,h*0.3);
        homeIntroArtText.resize(0,h*0.5);
    }
    else{
        homeLogo.resize(w*0.8,0);
        homeWahleTextH.resize(w*0.25,0);
        homeIntroArtTextH.resize(w*0.5,0);
    }
    imageMode(CENTER);

    for(let i = 0; i < 15; i++){
        swimWhales[i] = new Sprite(swimWhaleanime, random(w*0.2,w*0.8), random(h*0.3, h*0.8), random(0.1,1), random(50, 150),random(0.05, 0.1),random(-PI,PI));
    }
}

function draw() {
    clear();
    if(w>h){
        image(homeLogo,w*0.4,h*0.5);
        image(homeIntroArtText,w*0.85,h*0.4);
        image(homeWahleText,w*0.85+homeIntroArtText.width*1.5,h*0.2);
    }
    else{
        
        image(homeWahleTextH,w*0.2,homeWahleTextH.height*0.5);
        image(homeIntroArtTextH,w*0.4,homeWahleTextH.height+homeIntroArtTextH.height*0.5);
        if(homeWahleTextH.height+homeIntroArtTextH.height<h-homeLogo.height*1.2){
            image(homeLogo,w*0.5,homeWahleTextH.height+homeIntroArtTextH.height+homeLogo.height*0.65);
        }
        else{
            image(homeLogo,w*0.5,h-homeLogo.height*0.6);
        }
             
    }

    for(let swimWhale of swimWhales){
        swimWhale.show();
        swimWhale.animate();
    }


    
    

}