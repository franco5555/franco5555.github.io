// Función para calcular el tiempo restante hasta la fecha deseada
function countdown(endDate) {
  let days, hours, minutes, seconds;

  endDate = new Date(endDate).getTime();

  if (isNaN(endDate)) {
    return;
  }

  setInterval(calculate, 1000);

  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();

    let timeRemaining = parseInt((endDate - startDate) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);

      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);

      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);

      seconds = parseInt(timeRemaining);

      document.getElementById('countdown').innerHTML = `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
    } else {
      document.getElementById('countdown').innerHTML = 'La fiesta ha comenzado!';
    }
  }
}

// Llamada a la función de cuenta regresiva
countdown('08/03/2024');
