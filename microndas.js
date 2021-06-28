const comidas = ['Pipoca', 'Macarrão', 'Carne', 'Feijão', 'Brigadeiro'];
const tempoComidas = [10,8,15,12,8];

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

let menuMicrondas = (botao, tempoUsuario, tempoProprio) => {
    tempoZerado = 0;

    switch (botao) {
        case 1:
            prato = comidas[botao-1];
            tempoPadrao = tempoComidas[comidas.indexOf('Pipoca')];
            if(tempoProprio == 'Sim') {
                tempoTotal = tempoUsuario;
            } else {
                tempoTotal = tempoUsuario + tempoPadrao;
            }
            return 'Prato selecionado: '+comidas[botao-1]+'\nTempo padrão: '+tempoComidas[comidas.indexOf('Pipoca')]+'\nTempo Selecionado: '+tempoUsuario+'\nTempo total: '+tempoTotal+'\n'+tempo(tempoPadrao, tempoTotal);
        case 2:
            prato = comidas[botao-1];
            tempoPadrao = tempoComidas[comidas.indexOf('Macarrão')];
            if(tempoProprio == 'Sim') {
                tempoTotal = tempoUsuario;
            } else {
                tempoTotal = tempoUsuario + tempoPadrao;
            }
            return 'Prato selecionado: '+comidas[botao-1]+'\nTempo padrão: '+tempoComidas[comidas.indexOf('Macarrão')]+'\nTempo Selecionado: '+tempoUsuario+'\nTempo total: '+tempoTotal+'\n'+tempo(tempoPadrao, tempoTotal);
        case 3:
            prato = comidas[botao-1];
            tempoPadrao = tempoComidas[comidas.indexOf('Carne')];
            if(tempoProprio == 'Sim') {
                tempoTotal = tempoUsuario;
            } else {
                tempoTotal = tempoUsuario + tempoPadrao;
            }
            return 'Prato selecionado: '+comidas[botao-1]+'\nTempo padrão: '+tempoComidas[comidas.indexOf('Carne')]+'\nTempo Selecionado: '+tempoUsuario+'\nTempo total: '+tempoTotal+'\n'+tempo(tempoPadrao, tempoTotal);
        case 4:
            prato = comidas[botao-1];
            tempoPadrao = tempoComidas[comidas.indexOf('Feijão')];
            if(tempoProprio == 'Sim') {
                tempoTotal = tempoUsuario;
            } else {
                tempoTotal = tempoUsuario + tempoPadrao;
            }
            return 'Prato selecionado: '+comidas[botao-1]+'\nTempo padrão: '+tempoComidas[comidas.indexOf('Feijão')]+'\nTempo Selecionado: '+tempoUsuario+'\nTempo total: '+tempoTotal+'\n'+tempo(tempoPadrao, tempoTotal);
        case 5:
            prato = comidas[botao-1];
            tempoPadrao = tempoComidas[comidas.indexOf('Brigadeiro')];
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

console.log(menuMicrondas(5, 42, 'Não'));