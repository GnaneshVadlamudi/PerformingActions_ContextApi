import React from "react";
import "./styles.css";
import { createContext } from 'react'
import User from "./User.js";

const UserContext = createContext({})

/* using default values in context
1.To make use of this data in our application tree, 
we have to remove the provider from the tree. 
So our App component will look like this.
2.The data that will be used in the Consumer 
components will be done defined when we 
initialized a new Context.
const UserContext = React.createContext({
  username: 'johndoe',
  firstName: 'John',
  lastName: 'Doe'
})

class App extends React.Component {
  state = {
    user: {
      username: 'jioke',
      firstName: 'Kingsley',
      lastName: 'Silas'
    }
  }

  render() {
    return(
      <div>
        <User />
      </div>
    )
  }
}

 */
export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

class App extends React.Component {
  state = {
    user: {
      username: 'jioke',
      firstName: 'Kingsley',
      lastName: 'Silas'
    }
  }

  render() {
    return(
      <div>
        <UserProvider value={
          {
            state:this.state.user,
            actions: {
              handleFirstNameChange: event => {
                const value = event.target.value
                this.setState(prevState => ({
                  user: {
                    ...prevState.user,
                    firstName: value
                  }
                }))
              },

              handleLastNameChange: event => {
                const value = event.target.value
                this.setState(prevState => ({
                  user: {
                    ...prevState.user,
                    lastName: value
                  }
                }))
              }
            }
            }}>
          <User />
        </UserProvider>
      </div>
    )
  }
}

export default App;
