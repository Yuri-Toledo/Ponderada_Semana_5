import logo from './logo.svg';
import styles from '../src/styles.module.scss';
import React, { useEffect, useState } from 'react';


function App() {

  const [enviouUsuario, setEnviouUsuario] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  const [enviouEmprego, setEnviouEmprego] = useState(false);
  const [descricao, setDescricao] = useState('');
  const [salario, setSalario] = useState('');
  const [disponibilidade, setDisponibilidade] = useState(true)

  const [empregos, setEmpregos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    

      fetch('http://127.0.0.1:3000/usuario')
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data)
        console.log(usuarios)
      })
      .catch((err) => {
        console.log(err.message)
      })
    

  }, []);

  useEffect(() => {
    

      fetch('http://127.0.0.1:3000/emprego')
      .then((response) => response.json())
      .then((data) => {
        setEmpregos(data)
        console.log(empregos)
      })
      .catch((err) => {
        console.log(err.message)
      })
    

  }, []);

  useEffect(() => {

    if(enviouEmprego) {
      const intSalario = parseInt(salario)

      const emprego = {
        descricao: descricao,
        salario: intSalario
      }

      fetch('http://127.0.0.1:3000/emprego', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emprego)
      });
      // const data = response.json();

      setEnviouEmprego(false);
      setDescricao('')
      setSalario('')
    }
  }, [enviouEmprego])

  useEffect(() => {

    if(enviouUsuario){

      const intIdade = parseInt(idade);

      const usuario = {
        email: email,
        senha: senha,
        nome: nome,
        disponivel: disponibilidade,
        idade: intIdade
      }
  
      fetch('http://127.0.0.1:3000/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario)
      });
      // const data = response.json();
  
      setEnviouUsuario(false);
      setEmail('')
      setSenha('')
      setNome('')
      setIdade('')
      setDisponibilidade(true)

    }

  }, [enviouUsuario])

  return (
    <div className={styles.main}>
      <h2>Ponderada Semana 5</h2>
      <div className={styles.Usuario}>
        <div className={styles.formUsuario}>
          <h5>Cria Usuário</h5>
          <form onSubmit={(e) => {
            e.preventDefault();
            setEnviouUsuario(true)
          }}>

            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
            <input type="text" placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="number" placeholder='Idade' value={idade} onChange={(e) => setIdade(e.target.value)} />
            <div className={styles.disponivel}>
              <input type="checkbox" checked={disponibilidade} onChange={(e) => setDisponibilidade(e.target.checked)} />
              <p>Disponível</p>
            </div>
          
            <button type='submit'>Confirmar</button>
          </form>

        </div>

        <div className={styles.visualizaUsuarios}>

        {usuarios.map((usuario) => (

            <div className={styles.usuario}>
              <p>Email: {usuario.email}</p>
              <br />
              <p>Nome: {usuario.nome}</p>
              <br />
              <p>Idade: {usuario.idade}</p>
              <br />
              <p>Disponibilidade: {usuario.disponivel}</p>
            </div>
        
          ))}

        </div>
      </div>
      <div className={styles.Emprego}>

        <div className={styles.formEmprego}>

          <h5>Cria Emprego</h5>

          <form onSubmit={(e) => {
            e.preventDefault();
            setEnviouEmprego(true)
          }} >

            <input type="text" placeholder='descricao' value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            <input type="number" placeholder='salario' value={salario} onChange={(e) => setSalario(e.target.value)} />

            <button type='submit'>Confirmar</button>
          </form>
        </div>

        <div className={styles.visualizaEmpregos}>
          {empregos.map((emprego) => (

            <div className={styles.emprego}>
              <p>Descrição: {emprego.descricao}</p>
              <p>Salário: {emprego.salario}</p>
            </div>
          )
          )}
        </div>


      </div>
      
    </div>
  );
}

export default App;
