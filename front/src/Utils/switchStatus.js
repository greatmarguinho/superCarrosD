export const getStatusLabel = (statusId) => {
    let status;

    switch (statusId) {
      case 1:
        status = 'Vendido';
        break;
      case 2:
        status = 'Em andamento';
        break;
      case 3:
        status = 'Disponível';
        break;


      default:
        status = 'Outro status';
        break;
    }

    return status;
  };
