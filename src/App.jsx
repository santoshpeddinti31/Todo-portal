import Header from "./components/header";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Styles from './App.module.css'
import Tasks from "./components/tasks";
function App() {
  return (
    <div>
      <Header/>
      <div className={Styles.cont} >
      <Sidebar/>
      <Navbar/>
      <Tasks />
      </div>
    </div>
  );
}

export default App;
