// conditional rendering : allows u to control whats get rendered in the application based on certain conditions (show, hide or change components)

function UserGreeting (props) {

    // if (props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // } 
    // return <h2>Please log in to continue</h2>

    return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please log in to continue</h2>)
    
}

export default UserGreeting;