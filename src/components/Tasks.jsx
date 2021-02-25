import Task from './Task';

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      <div className='fluid mt-5'>
        <Task tasks={tasks} onDelete={onDelete} />
      </div>
    </>
  );
};

export default Tasks;
