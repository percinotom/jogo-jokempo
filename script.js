let gameImg = document.getElementsByClassName('gameimg')

let jogadorEscohe = 0;
let jogadorPonto = 0;
let roboEscolhe = 0;
let roboPonto = 0;
let ganhador = 0;

// 1 - Pedra
// 2 - Papel
// 3 - Tessoura
let jogoLogica = function(opcaoJogador, opcaoRobo) {
    if((opcaoJogador == 1 && opcaoRobo == 1) || (opcaoJogador == 2 && opcaoRobo == 2) || (opcaoJogador == 3 && opcaoRobo == 3)) {
        ganhador = 0
    } else if(opcaoJogador == 1 && opcaoRobo == 3) {
        ganhador = 1
    } else if(opcaoJogador == 2 && opcaoRobo == 1) {
        ganhador = 1
    } else if(opcaoJogador == 3 && opcaoRobo == 2) {
        ganhador = 1
    } else {
        ganhador = 2
    }
    return ganhador;
}

let quemGanha = function(ganhador) {
    let resultMessage = document.getElementById('mensagemResultado')
    if(ganhador === 0) {
        resultMessage.innerHTML = 'Empatou';
    } else if(ganhador === 1) {
        resultMessage.innerHTML = 'Você GANHOUU !!!';
        jogadorPonto++;
        document.getElementById('jogador-ponto').innerHTML = `Pontuação: ${jogadorPonto}`
    } else if (ganhador === 2) {
        resultMessage.innerHTML = 'Robô GANHOUU !!!';
        roboPonto++;
        document.getElementById('robo-ponto').innerHTML = `Pontuação: ${roboPonto}`
    }
}

for(let i = 0; i < gameImg.length; i++) {
    gameImg[i].style.opacity = '0.2'
    gameImg[i].addEventListener('click', function(element) {
        let tempId = element.target.parentNode.id;
        let tempPick = tempId.split('-')[0];
        
        if (tempPick === 'jogador') {
            for(let j = 0; j < gameImg.length; j++) {
                gameImg[j].style.opacity = '0.2';
            }

            jogadorEscolhe = tempId.split('-')[2];
            document.getElementById('jogador-escolhe-' + jogadorEscolhe).firstChild.style.opacity = '1.0'

            roboEscolhe = Math.floor((Math.random() * 3) + 1)
            document.getElementById('robo-escolhe-' + roboEscolhe).firstChild.style.opacity = '1.0'

            console.log('Você escolheu:', jogadorEscolhe);
            console.log('Robô escolheu:', roboEscolhe);
            
            quemGanha(jogoLogica(jogadorEscolhe, roboEscolhe));
            console.log(`Placar:
            Jogador ${jogadorPonto} x ${roboPonto} Robô`)
            console.log('-----------------------------');
        } else {
            alert('Você não é um robô!!');
        }
    })
}