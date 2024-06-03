import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import styles from "./styles";
import Title from "../../components/Title";

import filiaisRepository from "../../models/ListaFiliais";

export  default function Form ({route}){
    let {filia, edit}= route.params;

    const [nome , setNome] = useState("");
    const [fundacao , setFundacao] = useState("");
    const [corPrimaria , setCorPrimaria] = useState("");
    const [corSecundaria , setCorSecundaria] = useState("");
    const [qntdFuncionarios , setQntdFuncionarios] = useState("");
    const [qntdAlunos , setQntdAlunos] = useState("");
    const [qntdTurmas , setQntdTurmas] = useState("");
    const [bairro , setBairro] = useState("");
    const [cidade , setCidade] = useState("");
    const [cep , setCep] = useState("");
    const [telefone , setTelefone] = useState("");
    const [email , setEmail] = useState("");
    const [nomeDoResponsavel , setNomeDoResponsavel] = useState("");
    const [cargoDoResponsavel , setCargoDoResponsavel] = useState("");
    const [isUpdate, setIsUpdate] = useState(edit);

    const navigation = useNavigation();

    useEffect(() =>{
        if (edit) {
            setNome(filia.nome);
            setFundacao(filia.fundacao);
            setCorPrimaria(filia.corPrimaria);
            setCorSecundaria(filia.corSecundaria);
            setQntdFuncionarios(filia.qntdFuncionarios);
            setQntdAlunos(filia.qntdAlunos);
            setQntdTurmas(filia.qntdTurmas);
            setBairro(filia.bairro);
            setCidade(filia.cidade);
            setCep(filia.cep);
            setTelefone(filia.telefone);
            setEmail(filia.email);
            setNomeDoResponsavel(filia.nomeDoResponsavel);
            setCargoDoResponsavel(filia.cargoDoResponsavel);
            setIsUpdate(true)
        } else{
            clearInputs();
        }
    },[filia, edit]);

    const handleFiliaAction = () => {
        if (isUpdate){
            filiaisRepository.Update(filia.id, nome, fundacao, corPrimaria, corSecundaria, qntdFuncionarios, qntdAlunos, qntdTurmas, bairro, cidade, cep, telefone, email, nomeDoResponsavel, cargoDoResponsavel || 0);
            clearInputs();
        }else{
            const newFilia = new filia(nome, fundacao, corPrimaria, corSecundaria, qntdFuncionarios, qntdAlunos, qntdTurmas, bairro, cidade, cep, telefone, email, nomeDoResponsavel, cargoDoResponsavel || 0);
            filiaisRepository.add(newFilia);
            clearInputs();
        }

        navigation.navigate("Filiais");
}
const clearInputs = () => {

    setIsUpdate(false);
    edit = false;
    setNome("");
      setFundacao("");
      setCorPrimaria("");
      setCorSecundaria("");
      setQntdFuncionarios("");
      setQntdAlunos("");
      setQntdTurmas("");
      setBairro("");
      setCidade("");
      setCep("");
      setTelefone("");
      setEmail("");
      setNomeDoResponsavel("");
      setCargoDoResponsavel("");
  };

  return (
    <View style={styles.container}>
        <Title title={isUpdate ? "Editar Filial" : "Nova Filial"} />
        <TextInput 
        placeholder="Nome"
        style={styles.filialInput}
        onChangeText={setNome}
        value={nome}
        />
        <TextInput 
        placeholder="Fundação"
        style={styles.filialInput}
        onChangeText={setFundacao}
        value={fundacao}
        />
        <TextInput 
        placeholder="Cor primaria"
        style={styles.filialInput}
        onChangeText={setCorPrimaria}
        value={corPrimaria}
        />
        <TextInput 
        placeholder="Cor secundaria"
        style={styles.filialInput}
        onChangeText={setCorSecundaria}
        value={corSecundaria}
        />
        <TextInput 
        placeholder="Quantidade de funcionarios"
        style={styles.filialInput}
        onChangeText={setQntdFuncionarios}
        value={qntdFuncionarios}
        />
        <TextInput 
        placeholder="Quantidade de alunos"
        style={styles.filialInput}
        onChangeText={setQntdAlunos}
        value={qntdAlunos}
        />
        <TextInput 
        placeholder="Quantidade de turmas"
        style={styles.filialInput}
        onChangeText={setQntdTurmas}
        value={qntdTurmas}
        />
         <TextInput 
        placeholder="Bairro"
        style={styles.filialInput}
        onChangeText={setBairro}
        value={bairro}
        />
         <TextInput 
        placeholder="Cidade"
        style={styles.filialInput}
        onChangeText={setCidade}
        value={cidade}
        />
         <TextInput 
        placeholder="CEP"
        style={styles.filialInput}
        onChangeText={setCep}
        value={cep}
        />
         <TextInput 
        placeholder="Telefone"
        style={styles.filialInput}
        onChangeText={setTelefone}
        value={telefone}
        />
         <TextInput 
        placeholder="E-mail"
        style={styles.filialInput}
        onChangeText={setEmail}
        value={email}
        />
         <TextInput 
        placeholder="Nome do responsavel"
        style={styles.filialInput}
        onChangeText={setNomeDoResponsavel}
        value={nomeDoResponsavel}
        />
         <TextInput 
        placeholder="Cargo do responsavel"
        style={styles.filialInput}
        onChangeText={setCargoDoResponsavel}
        value={cargoDoResponsavel}
        />
    </View>
  )
}