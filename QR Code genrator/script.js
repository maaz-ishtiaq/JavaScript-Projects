let img = document.getElementById('img')
let button = document.getElementById('button')
let inputtext = document.getElementById('input')
     const qrgenrate = ()=>{
    const input = inputtext.value
    if(input !== ""){
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ds " + input;
    }
    else{
        alert("Enter the Text or URL");
    }

    }


    
inputtext.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        qrgenrate();
    }
});
