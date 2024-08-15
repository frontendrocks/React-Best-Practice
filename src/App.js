import { useState } from 'react';
import './App.css';

function App() {
 
  const initialData = {
    name: '',
    age: ''
  }
  const [formData, setFormData] = useState(initialData);
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted!', formData);
    setFormData(initialData);
  }

  const { name, age } = formData;

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div>
          <label>Name </label>
          <input type='text' name='name' value={name}  onChange={handleChange} />
        </div><br />
        <div>
          <label>Age</label>
          <input type='text' name='age' value={age} onChange={handleChange} />
        </div><br />
        <div>
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
    
  );
}

export default App;
