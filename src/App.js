import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskName: 'sample task',
      time: Date(),
      finished: false,
    },
  ]);

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };
  return (
    <div className='container-fluid'>
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} />
      ) : (
        'No tasks to show'
      )}

      <Footer showAddTask={showAddTask} />
    </div>
  );
}

export default App;
