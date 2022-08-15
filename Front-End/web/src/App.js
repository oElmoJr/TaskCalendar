import Layout from "./components/Layout";
import GlobvalStyles from "./styles/GlobvalStyles";
import { TaskContextProvider } from "./contexts/TaskContexts";


function App() {
  return (
    <>
      <TaskContextProvider>
      <Layout/>
      </TaskContextProvider>
      <GlobvalStyles/> 
    </>
  );
}

export default App;
