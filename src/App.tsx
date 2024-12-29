import './App.css'
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./shared/themes/Theme.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./shared/store/store.ts";
import PrivateRouter from "./shared/components/PrivateRouter/PrivateRouter.tsx";
import AdminPage from "./pages/Admin/view/AdminPage.tsx";
import Login from "./pages/Login/view/Login.tsx";
import HomePage from "./pages/Home/view/HomePage.tsx";
import UnauthorizedPage from "./pages/UnauthorizedPage/view/UnauthorizedPage.tsx";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={defaultTheme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/unauthorized" element={<UnauthorizedPage/>}/>

                        <Route element={<PrivateRouter requiredRole="admin"/>}>
                            <Route path="/admin" element={<AdminPage/>}/>
                        </Route>

                        <Route element={<PrivateRouter/>}>
                        <Route path="/" element={<HomePage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
