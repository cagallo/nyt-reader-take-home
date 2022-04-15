const NotFound = () => {
  return (
    <section className='\error-container'>
      <h2 className='error-message'>{`I'm sorry, this page does not exist, please return home.`}</h2>
      <button className='error-button' onClick={() => {window.location.href='/'}}>Go Back Home</button>
    </section>
  );
};

export default NotFound