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
        if (nome.length > 50) {
            console.log(`Número máximo de caracteres para Nome é 50`)
            return
        }

        this.#Nome = nome
    }
    DefinirCpf(cpf) {
        if (cpf.length > 11) {
            console.log(`Número máximo de caracteres para CPF é 11`)
            return
        }

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

    constructor(titular, passagemIda, passagemVolta) {
        this.DefinirTitular(titular)
        this.DefinirPassagemIda(passagemIda)
        this.DefinirPassagemVolta(passagemVolta)
        this.DefinirValorTotal(this.CalcularValorTotal())
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

    CalcularValorTotal(){
        return this.#PassagemIda.BuscarValor() + this.#PassagemVolta.BuscarValor()  
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
        if (this.#PrimeiraClasse) {
            return resultado = valor + (valor * 0.5)
        }
        else {
            return valor
        }
    }

    ExibirResumo() {
        console.log("Passagem em nome de: ", this.#Passageiro.BuscarNome())
        console.log("No assento: ", this.#Assento, "do voo: ", this.#Voo.BuscarNumero(), "com destino para: ", this.#Voo.BuscarLocalDestino())
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
        if (primeiraClasse == true || primeiraClasse == false) {
            this.#PrimeiraClasse = primeiraClasse
            return
        }
        else {
            console.log(`ERRO! Valor não booleano, insira outro!`)
        }

    }
    DefinirValor(valor) {
        if (valor > 0) {
            this.#Valor = valor
            return
        }
        else {
            console.log(`ERRO! Valor menor que 0`)
        }

    }
    DefinirPassageiro(passageiro) {
        this.#Passageiro = passageiro
    }
    DefinirVoo(voo) {
        this.#Voo = voo
    }
}

let clientes = []
let voos = []
let pacotesViagem = []

let continuar = true
do {
    let opcao = prompt(`Digite 1-Cadastrar Cliente/2-Cadastrar Voo/3-Cadastrar Pacote de Viagem`)

    switch (opcao) {
        case "1":
            CadastrarCliente()
            break;
        case "2":
            CadastrarVoo()
            break;
        case "3":
            CadastrarPacoteViagem()
            break;
    }

    let opcaoContinuar = prompt(`1-Continuar/2-Encerrar`)
    if (opcaoContinuar != 1) {
        continuar = false
    }
} while (continuar)



function CadastrarCliente() {
    // let nomeAd = prompt(`Qual o seu nome?`)
    // let cpfAd = prompt(`Qual o seu CPF?`)
    // let dataNascimentoAd = prompt(`Qual a sua data de nascimento?`)

    let ClienteUm = new Cliente("Marcos", "22233344455", "21/10/2022")
    clientes.push(ClienteUm)
    let ClienteDois = new Cliente("Junior", "11144455588", "10/10/2022")
    clientes.push(ClienteDois)

    ExibirClientes()
   
}

function ExibirClientes(){
    clientes.forEach((x, index) => {
        console.log(`${index + 1} - ${x.BuscarNome()} - ${x.BuscarCpf()} - ${x.BuscarDataDeNascimento()}`)
    })
}

function CadastrarVoo() {
    // let empresa = prompt(`Qual a empresa aérea?`)
    // let numero = prompt(`Qual o número do Voo?`)
    // let data = prompt(`Qual a data do Voo?`)
    // let horario = prompt(`Qual o horário do Voo?`)
    // let localPartida = prompt(`Qual o local de partida?`)
    // let localDestino = prompt(`Qual o local de destino?`)

    let vooUm = new Voo("Gol", "255", "14/10/2022", "12:30", "São Paulo", "Salvador")
    voos.push(vooUm)
    let vooDois = new Voo("Latam", "123", "20/10/2022", "16:00", "Salvador", "São Paulo")
    voos.push(vooDois)
    let vooTrês = new Voo("Latam", "456", "05/10/2022", "20:00", "Rio De janeiro", "Brasília")
    voos.push(vooTrês)
    let vooQuatro = new Voo("Latam", "289", "15/10/2022", "10:00", "Brasília", "Rio de Janeiro")
    voos.push(vooQuatro)

    ExibirVoos()
}

function ExibirVoos(){
    voos.forEach((x, index) => {
        console.log(`${index + 1 } - ${x.BuscarEmpresa()} - ${x.BuscarNumero()} - ${x.BuscarData()} - ${x.BuscarHorario()} - ${x.BuscarLocalPartida()} - ${x.BuscarLocalDestino()}`)
    })
}

function CadastrarPacoteViagem(){
    ExibirClientes()
    let nomeCliente = prompt(`Qual o nome do usuário?`)
    let cliente = clientes.find(x => x.BuscarNome() == nomeCliente)
    let passagemIda = CadastrarPassagemIda(cliente)
    let passagemVolta = CadastrarPassagemVolta(passagemIda)     
    pacotesViagem.push(new PacoteViagem(cliente, passagemIda, passagemVolta))

}

function CadastrarPassagemIda(passageiro){
    ExibirVoos()
    let numeroVoo = prompt(`Qual o número do voo de ida?`)
    let voo = voos.find(x => x.BuscarNumero() == numeroVoo)

    let primeiraClasse = prompt(`Vai de primeira classe? Digite 1 para SIM e 2 para NÃO!`)
    if(primeiraClasse == "1"){
        primeiraClasse = true
    }
    else{
        primeiraClasse = false
    }

    let valor = parseFloat(prompt(`Qual o valor?`))

    let poltrona = SolicitarPoltrona(voo.BuscarNumero())

    return new PassagemAerea(poltrona, primeiraClasse, valor, passageiro, voo)

}

function CadastrarPassagemVolta(passagemIda){
    let passageiro = passagemIda.BuscarPassageiro()

    ExibirVoosDeVolta(passagemIda.BuscarVoo().BuscarLocalDestino())
    let numeroVoo = prompt(`Qual o número do voo de volta?`)
    let voo = voos.find(x => x.BuscarNumero() == numeroVoo)

    let primeiraClasse = prompt(`Vai de primeira classe? Digite 1 para SIM e 2 para NÃO!`)
    if(primeiraClasse == "1"){
        primeiraClasse = true
    }
    else{
        primeiraClasse = false
    }

    let valor = parseFloat(prompt(`Qual o valor?`))

    let poltrona = SolicitarPoltrona(voo.BuscarNumero())

    return new PassagemAerea(poltrona, primeiraClasse, valor, passageiro, voo)
}

function ExibirVoosDeVolta(localDestino){
    voos.forEach((x, index) => {
        if(x.BuscarLocalPartida() == localDestino){
            console.log(`${index + 1} - ${x.BuscarEmpresa()} - ${x.BuscarNumero()} - ${x.BuscarData()} - ${x.BuscarHorario()} - ${x.BuscarLocalPartida()} - ${x.BuscarLocalDestino()}`)
        }
    })
}

function SolicitarPoltrona(numeroVoo){
    let ocupado = false
    do{
    ocupado = false
        let numeroAssento = prompt(`Qual o numero da poltrona?`)
        pacotesViagem.forEach(x => {
            if(x.BuscarPassagemIda(). BuscarVoo().BuscarNumero() == numeroVoo){
                if(x.BuscarPassagemIda().BuscarAssento() == numeroAssento){
                    ocupado = true
                }
            }
        })
        pacotesViagem.forEach(x => {
            if(x.BuscarPassagemVolta(). BuscarVoo().BuscarNumero() == numeroVoo){
                if(x.BuscarPassagemVolta().BuscarAssento() == numeroAssento){
                    ocupado = true
                }
            }
        })
            if(!ocupado){
                return numeroAssento
            }

        console.log(`Poltrona ocupada!`)
}while(true)
}