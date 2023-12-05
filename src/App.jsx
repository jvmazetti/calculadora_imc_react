import './app.css';

function App() {
    //PEGAR TODOS OS DADOS RELEVANTES

        let formulario = document.querySelector('form');
        let caixaNome = document.querySelector('.formulario__items--nome');
        let caixaIdade = document.querySelector('.formulario__items--idade');
        let caixaPeso = document.querySelector('.formulario__items--peso');
        let caixaAltura = document.querySelector('.formulario__items--altura');
        let caixaImc = document.querySelector('.formulario__resultado--imc');
        let aviso = document.querySelector('.formulario__resultado--aviso');
        let botaoEnviar = document.querySelector('.formulario__botao--enviar');
        let botaoLimpar = document.querySelector('.formulario__botao--limpar');

    //CRIAR O EVENTO 

        botaoEnviar.addEventListener( 'click', function(e){
            let nome = caixaNome.value
            let idade = caixaIdade.value
            let peso = caixaPeso.value
            let altura = caixaAltura.value
            let imc = (peso / (altura * altura)).toFixed(1)

            console.log(nome)
            console.log(idade)
            console.log(peso)
            console.log(altura)
            console.log(imc)

            caixaImc.value = imc
            let sit = situacaoDoPeso(imc)
            aviso.textContent = sit

            e.preventDefault()
        })


  return (
    <>
        <div class="container">
            <h1 class="titulo">Calculadora de IMC</h1>
            <form>
                <div class="formulario__items">
                    <label for="nome">Nome:</label>
                    <input type="text" name="nome" class="formulario__items--nome" autofocus required/>
                    <label for="idade">Idade:</label>
                    <input type="number" name="idade" class="formulario__items--idade" min="0" autofocus required/>
                    <label for="peso">Peso:</label>
                    <input type="number" name="peso" step="0.01" class="formulario__items--peso" min="0.0" autofocus required/>
                    <label for="altura">Altura:</label>
                    <input type="number" name="altura" class="formulario__items--altura" step="0.01" min="0.0" autofocus required/>
                </div>
                <div class="formulario__botao">
                    <button type="submit" class="formulario__botao--enviar">
                        Enviar
                    </button>
                    <button type="reset" class="formulario__botao--limpar">
                        Limpar
                    </button>
                </div>
                <div class="formulario__resultado">
                    <label for="imc">IMC</label>
                    <input type="number" name="imc" step="0.01" class="formulario__resultado--imc" readOnly value="0.0"/>
                    <span class="formulario__resultado--aviso"></span>
                </div>
                <div class="formulario__ficha">
                    <h2 class="formulario__ficha--titulo">IMC</h2>
                    <p class="formulario__ficha--nome"></p>
                    <p class="formulario__ficha--idade"></p>
                    <p class="formulario__ficha--peso"></p>
                    <p class="formulario__ficha--altura"></p>
                    <p class="formulario__ficha--imc"></p>
                    <p class="formulario__ficha--aviso"></p>
                </div>
            </form>
        </div>  
    </>
  )
}

export default App
