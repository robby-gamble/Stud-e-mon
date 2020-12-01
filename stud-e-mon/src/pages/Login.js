import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signin, signInWithGoogle} from '../components/auth';
import Logo from '../assets/studemonlogo.png';



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.googleSignIn = this.googleSignIn.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event){
        event.preventDefault();
        this.setState({ error: ""});
        try {
            await signin(this.state.email, this.state.password);
        } catch (error){
            this.setState({error:error.message});
        }
    }

    async googleSignIn(){
        try {
            await signInWithGoogle();
        } catch (error) {
            this.setState({error: error.message});
        }       
    }

    render(){
        return(
            <div>
                <form 
                autoComplete="off"
                onSubmit={this.handleSubmit}
                >   <img src={Logo} alt="Logo"></img>
                    <h1>
                        Login to
                        <Link to="/">
                            Stud-e-mon
                        </Link>
                    </h1>
                    <p>
                        Fill in the form below to login to your account.
                    </p>
                    <div>
                        <input
                            placeholder="Email"
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            type="password"
                        />
                    </div>
                    <div>
                        {this.state.error ? (
                            <p>{this.state.error}</p>
                        ) : null}
                        <button className="btn btn-primary px-5" type="submit">Login</button>
                        <p></p>
                        <button className="btn btn-danger mr-2" type="button" onClick = {this.googleSignIn}>
                        Sign In with Google
                    </button>
                    </div>
                    <hr />
                    <p>
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                
                </form>
            </div>              
        );
    }
}