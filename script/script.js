
window.onload = function () {
    let textArray = "Oh non! Le super-méchant 404 a frappé! Mais ne vous inquiétez pas, notre super-héros est là pour vous aider à retrouver votre chemin.".split('');
    let i = 0;
    setInterval(myTimer, 50);

    function myTimer() {
        if(i<textArray.length){
            
        document.getElementById("404text").innerHTML += textArray[i];
        i++;
        }else{
            clearInterval(myTimer);
        }
    }

}