import { useRef, useState } from 'react';

const AddTask = ({ tasks, setTasks, onDelete }) => {
  const [taskName, setTaskName] = useState();
  const [time, setTime] = useState();
  const [finished, setFinished] = useState();

  const taskNameRef = useRef();
  const timeRef = useRef();
  const finishedRef = useRef();

  const addTask = () => {
    const id = Math.floor(Math.random() * 1234);
    const newTask = { id, taskName, time, finished };
    const newTasks = [...tasks, newTask];

    setTasks(newTasks);

    console.log(newTasks);
  };

  return (
    <div className='mt-4 container'>
      <label className=''>Task Name</label>
      <input
        type='text'
        placeholder='write new task here'
        className='taskName-input btn-block task-input rounded outline-none p-2 '
        ref={taskNameRef}
        onChange={() => setTaskName(taskNameRef.current.value)}
      />

      <label className='mt-3'>Time</label>
      <input
        type='text'
        placeholder='write date here'
        className='time-input btn-block task-input rounded outline-none p-2 '
        ref={timeRef}
        onChange={() => setTime(timeRef.current.value)}
      />

      <div className='mt-3'>
        <label>Finished</label>
        <span>
          <input
            type='checkbox'
            value={finished}
            className='float-right mb-3 '
            style={{ width: 20, height: 20 }}
            ref={finishedRef}
            onChange={() => setFinished(finishedRef.current.checked)}
          />
        </span>
      </div>

      <button
        className='btn btn-block btn-primary p-2 font-weight-bold'
        onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
