document.addEventListener('DOMContentLoaded', (event) => {
    const rootDiv = document.getElementById('root');
    
  
    // Crear el elemento a y agregarlo al div root
    const link = document.createElement('a');
    link.href = 'https://www.google.com';
    link.textContent = 'Google';
    rootDiv.appendChild(link);

    // Crear el elemento h2 y agregarlo al div root
    const h2 = document.createElement('h2');
    h2.textContent = 'MANIPULANDO EL DOM';
    rootDiv.appendChild(h2);
  
  });
  


  