import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";
import { createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import { RouterProvider } from "react-router-dom";
import Watchpage from "./components/Watchpage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
       
    ],
  },
]);

function App() {
  
  return (
     <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter}>
            <Body/>
        </RouterProvider>
      </div>
      </Provider>
  );
}

export default App;
