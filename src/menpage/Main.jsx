import React from "react";
import"./Main.scss";

function Main({children}){//Fonction Main prend les enfants en paramètres
    return <div className="Main">{children}</div>;
}

export default Main;