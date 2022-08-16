//https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
//used to make sure images load correctly
const sleep = ms => new Promise(r => setTimeout(r, ms));
var display = document.getElementsByTagName("main")[0];

const aboutPage = `
<div style="display:flex; overflow-y: hidden; height:fit-content">
    <div style="width:50%; float:left; height:auto; position:relitive; box-sizing: border-box;" class="handsomeBoy"><!--ascii art of me--></div>
    <div style="width:50%; float:right; height:auto; position:relitive; box-sizing: border-box;">
        <h1 style:'box-sizing: border-box;'>Hello world!</h1>
        <p style:'box-sizing: border-box;'>My name is Keenan.
        I like to solve interesting problems through programming.</p>
        <p style:'box-sizing: border-box;'>I know python, html, css, javascript, and have dabbled in java, lua, and c++</p>
        <p style:'box-sizing: border-box;'>I have learned all of this through the Southern Indiana Career and Technical Center, the Nextech Catapult summer program, and google in my free time</p>
        <br>
        <p style:'box-sizing: border-box;'>In my free time when I'm not learning more stuff about computers I'm usually in them gym, watching movies, or playing with Legos.</p>
    </div>
</div>
`;

const portfolio = `
<div>
    <p>Here's a list of projects I've dove</p>
    <p>Type them in to see them :)</p>
    <ul>
        <li><p>'sudoku'</p></li>
        <li><p>'img2Ascii'</p></li>
        <li><p>'adventure'</p></li>
        <li><p>'fortuneTeller'</p></li>
    </ul>
</div>
`;

const resume = `
<div style="color:#E0AC9D;">
<p style="text-align: center;"><strong>Keenan Koehler</strong></p>
<p style="text-align: center;">741 Royal Ave Evansville, IN 47715 | keenankoehler@gmail.com | (812) 480-7388</p>
<p><strong>EDUCATION</strong></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;William Henry Harrison High School Evansville, IN&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; May 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p>Technicals Honors Diploma</p>
<p>GPA: 4.09</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Southern Indiana Career &amp; Technical Center <span style="color: #202124;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></span><span style="color: #202124;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></span><span style="color: #202124;">May 2023</span></p>
<p>PLTW Computer Essentials</p>
<p>PLTW Computer Principals</p>
<p><strong>EXPERIENCE</strong></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Zaxby&rsquo;s Evansville IN<strong> &nbsp; &nbsp; &nbsp; </strong>Dec 2019 - Present</p>
<p><strong>Crew Trainer</strong></p>
<ul>
<li>Trained and managed new employees to achieve significant improvements in their productivity.</li>
<li>Take customer orders and accurately input them into an electronic system</li>
<li>Make correct change using cash register system</li>
<li>Maintain a safe, sanitary, and healthy environment for the customers by following set standards not only in the work area but also the lobby.</li>
<li>Provided excellent customer service in a high-volume, fast-paced operation</li>
<li>Executed daily operations of all stations on line. Instrumental in instituting time saving procedures.</li>
<li>Verified that prepared food met requirements for quality and quantity according to franchise standards</li>
<li>Upheld the highest standards of sanitation while cooking and preparing food.</li>
<li>Simultaneously operate large volume cooking equipment such as grills, deep-fat fryers, and griddles</li>
</ul>
<p><strong>Extra-Curricular Activities</strong></p>
<p>Harrison HS Coding Club (President and Founder)<strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong><strong> &nbsp; &nbsp; &nbsp; </strong>Fall 2019 - Present</p>
<p>Harrison HS Wrestling&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Fall 2021</p>
<p>Harrison HS Math Academic Team &nbsp; &nbsp; &nbsp; Winter 2022</p>
<p>Harrison HS National Honor SocietySummer 2021 - Present</p>
<p><strong>Technical Skills</strong></p>
<p>Python Development&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p style="text-align: center;">References upon request&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
</div>
`
const adventure = `
<p>The premise of this adventure game is that you have to try and fix a bug in your code,</p>
<p>this leads to unexpected endings and a few good laughs.</p>
<p>I think the coolest thing about this project is the modularity of it as I later used it as the same basis to build my fortune teller site.</p>
<p>You can find the code <a href="https://github.com/Koeh1124/webDev/tree/main/textBasedAdventure" target="_blank">here</a></p>
`
const fortune = `
<p>My fortune teller app is built on the same framework as my adventure game.</p>
<p>This system allows for navigation through a tree structure where each branch is a different screen.</p>
<p>You can view the code <a href="https://github.com/Koeh1124/webDev/tree/main/fortuneTeller" target="_blank">here</a></p>
`
const sudoku = `
<p>One of the projects I'm most proud of is my sudoku brute forcing algorithm.</p>
<p>Without the visualization it takes only around 20ms to solve a puzzle!</p>
<p>Here's a link to the version with the visual <a target="_blank" href="https://replit.com/@KeenanKoehler/sudoku-checker#main.py">Click here to see!</a></p>
`

//https://web.dev/read-files/
const ascii =`
<div>
    <p>Select a file from your local system and it will display it in ascii characters</p>
    <input type="file" class="file-selector" accept="image/*">
    <img src="#" class="ogImg" style="overflow: hidden; width: 0; height: 0;">
    <div class="asciiDisplay">
    </div>
</div>
`

//https://stackoverflow.com/questions/25983603/how-to-submit-an-html-form-without-redirection#comment40688159_25983603
//https://formsubmit.co/?utm_source=formsubmit.co&utm_medium=site%20link&utm_campaign=submission%20page
const contactFourm = `
<div>
    <form action="https://formsubmit.co/3f346b85db501e09ef26a883e8f7d2f1" target="#" method="POST">
    <!-- Form body here -->
        <div style="display: flex; justify-content:space-between; width:50%;">
            <p style="width: 15%; float:right;display:inline">Name:</p><input type="text" name="name" style="width: 80%;" required>
        </div>
        <div style="display: flex; justify-content:space-between; width:50%;">
            <p style="width: 15%;">Email:</p><input style="width: 80%;" type="email" name="email" required>
        </div>
        <div style="display: flex; justify-content:space-between; width:50%;">
            <p style="width: 15%;">Number:</p><input style="width: 80%;" type="tel" name="tel" required>
        </div>
        <div style="display: flex; justify-content:space-between; width:50%;">
            <p style="width: 15%;">Message:</p><textarea type="text" name="msg" cols="100" style="resize: none; width: 80%;"></textarea>
        </div>
        <button type="submit" style="background:none;">Send</button>
    </form>
</div>
`;

const helpPage = `
<p>'about' - learn a little about me!</p>
<p>'portfolio' - look at what I've done :)</p>
<p>'contact' - reachout to me through a form</p>
<p>'clear' - clears all text</p>
`;

const startPage = `
<h1 style='text-align: center;'>Hello there!</h1>
<p style='text-align: center;'>My name is Keenan, you can type 'help' to see some commands you can use</p>
`

//<p style='text-align: center;'>There are many secrets hidden throught this page, stay a while and find them all :)</p>

function clearPage() {
    display.innerHTML = "<p>Type 'help' to see commands</p>"
}

function asciiCreator(data, w, h, div) {
    asciiLightChart = ".$@B&WM#*bdwOCJcjf\|)1}]?-_+~>i!I;,^`'.";
    rgbaVals=data.data;
    var html = "<p style:'box-sizing: border-box;' class='ascii'>";
    for (var r=0;r<h;r++){
      for (var c=0;c<w*4;c+=4){
        html+=asciiLightChart[Math.floor((((rgbaVals[(w*r*4)+c]+rgbaVals[(w*r*4)+c+1]+rgbaVals[(w*r*4)+c+2])/3)*(rgbaVals[(w*r*4)+c+3]/255)/255)*(asciiLightChart.length-1))]+" ";
        }
        html+="</p style:'box-sizing: border-box;'>\n<p class='ascii'>";
    }
    html+="</p>";
    //console.log(html);
    div.innerHTML+=html;
}

async function imageAsciiPrep(url,width,div){
    if (!width){
        width=div.offsetWidth;
    }
    console.log(width)
    var canvas = document.getElementById("asciiData");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = `${url}`;
    await sleep(15);
    var scale = Math.round((((width/img.width))/1.2)*10)/10;
    console.log(`Console Width:${width} img(wxh):${img.width}, ${img.height}`);
    if (!scale){
        scale = .4;
    }
    console.log(scale);
    canvas.width = (img.width*scale);
    canvas.height = (img.height*scale);
    ctx.scale(scale,scale);
    ctx.drawImage(img, 0, 0);
    var data = ctx.getImageData(0,0,canvas.width,canvas.height);
    asciiCreator(data,canvas.width,canvas.height,div);
}

var input = document.getElementsByTagName("input")[0];
const test = () => display.innerHTML += "<p>Bruh</p>";
const printImage = (img,width=display.width,div=display) => imageAsciiPrep(img,width,div);
var kenobi = new Audio('assets/hello.mp3')
var correctInputs = {
    "help" : test,
    "about" : printImage,
    "contact" : 1,
    "drip" : printImage,
    "clear" : clearPage,
    "portfolio" : 1,
    "sudoku" : 1,
    "img2Ascii" : 1,
    "adventure" : 1,
    "fortuneTeller" : 1,
    //"resume" : 1,
    "hello" : kenobi.play,
    "theme" : 1
}

function setColors(colors){
    css.setProperty('--mainColor', colors[0]);
    css.setProperty('--consoleColor', colors[1]);
    css.setProperty('--textColor', colors[2]);
    css.setProperty('--importantColor', colors[3]);
    css.setProperty('--highlightColor', colors[4]);
}

function checkData(data){
    if (correctInputs[data]){
        console.log("working")
        if (data === 'about'){
            display.innerHTML += aboutPage;
            printImage('assets/handsomeBoy.jpg',0,document.getElementsByClassName('handsomeBoy')[document.getElementsByClassName('handsomeBoy').length-1])
        }
        else if(data === "help"){
            display.innerHTML+=helpPage;
        }
        else if(data === "contact"){
            display.innerHTML+=contactFourm;
        }
        else if(data === "portfolio"){
            display.innerHTML+=portfolio;
        }
        else if(data === "sudoku"){
            display.innerHTML+=sudoku;
        }
        else if(data === "img2Ascii"){
            display.innerHTML+= ascii;
            //https://www.codegrepper.com/code-examples/html/input+type%3D%22file%22+and+display+image
            const userfile = document.getElementsByClassName("file-selector")[document.getElementsByClassName("file-selector").length-1];
            userfile.addEventListener('change', (event) => {
                image = document.getElementsByClassName("ogImg")[document.getElementsByClassName("ogImg").length-1]
                image.src = URL.createObjectURL(event.target.files[0]);
                printImage(image.src,0,document.getElementsByClassName('asciiDisplay')[document.getElementsByClassName('asciiDisplay').length-1])
              });
        }
        else if(data === "adventure"){
            display.innerHTML+=adventure;
        }
        else if(data === "fortuneTeller"){
            display.innerHTML+=fortune;
        }
        else if(data === "resume"){
            display.innerHTML+= resume;
        }
        else{
            correctInputs[data]();
        }
    }
}

display.innerHTML+=startPage;
input.addEventListener("keypress", function(key) {
    if(key.key === "Enter") {
        data = input.value;
        checkData(data);
        input.value = "";
    }
})
document.getElementById("aboutBtn").addEventListener('click', (event)=>{
    checkData("about");
    event.preventDefault();
})
document.getElementById("contactBtn").addEventListener('click', (event)=>{
    checkData("contact")
    event.preventDefault();
})
document.getElementById("portfolioBtn").addEventListener('click', (event)=>{
    checkData("portfolio")
    event.preventDefault();
})
document.getElementById("clearBtn").addEventListener('click', (event)=>{
    checkData("clear")
    event.preventDefault();
})