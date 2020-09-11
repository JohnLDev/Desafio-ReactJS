import React, { useState, useEffect } from "react";

import "./styles.css";
import Header from"./components/Hearder"
import api from "./services/api";


function App() {

  const [repositories,setRepository] = useState([])

  useEffect(()=>{ // não deve usar async no useEffect
    api.get('/repositories').then(response =>{
      setRepository(response.data)
    })
  },[])

  async function handleAddRepository() {
    const response = await api.post('/repositories',{
      title:`Novo repositório ${Date.now()}`,
      url:"https://github.com/JohnLDev/Desafio-ReactJS",
      techs:["ReactJS","NodeJS"]
    })
    const repository = response.data
    setRepository([...repositories,repository])
  }

  async function handleRemoveRepository(id) {

    await api.delete(`/repositories/${id}`)
    
    setRepository(repositories.filter(repository => repository.id !== id))
  }
    
    
    
  

  return (
    <>
    <Header title="Repositories"/>
    <div>
      <ul data-testid="repository-list">
        
        {repositories.map(repository => (<li key={repository.id}>{repository.title} <button onClick={() => handleRemoveRepository(repository.id)}>
            Remover
          </button> </li>))}

          
        
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
    </>
  );
  
}
export default App;
