import React, { Component } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import List from './Component/List';
import Title from './Component/Title';
import LoginForm from './Component/LoginForm';
import FocusInput from './Component/FocusInput';
import UserList from './Component/UserList';
import Hoc from './Component/HOC';
import RenderPropsComponent from './Component/RenderPropsComponent';

// const UsersData = [
//   {
//       id: 1,
//       name: 'Krunal'

//   },
//   {
//       id: 2,
//       name: 'Ankit'
//   },
//   {
//       id: 3,
//       name: 'Rushabh'
//   },
//   {
//       id: 4,
//       name: 'Krinsi'
//   }
// ];

// const Users = Hoc(
//   UserList,
//   UsersData
// );

// class App extends Component {

//   render() {
//     return (
//       <div>
//         <Users></Users>
//       </div>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <RenderPropsComponent render={() => { 
        return (
        <h3>I am coming from render props</h3>
        )}
      }/>
    )
  }
}
// class App extends Component {
//   render() {
//     return (
//       <>
//         <UserList/>
//         {/* <FocusInput /> */}
//         {/* <List /> */}
//         {/* <LoginForm/> */}
//       </>
//     );
//   }

//   constructor(props) {
//     super(props)

//     this.state = {
//       isHome: false,
//       isAbout: false,
//     }

//     this.HandleClickHome = this.HandleClickHome.bind(this)
//     this.HandleClickAbout = this.HandleClickAbout.bind(this)
//   }

//   HandleClickHome = () => {
//     this.setState({ isHome: true });
//   }
//   HandleClickAbout = () => {
//     this.setState({ isAbout: true });
//   }

//   render() {
//     if (this.state.isHome) {
//       return <Home />
//     }
//     else if (this.state.isAbout) {
//       return <About />
//     }
//     else {
//       return (
//       <>
//         <button onClick={this.HandleClickHome}>Home</button>
//         <button onClick={this.HandleClickAbout}>About</button>
//       </>
//       );
//     }

//   }


//   render() {
//     return (
//       <>
//         {/* <Counter/> */}
//       </>
//     );
//   }
// }

export default App
