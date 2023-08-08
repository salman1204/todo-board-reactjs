import { Spin } from "antd";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, SignUp } from "./utils/lazyLoadingComponent";

function App() {
  return (
    <>
      <Suspense fallback={<Spin />}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
