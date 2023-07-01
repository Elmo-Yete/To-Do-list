import ToDo from "./components/ToDo";
import { ToDoData } from "./data/List";

function App() {
  return (
    <>
      <section className="flex flex-col bg-black  h-screen justify-center">
        <h1 className="text-center font-bold text-gray-50">
          Mis cosas por hacer
        </h1>
        <div className="flex justify-center pt-5">
          <input
            type="text"
            className="bg-black border border-solid w-[22rem] "></input>
          <button className="bg-white w-9 ms-2">+</button>
        </div>
        <div className="flex w-[100%] justify-center">
          <ul className="flex justify-evenly flex-col text-white w-[20%] ">
            {ToDoData.map((text, index) => {
              return <ToDo key={`Key:${index}`} text={text.text} />;
            })}
          </ul>
        </div>
        <div className="flex justify-center">
          <button className="flex bg-violet-500 w-[25rem]  justify-center rounded-sm text-white">
            🕸 BORRAR TODO 🕸
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
