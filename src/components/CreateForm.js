import React from 'react';

// controlled component
// class CreateForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       body: '',
//     }
//   }

//   onChangeTitle = (event) => {
//     this.setState({
//       title: event.target.value,
//     });
//   }

//   onChangeBody = (event) => {
//     this.setState({
//       body: event.target.value,
//     });
//   }

//   save = (event) => {
//     event.preventDefault();
//     console.log(this.state);
//   }

//   render() {
//     return (
//       <form>
//         <label htmlFor='title'>Title</label>
//         <input
//           id='title'
//           type='text'
//           onChange={this.onChangeTitle} />
//         <br />
        
//         <label htmlFor='body'>Body</label>
//         <textarea id='body' onChange={this.onChangeBody}></textarea>

//         <button onClick={this.save}>Save</button>
//       </form>
//     );
//   }
// }

// uncontrolled form
class CreateForm extends React.Component {

  save = (event) => {
    event.preventDefault();
    console.log(this.title.value);
    console.log(this.body.value);
  }

  render() {
    return (
      <form>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          type='text'
          ref={(title) => this.title = title}
          defaultValue='' />
        <br />
        
        <label htmlFor='body'>Body</label>
        <textarea id='body' defaultValue='' ref={(body) => this.body = body}></textarea>

        <button onClick={this.save}>Save</button>
      </form>
    );
  }
}

export default CreateForm;