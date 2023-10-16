import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Detail } from "./pages/detail";
import{Login} from "./pages/login";
import { Resset } from "./pages/resset";
import { Set_NewPassword } from "./pages/new_password";
import { Trailer } from "./pages/trailer-single";

import { Horror_Genre } from "./pages/horror_genre";
import { Romance_Genre } from "./pages/romance_genre";
import { Action_Genre } from "./pages/action_genre";
import { Adventure_Genre } from "./pages/adventure_genre";
import { Animation_Genre } from "./pages/animation_genre";
import { Comedy_Genre } from "./pages/comedy_genre";
import { Crime_Genre } from "./pages/crime_genre";
import { Documentary_Genre } from "./pages/documentary_genre";
import { Drama_Genre } from "./pages/drama_genre";
import { Family_Genre } from "./pages/family_genre";
import { Fantasy_Genre } from "./pages/fantasy_genre";
import { History_Genre } from "./pages/history_genre";
import { Music_Genre } from "./pages/music_genre";
import { Mystery_Genre } from "./pages/mystery_genre";
import { ScienceFiction_Genre } from "./pages/sciencefiction_genre";
import { Thriller_Genre } from "./pages/thriller_genre";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import{Registration} from "./pages/registration";
//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Detail />} path="/detail/:movieId" />
                        <Route element={<Trailer />} path="/trailer/:movieId" />
                        <Route element={<Horror_Genre />} path="/genre/horror" />
                        <Route element={<Romance_Genre />} path="/genre/romance" />
                        <Route element={<Action_Genre />} path="/genre/action" />
                        <Route element={<Adventure_Genre />} path="/genre/adventure" />
                        <Route element={<Animation_Genre />} path="/genre/animation" />
                        <Route element={<Comedy_Genre />} path="/genre/comedy" />
                        <Route element={<Crime_Genre />} path="/genre/crime" />
                        <Route element={<Documentary_Genre />} path="/genre/documentary" />
                        <Route element={<Drama_Genre />} path="/genre/drama" />
                        <Route element={<Family_Genre />} path="/genre/family" />
                        <Route element={<Fantasy_Genre />} path="/genre/fantasy" />
                        <Route element={<History_Genre />} path="/genre/history" />
                        <Route element={<Music_Genre />} path="/genre/music" />
                        <Route element={<Mystery_Genre />} path="/genre/mystery" />
                        <Route element={<ScienceFiction_Genre />} path="/genre/sciencefiction" />
                        <Route element={<Thriller_Genre />} path="/genre/thriller" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Registration />} path="/registration" />
                        <Route element={<Resset/>} path="/resset" />
                        <Route element={<Set_NewPassword/>} path="/set_newpassword" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
