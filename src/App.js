import React, { useState } from 'react';
import './App.css';

const STUDENT_ID = '101563789';
const STUDENT_NAME = 'Amran Hawaga';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [major, setMajor] = useState('');
  const [students, setStudents] = useState([]);

  const addStudent = (e) => {
    e.preventDefault();
    if (!name.trim() || !age.trim() || !major.trim()) return;
    setStudents([...students, { name, age, major }]);
    setName('');
    setAge('');
    setMajor('');
  };

  return (
    <div className="App">
      <h1>Student Information System</h1>
      <p className="developer">
        Developed By: {STUDENT_ID} || {STUDENT_NAME} || DevOps
      </p>

      <form onSubmit={addStudent}>
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="major">Major:</label>
          <input id="major" value={major} onChange={(e) => setMajor(e.target.value)} />
        </div>
        <button type="submit" className="add-btn">Add Student</button>
      </form>

      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet</p>
      ) : (
        <ul className="student-list">
          {students.map((s, i) => (
            <li key={i}>
              {s.name} — Age: {s.age} — Major: {s.major}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
