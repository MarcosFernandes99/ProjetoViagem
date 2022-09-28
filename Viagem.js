class Cliente {
    #Nome
    #Cpf
    #DataNascimento

    constructor(nome, cpf, dataNascimento) {
        this.DefinirNome(nome)
        this.DefinirCpf(cpf)
        this.DefinirDataNascimento(dataNascimento)
    }

    BuscarNome() {
        return this.#Nome
    }
    BuscarCpf() {
        return this.#Cpf
    }
    BuscarDataDeNascimento() {
        return this.#DataNascimento
    }
    DefinirNome(nome) {
        this.#Nome = nome
    }
    DefinirCpf(cpf) {
        this.#Cpf = cpf
    }
    DefinirDataNascimento(data) {
        this.#DataNascimento = data
    }
}

class PacoteViagem {
    #Titular
    #PassagemIda
    #PassagemVolta
    #ValorTotal

    constructor(titular, passagemIda, passagemVolta, valorTotal) {
        this.DefinirTitular(titular)
        this.DefinirPassagemIda(passagemIda)
        this.DefinirPassagemVolta(passagemVolta)
        this.DefinirValorTotal(valorTotal)
    }

    BuscarTitular() {
        return this.#Titular
    }
    BuscarPassagemIda() {
        return this.#PassagemIda
    }
    BuscarPassagemVolta() {
        return this.#PassagemVolta
    }
    BuscarValorTotal() {
        return this.#ValorTotal
    }
    DefinirTitular(titular) {
        this.#Titular = titular
    }
    DefinirPassagemIda(passagemIda) {
        this.#PassagemIda = passagemIda
    }
    DefinirPassagemVolta(passagemVolta) {
        this.#PassagemVolta = passagemVolta
    }
    DefinirValorTotal(valorTotal) {
        this.#ValorTotal = valorTotal
    }

}

class Voo {
    #Empresa
    #Numero
    #Data
    #Horario
    #LocalPartida
    #LocalDestino

    constructor(empresa, numero, data, horario, localPartida, localDestino) {
        this.DefinirEmpresa(empresa)
        this.DefinirNumero(numero)
        this.DefinirData(data)
        this.DefinirHorario(horario)
        this.DefinirLocalPartida(localPartida)
        this.DefinirLocalDestino(localDestino)

    }

    BuscarEmpresa() {
        return this.#Empresa
    }
    BuscarNumero() {
        return this.#Numero
    }
    BuscarData() {
        return this.#Data
    }
    BuscarHorario() {
        return this.#Horario
    }
    BuscarLocalPartida() {
        return this.#LocalPartida
    }
    BuscarLocalDestino() {
        return this.#LocalDestino
    }
    DefinirEmpresa(empresa) {
        this.#Empresa = empresa
    }
    DefinirNumero(numero) {
        this.#Numero = numero
    }
    DefinirData(data) {
        this.#Data = data
    }
    DefinirHorario(horario) {
        this.#Horario = horario
    }
    DefinirLocalPartida(localPartida) {
        this.#LocalPartida = localPartida
    }
    DefinirLocalDestino(localDestino) {
        this.#LocalDestino = localDestino
    }
}

class PassagemAerea {
    #Assento
    #PrimeiraClasse
    #Valor
    #Passageiro
    #Voo

    constructor(assento, primeiraClasse, valor, passageiro, voo) {
        this.DefinirAssento(assento)
        this.DefinirPrimeiraClasse(primeiraClasse)
        this.DefinirValor(this.CalcularAcrescimo(valor))
        this.DefinirPassageiro(passageiro)
        this.DefinirVoo(voo)

    }

    CalcularAcrescimo(valor) {
        let resultado
        if (this.PrimeiraClasse) {
            return resultado = valor + (valor * 0.5)
        }
        else {
            return valor
        }
    }

    ExibirResumo() {
        console.log("Passagem em nome de: ", this.Passageiro.Nome)
        console.log("No assento: ", this.Assento, "do voo: ", this.Voo.Numero, "com destino para: ", this.Voo.LocalDestino)
    }

    BuscarAssento() {
        return this.#Assento
    }
    BuscarPrimeiraClasse() {
        return this.#PrimeiraClasse
    }
    BuscarValor() {
        return this.#Valor
    }
    BuscarPassageiro() {
        return this.#Passageiro
    }
    BuscarVoo() {
        return this.#Voo
    }
    DefinirAssento(assento) {
        this.#Assento = assento
    }
    DefinirPrimeiraClasse(primeiraClasse) {
        this.#PrimeiraClasse = primeiraClasse
    }
    DefinirValor(valor) {
        this.#Valor = this.CalcularAcrescimo(valor)
    }
    DefinirPassageiro(passageiro) {
        this.#Passageiro = passageiro
    }
    DefinirVoo(voo) {
        this.#Voo = voo
    }
}


let pessoa = new Cliente("Marcos", "44455566688", "21/10/1994")

let viagemUm = new PacoteViagem(pessoa, "14/10/2022", "25/10/2022", 3000)

let vooUm = new Voo("Gol", "255", "14/10/2022", "12:30", "Congonhas", "Salvador")

let passagem = new PassagemAerea("455", true, 1500, pessoa, vooUm)

passagem.ExibirResumo()

