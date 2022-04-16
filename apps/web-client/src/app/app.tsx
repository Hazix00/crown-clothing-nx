import { Route, Routes } from 'react-router-dom';
import './app.module.scss';


import Header from './components/header/header.component';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import SignInAndUpPage from './pages/sign-in-and-up/signinanduppage.component';
import React from 'react';
import { onSnapshot } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

export interface AppUser {
  currentUser: string | null;
  displayName?: string;
  email?: string;
  createdAt?: Date
}

class App extends React.Component<unknown, AppUser> {

  constructor(props: unknown) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  unsubscribeFromAuth: Function | null = null;

  override componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth: User | null) => {
      // this.setState({ currentUser: user });
      if(userAuth) {

        const userRef = await createUserProfileDocument(userAuth)

        if(userRef) {

          onSnapshot(userRef, {
            next: (userSnap) => {
              console.log('onAuthStateChanged id', userSnap.id)
              console.log('onAuthStateChanged data', userSnap.data())
              this.setState({
                currentUser: userSnap.id,
                ...userSnap.data() as any
              })
            },
            error: (error) => {
              console.error('Canot login the user', error)
            }
          });
        }

      }
      else {
        this.setState({currentUser: null})
      }
    })
  }

  override componentWillUnmount() {
    if(this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }
  }

  override render() {

    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/signin" element={<SignInAndUpPage/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
