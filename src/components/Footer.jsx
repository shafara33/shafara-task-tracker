const Footer = ({ showAddTask, onAdd }) => {
  const onClick = () => console.log('add buttton clicked');
  return (
    <div className='container text-center mt-5 mb-5'>
      <svg
        onClick={onAdd}
        width='5em'
        height='5em'
        viewBox='0 0 16 16'
        className='bi bi-plus-circle-fill text-primary'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z'
        />
      </svg>
    </div>
  );
};

export default Footer;
