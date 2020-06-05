import React, {useState, useEffect} from 'react';

import '../css/app.scss';

import BugCard from './bugCard';

function App() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    console.log('component did mount')
    getBug();
  }, []);

  const getBug = () => {
    console.log('initial fetch')
    fetch('http://localhost:8080')
      .then(response => {
        console.log('response from app');
        return response.json();
      })
      .then(data => {
        console.log(data);
        setBugs(data);
      });
  }

  const createBug = () => {
    let title = prompt('Enter bug title');
    let status = 'submitted';
    let description = prompt('Enter the bug description');

    fetch('http://localhost:8080/bugs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, status, description}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getBug();
      });
  }

  const deleteBug = () => {
    let id = prompt('Enter bug id');
    fetch(`http://localhost:8080/bugs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getBug();
      });
  }

  return (
    <div>
      {bugs ? bugs.map( b => <BugCard {...b}/>) : 'no bugs'}
      <br />
      <button onClick={createBug}>Add bug</button>
      <br />
      <button onClick={deleteBug}>Delete bug</button>
    </div>
  );
}

export default App;