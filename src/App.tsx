import { Spin } from "antd";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Board, Login, SignUp } from "./utils/lazyLoadingComponent";

function App() {
  const isLoggedIn: string | undefined =
    localStorage.getItem("todo_access_token") || undefined;

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
          <Route
            path='/'
            element={isLoggedIn ? <Navigate replace to='/board' /> : <Login />}
          />
          <Route
            path='/signup'
            element={isLoggedIn ? <Navigate replace to='/board' /> : <SignUp />}
          />
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
