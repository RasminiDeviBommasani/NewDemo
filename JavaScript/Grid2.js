
var butt = document.getElementsByTagName("button")[0];
var a = document.getElementsByTagName("table")[0];

a.style.display = "none";

function fun() {
    var m = parseInt(window.prompt("Enter starting value:"));
    var n = parseInt(window.prompt("Enter ending Value:"));
    var getnumber = parseInt(window.prompt("Enter Your number:"));
    
    if (getnumber >= m && getnumber <= n) {
        alert("You entered the correct number:");
    } else {
        alert("You entered the wrong number:");
    }

    a.style.display = "table";

    for (var i = 0; i < getnumber; i++) {
        var dev = document.createElement("tr");
        a.appendChild(dev);
        
        for (var j = 0; j < getnumber; j++) {
            var createTD = document.createElement("td");
            dev.appendChild(createTD);  
        }
    }
    butt.style.display = "none";

    
    var buttonContainer = document.createElement("div");
    buttonContainer.style.marginTop = "10px"; 
    buttonContainer.style.width = "40%";
    buttonContainer.style.height = "40%";
    
    var topButton = document.createElement("button");
    topButton.innerHTML = "Top";
    topButton.style.width = "25%"; 
    topButton.style.height = "20%";
    buttonContainer.appendChild(topButton);

    var leftButton = document.createElement("button");
    leftButton.innerHTML = "Left";
    leftButton.style.width = "25%"; 
    leftButton.style.height = "20%";
    buttonContainer.appendChild(leftButton);

    var rightButton = document.createElement("button");
    rightButton.innerHTML = "Right";
    rightButton.style.width = "25%"; 
    rightButton.style.height = "20%";
    buttonContainer.appendChild(rightButton);

    var bottomButton = document.createElement("button");
    bottomButton.innerHTML = "Bottom";
    bottomButton.style.width = "25%"; 
    bottomButton.style.height = "20%";
    buttonContainer.appendChild(bottomButton);

    
    document.body.appendChild(buttonContainer);

   
    var img = document.createElement("img");
    img.src = "./ola.avif"; // replace with the path to your image
    img.style.width = "100%"; 
    img.style.height = "100%";
    a.rows[0].cells[0].appendChild(img);

    // Set initial position
    var currentRow = 0;
    var currentCol = 0;

    function moveImage(rowChange, colChange) {
        var newRow = currentRow + rowChange;
        var newCol = currentCol + colChange;

        if (newRow >= 0 && newRow < getnumber && newCol >= 0 && newCol < getnumber) {
            a.rows[currentRow].cells[currentCol].removeChild(img);
            a.rows[newRow].cells[newCol].appendChild(img);
            currentRow = newRow;
            currentCol = newCol;
        }
    }

    topButton.onclick = function() {
        moveImage(-1, 0);
    };

    leftButton.onclick = function() {
        moveImage(0, -1);
    };

    rightButton.onclick = function() {
        moveImage(0, 1);
    };

    bottomButton.onclick = function() {
        moveImage(1, 0);
    };
}
