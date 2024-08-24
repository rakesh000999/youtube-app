import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import "./index.css";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      //childern go where there is <Outlet />
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        {/* <Body />  I was there before router */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

/**
 * Head
 * Body
 *  Sidebar
 *    MenuItems
 *  MainContainer
 *    ButtonList
 *  VideoContainer
 *    VideoCard
 */
