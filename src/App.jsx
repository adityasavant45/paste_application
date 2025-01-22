import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Paste from "./components/Paste"
import View from "./components/ViewPaste"



const router=createBrowserRouter([
  {
    path:"/",
    element:
      <div className="place-content-evenly">
        <Navbar/>
        <Home/>
      </div>
  },
  {
    path:"/pastes",
    element:
    <div>
      <Navbar/>
      <Paste/>
    </div>
  },
  {
    path:"/pastes/:id",
    element:
      <div>
        <Navbar/>
        <View/>
      </div>
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App