function ping() {
    const url = 'https://martv.marstore.repl.co/home/';
    const timeout = 5000; // tempo limite em milissegundos
    fetch(url, {timeout})
      .then(response => {
        if (response.ok) {
          console.log('Site está online!');
          document.getElementById('ping-status').textContent = 'Site está online!';
        } else {
          console.log('Site está offline!');
          document.getElementById('ping-status').textContent = 'Site está offline!';
        }
      })
      .catch(error => {
        console.error('Erro ao pingar o site:', error);
        document.getElementById('ping-status').textContent = 'Erro ao pingar o site!';
      });
  }
  
  // ping a cada 30 segundos
  setInterval(ping, 10000);
  