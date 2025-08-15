const loading = document.getElementById('title');
const novosPontos = document.createElement("span");

loading.appendChild(novosPontos);
function animandoOsPontos()
{
    for(let i = 0; i < 4; i++)
    {
     setTimeout(() =>{
    novosPontos.textContent = '.'.repeat(i);
     }, i * 500);

     }
    }
setInterval(animandoOsPontos, 2000);
animandoOsPontos();


