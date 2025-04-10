
function somar() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const resultado = num1 + num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
  }
  

  function alterarPorId() {
    document.getElementById("exemploId").style.color = "red";
  }
  

  function alterarPorName() {
    const elementos = document.getElementsByName("exemploName");
    if (elementos.length > 0) {
      elementos[0].style.color = "green";
    }
  }
  

  function alterarPorClasse() {
    const elementos = document.getElementsByClassName("exemploClasse");
    if (elementos.length > 0) {
      elementos[0].style.color = "purple";
    }
  }
  