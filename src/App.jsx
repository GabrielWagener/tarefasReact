import { Button, Container, Flex, Input, Item, Spacer } from "./styles";

import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);

  //Metódo para adicionar tarefa
  const addTask = () => {
    if (!task) return alert("Preencha uma tarefa");
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    };
    setListTask([...listTask, newTask]);
    setTask("");

  };

  //Método para remover tarefa
  const removeTask = (id) => {
    const newList = listTask.filter((task) => task.id !== id);
    setListTask(newList);
  };

  //Método para marcar tarefa como concluída
  const toggleChecked = (id, checked) => {
    const index = listTask.findIndex((task) => task.id === id);
    const newList = listTask;
    newList[index].checked = !checked;
    setListTask([...newList]);
  };
  
  //Método para obter quantidade total de tarefas
  const counterTotalTask = () => {
    return listTask.length
  };

  //Método para obter quantidade total de tarefas concluídas
  const counterCheckedTask = () => {
   const task = listTask.filter((task) => task.checked == true)
   return task.length
  
  };

  //Metódo para obter quantidade total de tarefas não concluídas
  const counterNotCheckedTask = () => {
    const task = listTask.filter((task) => task.checked == false)
    return task.length
   
   };
  
  return (
    
    <Container>
      <h1 className="title">Lista de Tarefas</h1>
      <h2 className="title-Quantidades">Quantidade:{counterTotalTask()}</h2>
      <h2 className="title2-Concluidas">Concluídas:{counterCheckedTask()}</h2>
      <h2 className="title2-naoconcluidas">Não Concluídas:{counterNotCheckedTask()}</h2>


      <Spacer />

      <Flex direction="row">
        <Input
          value={task}
          placeholder="Digite sua tarefa no campo!"
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={addTask}>Adicionar</Button>
      </Flex>
      <Spacer margin="16px" />

      <ul>
        {listTask.map((task) => (
          <>
            <Item Item checked={task.checked} key={task.id}>
              <p>{task.task}</p>
              <Flex direction="row">
                <button onClick={() => toggleChecked(task.id, task.checked)}>
                  <i className="bx bx-check "></i>
                </button>
                <button onClick={() => removeTask(task.id)}>
                  <i className="bx bx-trash "></i>
                </button>
              </Flex>
            </Item>
            <Spacer margin="12px" />
          </>
        ))}
      </ul>
    </Container>
  );
}

export default App;