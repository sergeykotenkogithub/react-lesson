import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";
import Login from "./components/Login";
import Chat from "./components/Chat";

export const publicRoutes = [
    {
        id: 1,
        path: LOGIN_ROUTE,
        Comment: Login,

    }
];

export const privateRoutes = [
    {
        id: 2,
        path: CHAT_ROUTE,
        Comment: Chat
    }
];