import React, {useState} from 'react';
import './App.css';
import MovieApp from "../MovieApp/MovieApp";
import JokesApp from "../JokesApp/JokesApp";

const App = () => {
    const [switches, setSwitches] = useState('task-1');
    const onChangeSwitchesHandler = e => setSwitches(e.target.value);


  return (
    <div className="App">
        <div className="switches">
            <label htmlFor="task-1">
                <input
                    type="radio"
                    name="task"
                    id="task-1"
                    value="task-1"
                    checked={switches === 'task-1'}
                    onChange={e => onChangeSwitchesHandler(e)}
                /> Задание 1
            </label>
            <label htmlFor="task-2">
                <input
                    type="radio"
                    name="task"
                    id="task-2"
                    value="task-2"
                    checked={switches === 'task-2'}
                    onChange={e => onChangeSwitchesHandler(e)}
                /> Задание 2
            </label>
        </div>
        {switches === 'task-2' ? <JokesApp /> : <MovieApp />}
    </div>
  );
}

export default App;
