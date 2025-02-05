function sim(){
    alert("Você aceitou namorar comigo ❤❤");
    location.href = "https://www.youtube.com/watch?v=0CdMqJ9Lidg=42s";
}

function nao(t){
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geradornumero(0, 80);
    btn.style.left = geradornumero(0, 80);
    console.log("é o desvias")
}

function geradornumero(min, max) {
return (Math.random() * (max - min) + min) + "%";
}