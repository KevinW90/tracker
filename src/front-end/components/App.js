import React, {useState, useEffect} from 'react';

import '../css/app.scss';

import Menu from './menu';
import BugCard from './bugCard';

function App() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    getBug();
    const script = document.createElement("script");
    script.async = true;
    script.src = "flexgrid.js";

    document.head.appendChild(script);
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
    // current date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let submitted = mm + '/' + dd + '/' + yyyy;
    ///////////

    fetch('http://localhost:8080/bugs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, status, description, submitted}),
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

  const resolveBug = (id, status) => {
    console.log('resolve', id);
    // current date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let resolved = mm + '/' + dd + '/' + yyyy;
    ///////////
    let resolution = prompt('Enter resolution.')
    fetch('http://localhost:8080/bugs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id,resolution, resolved})
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
      <div className="main">
        {bugs ? bugs.map( b => <BugCard {...b} 
                                        deleteBug={deleteBug}
                                        resolveBug={resolveBug}
                                        key={b.id}/>) 
                : 
                'no bugs'}
      </div>
      
    </div>
  );
}

export default App;