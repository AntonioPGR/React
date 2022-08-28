import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isloged: false,
      name: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    const validate = (string) => {
      return !string? false:true;
    };

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    console.log(validate(username), validate(password));

    if(validate(username) && validate(password)){
      this.setState({
        isloged: true,
        name: username,
      })
    }
  }

  render(){
    const login = (
      <form>
        <p>
          <label htmlFor="username">Nome de usuario: </label>
          <input 
            type="text" 
            name="username" 
            id="username" 
            placeholder="Seu nome aqui" 
            maxLength="20" 
          />
        </p>

        <p>
          <label htmlFor="password">Senha: </label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Sua senha aqui"
          />
        </p>

        <p>
          <input onClick={this.handleSubmit} type="button" value="Login" />
        </p>
      </form>
    );

    const index = (
      <div>
        <h1>Hello {this.state.name}!</h1>
        <p>Welcome to our page!</p>
      </div>
    );

    let render = this.state.isloged? index:login;

    return(
      <div>
        {render}
      </div>
    );
  }
}

ReactDOM.render(
  <Login />,
  document.querySelector('#root')
)