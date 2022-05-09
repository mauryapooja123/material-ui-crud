import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./component/User/User";

import DataTable from "./component/User/DataTable";
import EditData from "./component/Form/EditData";
//import LoginForm from "./component/Form/LoginForm";

import Pagination from "./component/Pagination/Pagination";
import PaginationPage from "./component/Pagination/PaginationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<User />} />
        {/* <Route path="/" element={<LoginForm />} /> */}
        <Route path="/table" element={<DataTable />} />
        <Route path="/Edit/:id" element={<EditData />} />
        <Route path="/" element={<Pagination />} />
        <Route path="/page" element={<PaginationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
