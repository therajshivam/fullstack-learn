import Chai from "./Chai";

function App() {
  const username = "chai aur code";

  return (
    <>
      <h1>Chai aur react vite {username}</h1>
      <Chai />
    </>
  );
}

export default App;


// {username} -> expression/ evaluated expression (use to pass variable)
// here we dont write js, we write the final output of js.
// why cant we write js in this evalutated expression. because when react make dom tree object, variable is injected at the last, there is rule of object, we cant write js operation there, hence after evalution value is injected.