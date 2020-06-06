import React, {useState, useEffect} from 'react';

import '../css/app.scss';

import Menu from './menu';
import BugCard from './bugCard';

function App() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    getBug();
  }, []);

  const getBug = () => {
    fetch('http://localhost:8080')
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        setBugs(data);
      });
  }

  const createBug = () => {
    let title = prompt('Enter bug title');
    let status = 'submitted';
    let description = prompt('Enter the bug description');
    let resolution = '';

    fetch('http://localhost:8080/bugs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, status, description, resolution}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getBug();
      });
  }

  const deleteBug = (id) => {
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

  const resolveBug = (id) => {
    console.log('resolve', id)
    let resolution = prompt('Enter resolution.')
    fetch('http://localhost:8080/bugs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id,resolution})
    })
    .then(response => {
      return response.text();
    })
    .then(data => {
      alert(data);
      getBug();
    })
  }

  return (
    <div>
      <Menu createBug={createBug}/>
      <div className="content">
        {bugs ? bugs.map( b => <BugCard {...b} 
                                        deleteBug={deleteBug}
                                        resolveBug={resolveBug}/>) 
                : 
                'no bugs'}
      </div>
      
    </div>
  );
}

export default App;