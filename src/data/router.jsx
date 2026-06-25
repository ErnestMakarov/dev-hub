import { createBrowserRouter as Router } from "react-router-dom";
import App from "../app/App.jsx";
import Home from "../pages/Dashboard/Dashboard.jsx";
import Library from "../pages/Library/Library.jsx";
import Notes from "../pages/Notes/Notes.jsx";
import Tasks from "../pages/Tasks/Tasks.jsx";
import Profile from "../pages/Profile/Profile.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        { index: true, element: <Home /> },
        { path: "library", element: <Library /> },
        { path: "notes", element: <Notes /> },
        { path: "tasks", element: <Tasks /> },
        { path: "profile", element: <Profile /> }
    ]
  }
]);