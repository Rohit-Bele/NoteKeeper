import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import AddNotes from "./pages/AddNotes";
import NotesDetails from "./pages/NoteDetails.jsx";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRouts from './components/common/ProtectedRouts.jsx'

const Router = createBrowserRouter([
    {
        path:'/login',
        element:<Login/>,
    },
    {
        path:'/',
         element: (
        <ProtectedRouts>
            <App />
        </ProtectedRouts>
        ),
        children:[
            {
                index:true,
                element:<Notes/>
            },
            {
                path:'add',
                element:<AddNotes/>
            },
            {
                path:'note/:id',
                element:<NotesDetails/>
            },
            {
                path:'profile',
                element:<Profile/>
            }
        ],
    },
    {
        path:'*',
        element:<NotFound/>
    },
])

export default Router