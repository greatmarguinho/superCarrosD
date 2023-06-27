export const getColorLabel = (corId) => {
    let cor;

    switch (corId) {
      case 1:
        cor = 'Preto';
        break;
      case 2:
        cor = 'Branco';
        break;
      case 3:
        cor = 'Azul';
        break;
      case 4:
        cor = 'Prata';
        break;
      case 5:
        cor = 'Vermelho';
        break;
      case 6:
        cor = 'Vermelho';
        break;
      case 7:
        cor = 'Vinho';
        break;
      default:
        cor = 'Outra Cor';
        break;
    }

    return cor;
  };