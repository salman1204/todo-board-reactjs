import { Spin } from "antd";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Board, Login, SignUp } from "./utils/lazyLoadingComponent";

function App() {
  return (
    <>
      <Suspense fallback={<Spin />}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route
            path='/board'
            element={
              <ProtectedRoutes>
                <Board />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
