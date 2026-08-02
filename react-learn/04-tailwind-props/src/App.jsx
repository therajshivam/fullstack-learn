import "./App.css";
import Card from "./components/card";

function App() {
  // let myObj = {
  //   username: "hitesh",
  //   age: 21
  // }
  // let newArr = [1, 2, 3]


  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl text-2xl">
        Tailwind test
      </h1>
      {/* <Card myObj someObj={newArr}/> */}
      <Card username="chaiaurcode" btnText="click me"/>
      <Card username="hitesh" btnText="visit me" />
    </>
  );
}

export default App;
