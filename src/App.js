import React from "react"
// import { Counter } from "./features/counter/Counter"
import "./index.css"
import Home from "./pages/Home.jsx"
import LoginPage from "./pages/Login.jsx"
import SignupPage from "./pages/Signup.jsx"
import { createRoot } from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
