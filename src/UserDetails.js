import UserConsumer from "./App";
import React from "react";

const UserDetails = () => (
  <div>
    <UserConsumer>
      {({state,actions}) => {
        return (
          <React.Fragment>
          <div>
            <p>Userame: {state.username}</p>
            <p>First Name: {state.firstName}</p>
            <p>Last Name: {state.lastName}</p>
          </div>
          <div>
          <div>
            <input type="text" value={state.firstName} onChange={actions.handleFirstNameChange} />
          </div>
          <div>
            <input type="text" value={state.lastName} onChange={actions.handleLastNameChange} />
          </div>
        </div>
        </React.Fragment>
        )
      }}
    </UserConsumer>
  </div>
)

export default UserDetails;