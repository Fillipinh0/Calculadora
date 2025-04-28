function Calculadora() {

  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  }


  this.capturaEnter = () => {
    document.addEventListener("keyup", (e) => {
      if (e.key == "Enter") {this.realizaContas();}
    });
  }

  this.capturaCliques = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.del();
      if (el.classList.contains("btn-eq")) this.realizaContas();
    });

  }

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText; 
    this.display.focus();
  }

  this.clear = () => this.display.value = "";
  this.del = () => this.display.value = this.display.value.slice(0, -1);
  this.realizaContas = () => {
    try {
      let conta = this.display.value;
        if (!conta.trim()) {throw new Error();}

        if (/[^0-9+\-*/().\s]/.test(conta)) {
          throw new Error("Entrada inválida: contém caracteres não permitidos");
        }
  
        conta = eval(conta);
        
        if(!conta) {throw new Error();}

        this.display.value = conta;

      } catch(e) {
        alert(e.message)
      }
  }
}


const calculadora = new Calculadora();
calculadora.inicia();


