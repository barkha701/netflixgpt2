import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/" ,
            element: <Login/>
        },

        {
            path : "/browse",
            element: <Browse/>
        }
    ])
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              dispatch(addUser(uid));
             // const {uid,email, displayname} = user;
            } else {
              dispatch(removeUser());
            }
          });

    }, []);

return (
<div>
    <RouterProvider router = {appRouter} />
</div> );

};

 

export default Body;