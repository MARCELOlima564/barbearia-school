export default class Filiais {
    constructor(nome, fundacao, corPrimaria, corSecundaria, qntdFuncionarios,
         qntdAlunos, qntdTurmas, bairro, cidade, cep, telefone, email,
          nomeDoResponsavel, cargoDoResponsavel){

            this.nome = nome,
            this.id = this.generateId(),
            this.fundacao = fundacao;
            this.corPrimaria = corPrimaria;
            this.corSecundaria = corSecundaria;
            this.qntdFuncionarios = qntdFuncionarios;
            this.qntdAlunos = qntdAlunos;
            this.qntdTurmas = qntdTurmas;
            this.bairro = bairro;
            this.cidade = cidade;
            this.cep = cep;
            this.telefone = telefone;
            this.email = email;
            this.nomeDoResponsavel = nomeDoResponsavel;
            this.cargoDoResponsavel = cargoDoResponsavel;

          }
          generateId() {
            return Math.floor(Math.random() * 1000);
          }
          
}