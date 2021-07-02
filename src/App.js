import React,{useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
  const [value,onChange] = useState(new Date())

  return (
    <div className="app">
      <h1>React Calendar</h1>
      <h4>built with <code>react-calendar</code> by <a href='https://github.com/S-Swaroop'>@SharanSwaroop</a></h4>
      <Calendar 
        onChange={onChange}
        value={value}
        className='app__calendar'
      />
    </div>
  );
}

export default App;