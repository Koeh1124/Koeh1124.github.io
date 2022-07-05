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
        <p style:'box-sizing: border-box;'>I have learned all of this through the Southern Indiana Carrer and Technical Center, the Nextech Catapult summer program, and google in my free time</p>
        <br>
        <p style:'box-sizing: border-box;'>In my free time when I'm not learning more stuff about computers I'm usally in them gym, watching movies, or playing with legos.</p>
    </div>
</div>
`;

const portfolio = `
<div>
    <p>Here's a list of projects I've dove</p>
    <p>Type them in to see them :)</p>
    <ul>
        <li><p>sudoku</p></li>
        <li><p>img2Ascii</p></li>
    </ul>
</div>
`;

const sudoku = `
<p>One of the projects I'm most proud of is my sudoku brute forcing algorithm.</p>
<p>Without the visulization it takes only around 20ms to solve a puzzle!</p>
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
<p>about -learn a little about me!</p>
<p>contact -reachout to me through a form</p>
<p>portfolio -look at what I've done :)</p>
<p>clear -claers all text</p>
`;

const startPage = `
<h1 style='text-align: center;'>Hello there!</h1>
<p style='text-align: center;'>My name is Keenan, you can type help to see some commands you can use</p>
<p style='text-align: center;'>There are many secrets hidden throught this page, stay a while and find them all :)</p>
`

function clearPage() {
    display.innerHTML = ""
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
var correctInputs = {
    "help" : test,
    "about" : printImage,
    "contact" : 1,
    "drip" : printImage,
    "clear" : clearPage,
    "portfolio" : 1,
    "sudoku" : 1,
    "img2Ascii" : 1
}

document.getElementById("contact").addEventListener('click', (event) =>{
    display.innerHTML+=contactFourm;
})

display.innerHTML+=startPage;
input.addEventListener("keypress", function(key) {
    if(key.key === "Enter") {
        data = input.value;
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
            else{
                correctInputs[data]();
            }
        }
        input.value = "";
    }
})