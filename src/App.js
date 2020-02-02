import React from "react";
import Tattoolist from "./tattoolist";
import Greeting from "./components/Header";
import Navbar from "./components/navbar";
import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => (
<section> 
    <Navbar />
 <Greeting />
<Tattoolist />
</section>
);

export default App;