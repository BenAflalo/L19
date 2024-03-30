import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import store from "./store/store.jsx";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <RouterProvider router={router} />
  </ReduxProvider>
);

//* ------------------------------IMPORTANT TERMS-----------------------------------------------

//* Store:
//? המקום שבו כל המצב של האפליקציה מאוחסן. משמש כ-"מקור האמת" היחיד.

//* Action:
//? אובייקט המתאר את השינוי שצריך להתרחש במצב

//* Reducer:
//? פונקציה טהורה שמקבלת את המצב הנוכחי ו-אקשן, ומחזירה את המצב החדש.
//? פונקציה זו יוצרת העתק של ה-סטור ומעדכנת אותו. אי אפשר לשנות את ה-סטייט ישירות ברידקס!

//* Dispatch:
//? פונקציה שמשמשת לשליחת אקשנס ל-סטור.

//* Selectors:
//? פונקציות שמשמשות לקבלת נתונים מה-store, לעיתים עם חישובים או עיבוד נוסף.

//* useDispatch
//? מאפשר לשלוח פעולות לאחסון של רדאקס. הוא כלי חיוני בפיתוח תוכנות עם רדאקס,
//? כיוון שהוא מספק את הדרך לערוך שינויים במצב התוכנה. בכל פעם שרוצים לשנות את המצב,
//? יוצרים פעולה ומעבירים אותה דרך הפונקציה. השינוי יכול להיות, לדוגמה, הוספת פריט חדש לרשימה, עדכון פרטי משתמש, או מחיקת נתונים.

//* useSelector
//? מאפשר לקרוא נתונים מתוך אחסון רדאקס. בעזרתו ניתן לבחור חלקים מסוימים מהמצב של התוכנה
//? לשימוש ברכיב נתון. הרכיב יתעדכן אוטומטית בהתאם לשינויים שמתבצעים בחלקים הנבחרים.

//* Store
//? counterState:number
//? loggedInUser: obj = {}

//* ------------------------------HW-----------------------------------------------
//TODO: Implement the userSlice to manage authentication state including login, logout, and user registration.
//      Refer to the Redux Toolkit documentation on how to create slices: https://redux-toolkit.js.org/tutorials/quick-start
//      The userSlice should handle states like loggedInUser and relevant actions.

//TODO: Connect the userSlice to the Redux store. This is crucial for managing the authentication state across the app.
//      You can combine this slice with your existing store using configureStore. More information can be found here:
//      https://redux-toolkit.js.org/api/configureStore

//TODO: Create LoginPage and RegisterPage components. These pages should handle user input for login and registration processes.
//      The LoginPage should dispatch a login action from the userSlice when a user logs in successfully.
//      The RegisterPage should handle user registration and can also dispatch a login action upon successful registration.

//TODO: Implement a ProfilePage component to display the logged-in user's details.
//      This page should fetch and show user details from the Redux store's state and only be accessible when a user is logged in.
//      Consider handling cases where the user details are not available or when the user is not logged in.
// ? why when I refresh the profile page it goes to the main page of the todos?

//TODO: Update the application's routing to include routes for the Login, Register, and Profile pages.
//      The routes for Login and Register should be accessible when the user is not logged in.
//      Conversely, the Profile route should only be available to logged-in users, redirecting to the Login page otherwise.
