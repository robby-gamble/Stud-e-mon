

class SignInGoogleBase extends Component {
    constructor(props) {
      super(props);
  
      this.state = { error: null };
    }
  
    onSubmit = event => {
      this.props.firebase
        .doSignInWithGoogle()
        .then(socialAuthUser => {
          // Create a user in your Firebase Realtime Database too
          this.props.firebase
            .user(socialAuthUser.user.uid)
            .set({
              username: socialAuthUser.user.displayName,
              email: socialAuthUser.user.email,
              roles: [],
            })
            .then(() => {
              this.setState({ error: null });
              this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
              this.setState({ error });
            });
        })
        .catch(error => {
          this.setState({ error });
        });
  
      event.preventDefault();
    };

    render() {
        const { error } = this.state;
    
        return (
          <form onSubmit={this.onSubmit}>
            <button type="submit">Sign In with Google</button>
    
            {error && <p>{error.message}</p>}
          </form>
        );
      }
    }