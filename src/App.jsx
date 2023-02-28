import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyRouter from "./MyRouter";
import BlogComponent from "./components/BlogComponent";
import SingleComponent from "./components/SingleComponent";
import EditComponent from "./components/EditComponent";
import LoginComponent from "./components/LoginComponent";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyRouter />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/create" element={<BlogComponent />} exact />
          <Route path="/blog/edit">
            <Route path=":slug" element={<EditComponent />} />
          </Route>
        </Route>
        <Route path="/blog/">
          <Route path=":slug" element={<SingleComponent />} />
        </Route>

        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<MyRouter />} />
    //     <Route
    //       path="/create"
    //       element={<AdminRouter element={<BlogComponent />} />}
    //     />
    //     <Route path="/blog/">
    //       <Route path=":slug" element={<SingleComponent />} />
    //     </Route>
    //     <Route path="/blog/edit">
    //       <Route
    //         path=":slug"
    //         element={<AdminRouter element={<EditComponent />} />}
    //       />
    //     </Route>
    //     <Route path="/login" element={<LoginComponent />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
