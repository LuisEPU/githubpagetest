function reemplazarTexto() {
    const inputText = document.getElementById('inputText').value;
    const outputArea = document.getElementById('outputText');
    const outputText = inputText.replace(/e/g, 'е');
  
    outputArea.value = outputText;
  
    // Ajusta altura automáticamente
    setTimeout(() => {
      outputArea.style.height = 'auto';
      outputArea.style.height = outputArea.scrollHeight + 'px';
    }, 0);
  }
  
