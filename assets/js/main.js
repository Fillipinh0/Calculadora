

const inputTarefa = document.querySelector(".input-tarefa");
function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),

    

    inicia() {
      this.cliqueBotoes();
      this.presionaEnter();
    },

    presionaEnter() {
      this.display.addEventListener("keyup", e => {
        if (e.key == "Enter") {
          this.realizaConta();
        }
      });
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1)
    },

    clearDisplay() {
      this.display.value = "";
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        if (!conta.trim()) {
          throw new Error();
        }

        if (/[^0-9+\-*/().\s]/.test(conta)) {
          throw new Error("Entrada inválida: contém caracteres não permitidos");
        }
  
        conta = eval(conta);
        
        if(!conta) {
          alert("teste");
          throw new Error()
        }

        this.display.value = conta;

      } catch(e) {
        alert(e.message)
      }
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if(el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if(el.classList.contains("btn-del")) {
          this.apagaUm()
        }

        if(el.classList.contains("btn-eq"))
        {
          
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    }
  
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
