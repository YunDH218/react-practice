import './App.css';
import {Route, Routes} from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import TodoListPage from "./pages/TodoListPage";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <RecoilRoot>
        <Routes>
            <Route path="/" element={<TodoListPage />} />
            <Route path="/weather" element={<WeatherPage />} />
        </Routes>
    </RecoilRoot>
  );
}

export default App;
