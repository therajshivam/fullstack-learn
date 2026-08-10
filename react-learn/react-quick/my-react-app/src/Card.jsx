import profilepicture from './assets/profilepicture.svg'
function Card() {
    return(
        <div className="card">
            {/* <img alt="profile picture" src="https://placehold.co/200"></img> */}
            <img className="card-image" alt="profile picture" src={profilepicture}></img>
            <h2 className='card-title'>Bro Code</h2>
            <p>I make youtube videos and play video games.</p>
        </div>
    )
}

export default Card