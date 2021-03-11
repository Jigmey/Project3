function show(){
    document.getElementById("navbar").classList.toggle("open");
    document.getElementById("rJoke").classList.toggle("open");
}

const startElement = document.getElementById("start");
startElement.addEventListener("click", randStart)

function randStart(){
    console.log("working")
    fetch("http://api.icndb.com/jokes/random")
    .then(response => response.json())
        .then(data => {
            document.getElementById("joke").innerHTML = data.value.joke;
        })
    
}


