import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import MyPage from "./components/MyPage";
import SignupPage from "./components/SignupPage";
import DetailPage from "./components/DetailPage";
import CreatePage from "./components/CreatePage";
import Header from "./components/Header";
import './App.css';

function App() {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/login/signup" element={<SignupPage/>}/>
        <Route path="/detail" element={<DetailPage/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
    </>
  );
}

export default App;