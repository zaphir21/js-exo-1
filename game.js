const avatarNode = document.querySelector('.avatar')
const divEnd = document.querySelector(".end")
const imgKey = document.querySelector(".clef")
divEnd.style.marginTop = "560px"
divEnd.style.marginLeft = "420px"
imgKey.style.marginTop = "260px"
imgKey.style.marginLeft = "620px"
const start = Date.now();
let keyIsTrue = false
document.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.key === "ArrowDown" || event.key === "s") //down
    {
        
        avatarNode.style.marginTop = `${parseInt(avatarNode.style.marginTop || 0) + 10}px`;
    } else if (event.key === "ArrowUp" || event.key === "z") //up
    {
        avatarNode.style.marginTop = `${parseInt(avatarNode.style.marginTop || 0) - 10}px`;
    }   
    else if (event.key === "ArrowLeft" || event.key === "q") //left
    {
        avatarNode.style.marginLeft = `${parseInt(avatarNode.style.marginLeft || 0) - 10}px`;
    }
    else if (event.key === "ArrowRight" || event.key === "d") //right
    {
        avatarNode.style.marginLeft = `${parseInt(avatarNode.style.marginLeft || 0) + 10}px`;
    }

    if(avatarNode.style.marginTop === `${parseInt(imgKey.style.marginTop) - 10}px` && avatarNode.style.marginLeft === imgKey.style.marginLeft){
        imgKey.style.display = "none" 
        keyIsTrue = true
    }

    if(avatarNode.style.marginTop === `${parseInt(divEnd.style.marginTop) + 10}px` && avatarNode.style.marginLeft === divEnd.style.marginLeft && keyIsTrue === true){
        const millis = Date.now() - start;
        let secondes = Math.floor(millis / 1000)
        let minute = 0
        if(secondes > 60) minute = parseInt(secondes / 60)
        secondes = secondes - (minute * 60)
        window.alert(minute !== 0 ? `Vous avez mis ${minute}min et ${secondes}sec` : `Vous avez mis ${secondes}sec`)
    }
});