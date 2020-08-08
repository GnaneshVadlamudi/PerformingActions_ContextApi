import UserConsumer from "./App"
import UserDetails from "./UserDetails"

const UserProfile = (props) => (
  <UserConsumer>
    {({state}) => {
      return(
        <div>
          <h2>Profile Page of {state.username}</h2>
          <UserDetails />
        </div>
      )
    }}
  </UserConsumer>
)

export default UserProfile; 