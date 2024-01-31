
const freddy = document.querySelector('.freddy');
const abobora = document.querySelector('.abobora');
const freddyover = document.querySelector('.freddyover')

//   para fazer ter animação varias vezes
const freddyjump = () => {
    freddy.classList.add('freddyjump')
    setTimeout(() => {
        freddy.classList.remove('freddyjump')
    }, 600)
}

// loop para o jogo acabar
 const loopgame = setInterval(() => {
     const aboboraposition = abobora.offsetLeft;
    //  const cloudPosition = cloud.offsetLeft;
     const freddyposition = +window.getComputedStyle(freddy).bottom.replace('px', '');
      if (aboboraposition <= 150 && aboboraposition > 0 && freddyposition < 10 ) {
        abobora.style.animation = 'none';
        abobora.style.left = `${aboboraposition}px`;
       
        freddy.style.animation = 'none';
        freddy.style.bottom = freddyposition + 'px';

        freddy.src = 'img/gameover.png';
        freddy.style.width = '210px';
        freddy.style.marginBottom = '110px';
        freddy.style.marginLeft = '90px';

        // clearInterval(loop);
      }
 }, 10)


document.addEventListener('keydown', freddyjump)