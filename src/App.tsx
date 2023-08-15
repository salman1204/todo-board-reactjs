import { Spin } from "antd";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutesOnLoggedIn from "./ProtectedRoutesOnLoggedIn";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Board, Login, SignUp } from "./utils/lazyLoadingComponent";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className='flex min-h-screen items-center justify-center'>
            <Spin />
          </div>
        }
      >
        <Routes>
          <Route element={<ProtectedRoutesOnLoggedIn />}>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>
          <Route
            path='/board'
            element={
              <ProtectedRoutes>
                <Board />
              </ProtectedRoutes>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
