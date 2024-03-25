import { filiaisMocadas } from "../data/Filiais/Filiais";
import Filiais from "./Filiais";

class ListaFiliais {
    constructor(){
        this.filiais = [];
    }

    getAll(){
        return this.filiais;
    }

    get(id) {
        return this.filiais.find((filia) => filia.id == id );
    }

    add(filia){
        this.filiais.push(filia);
    }
    delete(id){
        this.filiais = this.filiais.filter((filia) => filia.id !== id);
    }

    Update(id, nome, fundacao, corPrimaria, corSecundaria, qntdFuncionarios, qntdAlunos, qntdTurmas, bairro, cidade, cep, telefone, email,
        nomeDoResponsavel, cargoDoResponsavel){
            const filia = this.get(id);

            if(filia){
                filia.id = id;
                filia.nome = nome;
                filia.fundacao = fundacao;
                filia.corPrimaria = corPrimaria;
                filia.corSecundaria = corSecundaria;
                filia.qntdFuncionarios = qntdFuncionarios;
                filia.qntdAlunos = qntdAlunos;
                filia.qntdTurmas = qntdTurmas;
                filia.bairro = bairro;
                filia.cidade = cidade;
                filia.cep = cep;
                filia.telefone = telefone;
                filia.email = email;
                filia.nomeDoResponsavel = nomeDoResponsavel;
                filia.cargoDoResponsavel = cargoDoResponsavel;           
            }
            return filia;
        }
}

const filiaisRepository = new ListaFiliais();
filiaisMocadas.map((filial) =>{ const newFilia = new Filiais(filial.nome, filial.fundacao, filial.corPrimaria, filial.corSecundaria, 
    filial.qntdFuncionarios, filial.qntdAlunos, filial.qntdTurmas, filial.bairro, filial.cidade, filial.cep,
    filial.telefone, filial.email, filial.nomeDoResponsável, filial.cargoDoResponsável || 0);
    
    filiaisRepository.add(newFilia);})


export default filiaisRepository;