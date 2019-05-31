import React from 'react';
import axios from 'axios';

// controlled component
class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }
  }

  onChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  onChangeBody = (event) => {
    this.setState({
      body: event.target.value,
    });
  }

  save = (event) => {
    event.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(response => {
        console.log('Saved!');
      })
      .catch(err => {
        alert('Error al guardar el post!');
      });
  }

  render() {
    return (
      <form>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          type='text'
          onChange={this.onChangeTitle} />
        <br />
        
        <label htmlFor='body'>Body</label>
        <textarea id='body' onChange={this.onChangeBody}></textarea>

        <button onClick={this.save}>Save</button>
      </form>
    );
  }
}


export default CreateForm;