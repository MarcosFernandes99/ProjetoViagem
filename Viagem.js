class Cliente {
    Nome
    Cpf
    DataNascimento

    constructor(nome, cpf, dataNascimento){
        this.Nome = nome
        this.Cpf = cpf
        this.DataNascimento = dataNascimento

    }
}

class PacoteViagem{
    Titular
    PassagemIda
    PassagemVolta
    ValorTotal

    constructor(titular, passagemIda, passagemVolta, valorTotal){        
        this.Titular = titular
        this.PassagemIda = passagemIda
        this.PassagemVolta = passagemVolta
        this.ValorTotal = valorTotal
    }
}

class Voo{
    Empresa
    Numero
    Data
    Horario
    LocalPartida
    LocalDestino

    constructor(empresa, numero, data, horario, localPartida, localDestino){
        this.Empresa = empresa
        this.Numero = numero
        this.Data = data
        this.Horario = horario
        this.LocalPartida = localPartida
        this.LocalDestino = localDestino

    }
}

class PassagemAerea{
    Assento
    PrimeiraClasse
    Valor
    Passageiro
    Voo

    constructor(assento, primeiraClasse, valor, passageiro, voo){
        this.Assento = assento
        this.PrimeiraClasse = primeiraClasse
        this.Valor = this.CalcularAcrescimo(valor)
        this.Passageiro = passageiro
        this.Voo = voo

    }

    CalcularAcrescimo(valor){
        let resultado
        if(this.PrimeiraClasse){
            return resultado = valor + (valor*0.5)
        }
        else{
            return valor
        }
    }

    ExibirResumo(){
        console.log("Passagem em nome de: ", this.Passageiro.Nome)
        console.log("No assento: ", this.Assento, "do voo: ", this.Voo.Numero, "com destino para: ", this.Voo.LocalDestino)
    }
}


let pessoa = new Cliente("Marcos", "44455566688", "21/10/1994")

let viagemUm = new PacoteViagem(pessoa, "14/10/2022", "25/10/2022", 3000)

let vooUm = new Voo("Gol", "255", "14/10/2022", "12:30", "Congonhas", "Salvador")

let passagem = new PassagemAerea("455", true, 1500, pessoa, vooUm)

passagem.ExibirResumo()

