import React, {useState, useEffect} from 'react';

import '../css/app.scss';

import BugCard from './bugCard';

const bugs = [
  {
    title: 'Server responds with 500',
    status: 'submitted',
    description: `Vivamus lobortis orci quis erat varius, nec aliquet libero pretium. 
                  Aenean a tempor dui. Etiam in risus non orci dapibus aliquam sed finibus elit. 
                  Nullam sit amet dolor id lacus aliquam cursus vitae eu tellus. Proin a feugiat felis. 
                  Cras volutpat cursus rutrum. Vivamus mollis ornare condimentum. Vivamus vitae blandit libero.`
  },
  {
    title: 'Reference Error',
    status: 'in progress',
    description: 'Etiam porttitor magna leo, ac auctor massa consequat nec.'
  },
  {
    title: 'ArrayIndexOutOfBoundsException',
    status: 'resolved',
    description: `Aenean quis diam consequat, tincidunt nulla quis, convallis tellus. 
                  Nunc arcu felis, laoreet vitae tellus non, aliquam facilisis ligula.`
  }
]
function App() {
  // const [bugs, setBugs] = useState(false);

  // useEffect(() => {
  //   getBug();
  // }, []);

  // const getBug = () => {
  //   fetch('http://localhost:8080')
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       setBugs(data);
  //     });
  // }

  // const createBug = () => {
  //   let title = prompt('Enter bug title');
  //   let status = 'submitted';
  //   let description = prompt('Enter the bug description');

  //   fetch('http://localhost:8080/bugs', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({title, status, description}),
  //   })
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       alert(data);
  //       getBug();
  //     });
  // }

  // const deleteBug = () => {
  //   let id = prompt('Enter bug id');
  //   fetch(`http://localhost:8080/bugs/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       alert(data);
  //       getBug();
  //     });
  // }

  return (
    <div>
      {/* NavBar /> */}
      {bugs.map( (bug) => {
        console.log(bug)
        return (<BugCard {...bug}/>)
      })}
      {/* {bugs ? bugs : 'There is no bug data available'}
      <br />
      <button onClick={createBug}>Add bug</button>
      <br />
      <button onClick={deleteBug}>Delete bug</button> */}
    </div>
  );
}

export default App;