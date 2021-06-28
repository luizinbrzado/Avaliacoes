const comidas = ['Pipoca', 'Macarrão', 'Carne', 'Feijão', 'Brigadeiro'];
const tempoComidas = [10,8,15,12,8];

// ---------- Função de verificação do tempo ----------
let tempo = (tempoPadrao, tempoTotal) => {
    if (tempoTotal < tempoPadrao) {
        return 'Tempo insuficiente';
    } else if (tempoTotal >= tempoPadrao * 3) {
        return 'Kabuummm'
    } else if (tempoTotal >= tempoPadrao * 2) {
        return 'Queimou';
    } else {
        return 'Prato pronto, bom apetite!'
    }
}

// ---------- Função principal de menu do Microndas ----------
let menuMicrondas = (botao, tempoUsuario, tempoProprio) => {
    switch (botao) {
        case 1:
            prato = comidas[botao-1];
            tempoPadrao = tempoComidas[comidas.indexOf(botao)];
            if(tempoProprio == 'Sim') {
                tempoTotal = tempoUsuario;
            } else {
                tempoTotal = tempoUsuario + tempoPadrao;
            }
            return 'Prato selecionado: '+comidas[botao-1]+'\nTempo padrão: '+tempoComidas[comidas.indexOf('Pipoca')]+'\nTempo Selecionado: '+tempoUsuario+'\nTempo total: '+tempoTotal+'\n'+tempo(tempoPadrao, tempoTotal);
        case 2:
            prato = comidas[botao-1];
            tempoPadrao = tempoComidas[comidas.indexOf(botao)];
            if(tempoProprio == 'Sim') {
                tempoTotal = tempoUsuario;
            } else {
                tempoTotal = tempoUsuario + tempoPadrao;
            }
            return 'Prato selecionado: '+comidas[botao-1]+'\nTempo padrão: '+tempoComidas[comidas.indexOf('Macarrão')]+'\nTempo Selecionado: '+tempoUsuario+'\nTempo total: '+tempoTotal+'\n'+tempo(tempoPadrao, tempoTotal);
        case 3:
            prato = comidas[botao-1];
            tempoPadrao = tempoComidas[comidas.indexOf(botao)];
            if(tempoProprio == 'Sim') {
                tempoTotal = tempoUsuario;
            } else {
                tempoTotal = tempoUsuario + tempoPadrao;
            }
            return 'Prato selecionado: '+comidas[botao-1]+'\nTempo padrão: '+tempoComidas[comidas.indexOf('Carne')]+'\nTempo Selecionado: '+tempoUsuario+'\nTempo total: '+tempoTotal+'\n'+tempo(tempoPadrao, tempoTotal);
        case 4:
            prato = comidas[botao-1];
            tempoPadrao = tempoComidas[comidas.indexOf(botao)];
            if(tempoProprio == 'Sim') {
                tempoTotal = tempoUsuario;
            } else {
                tempoTotal = tempoUsuario + tempoPadrao;
            }
            return 'Prato selecionado: '+comidas[botao-1]+'\nTempo padrão: '+tempoComidas[comidas.indexOf('Feijão')]+'\nTempo Selecionado: '+tempoUsuario+'\nTempo total: '+tempoTotal+'\n'+tempo(tempoPadrao, tempoTotal);
        case 5:
            prato = comidas[botao-1];
            tempoPadrao = tempoComidas[comidas.indexOf(botao)];
            if(tempoProprio == 'Sim') {
                tempoTotal = tempoUsuario;
            } else {
                tempoTotal = tempoUsuario + tempoPadrao;
            }
            return 'Prato selecionado: '+comidas[botao-1]+'\nTempo padrão: '+tempoComidas[comidas.indexOf('Brigadeiro')]+'\nTempo Selecionado: '+tempoUsuario+'\nTempo total: '+tempoTotal+'\n'+tempo(tempoPadrao, tempoTotal);
        default:
            return 'Prato inexistente';
    }
}

console.log(menuMicrondas(1, 5, 'Sim')); // 1 = Selecionando pipoca /// 5 = Tempo colocado pelo usuário /// 'Sim' = Quer apenas o próprio tempo