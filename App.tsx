import React, { useState, useEffect, StrictMode, useRef } from 'react';
import './style.css';

class Car extends React.Component {
  update = (p) => {
    // this.setState((state) => ({ cont: state.cont + 1 }));
    this.state.cont++;
    document.title = `You clicked ${this.state.cont} times`;
  };

  constructor(props) {
    super(props);

    this.state = {
      color: 'red',
      cont: 0,
      p: JSON.stringify(this.props) ? JSON.stringify(this.props) : 'Empty',
      pr: JSON.stringify(props),
    };
    console.log('constructor');
    // this.update();
  }

  componentDidMount() {
    // this.update();
    console.log('mount');
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    this.update();
    console.log('Component will be updated soon');
  }
  componentDidUpdate() {
    // this.update();
    console.log('updtae', this.state.cont);
  }

  render() {
    return (
      <h2>
        I{this.state.cont} am a {this.state.p} Car! {JSON.stringify(this.props)}
        ss {this.state.pr}
      </h2>
    );
  }
}

export default function App() {
  const [textSwitch, setTextSwitch] = useState(true);
  const [todos, settodo] = useState([
    { id: 1, text: 'Wash dishes', done: false },
    { id: 2, text: 'Do laundry', done: false },
    { id: 3, text: 'Take shower', done: false },
  ]);

  function set(n) {
    // todos.push(n);
    settodo([...todos, n]);
  }
  return (
    <div>
      <button
        onClick={() => setTextSwitch(!textSwitch)}
        type="button=
"
      >
        Toggle Name
      </button>
      <ul>
        <li>23323</li>
        {todos.map((elem) => (
          <li>{elem.text}</li>
        ))}
      </ul>

      <StrictMode>
        <Car m={textSwitch} />
      </StrictMode>
      <AddTodo set={set} />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

function AddTodo(props) {
  var id = 4;
  var inter = useRef();
  useEffect(() => {
    // inter.current = document.getElementById('input');
    console.log('here', document.getElementById('input'));
  }, []);

  function handleAddTodo(event) {
    event.preventDefault();
    console.log(event.target.elements.input.value);
    var val = inter.current.value;
    const todo = {
      id: id,
      text: val,
      done: false,
    };
    console.log(todo);
    props.set(todo);
    id++;
    inter.current.value = '';
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input id="input" name="input" placeholder="Add todo" ref={inter} />
      <button type="submit">Submit</button>
    </form>
  );
}
