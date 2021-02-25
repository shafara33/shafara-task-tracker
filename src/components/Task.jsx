import { userRef } from 'react';
import Tasks from './Tasks';

const Task = ({ tasks, onDelete }) => {
  let checkRef;

  return (
    <div>
      {tasks.map((task) => (
        <h5 key={task.id} className='task-bg p-3 rounded-lg'>
          <span className='mr-3'>
            <input
              type='checkbox'
              style={{ width: 20, height: 20 }}
              ref={checkRef}
            />
          </span>
          {task.taskName}
          <svg
            onClick={() => onDelete(task.id)}
            width='1em'
            height='1em'
            viewBox='0 0 16 16'
            className='bi bi-x-square-fill text-danger float-right'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z'
            />
          </svg>
          <p className='font-weight-light ml-4 '>{task.time}</p>
        </h5>
      ))}
    </div>
  );
};

export default Task;
