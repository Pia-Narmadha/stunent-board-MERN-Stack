import React, { Component } from 'react';
import '.././css/App.css';
import axios from 'axios';

import StudentBoard from './StudentBoard.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      studentList : [{rollnumber:"34",firstName:"Narmdha",lastName:"raj",rank:"1"}],
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:5002/student/info`)
      .then(res => {
        const studentList = res.data;
        this.setState({ studentList });
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <p> Student Rank Board </p>
        </header>
        <StudentBoard studentList={this.state.studentList} />
      </div>
    );
  }
}

export default App;
