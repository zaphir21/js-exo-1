const avatarNode = document.querySelector('.avatar')
const topEnd = "560px"
const leftEnd = "420px"
const divEnd = document.querySelector(".end")
divEnd.style.marginTop = topEnd
divEnd.style.marginLeft = leftEnd
const start = Date.now();
document.addEventListener("keydown", (event) => {
    event.preventDefault();
    
    if (event.key === "ArrowDown" || event.keyCode === 83) //down
    {
        
        avatarNode.style.marginTop = `${parseInt(avatarNode.style.marginTop || 0) + 10}px`;
    } else if (event.key === "ArrowUp" || event.keyCode === 90) //up
    {
        avatarNode.style.marginTop = `${parseInt(avatarNode.style.marginTop || 0) - 10}px`;
    }   
    else if (event.key === "ArrowLeft" || event.keyCode === 81) //left
    {
        avatarNode.style.marginLeft = `${parseInt(avatarNode.style.marginLeft || 0) - 10}px`;
    }
    else if (event.key === "ArrowRight" || event.keyCode === 68) //right
    {
        avatarNode.style.marginLeft = `${parseInt(avatarNode.style.marginLeft || 0) + 10}px`;
    }
    if(avatarNode.style.marginTop === topEnd && avatarNode.style.marginLeft === leftEnd){
        const millis = Date.now() - start;
        let secondes = Math.floor(millis / 1000)
        let minute = 0
        if(secondes > 60) minute = parseInt(secondes / 60)
        secondes = secondes - (minute * 60)
        window.alert(minute !== 0 ? `Vous avez mis ${minute}min et ${secondes}sec` : `Vous avez mis ${secondes}sec`)
    }
});