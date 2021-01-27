import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
        <NavBar />              {/* Presentation Component */}
        <ApplicationViews />    {/* Controller Component */}
    </>
);