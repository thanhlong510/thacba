import React, { useEffect, useState } from "react";
import ListIcon from '@mui/icons-material/List';

const Nav = (props) => {
    function Toggle() {
        props.setToggleBar()
        console.log('thanh cong')
    }
    return <div className="Nav border-b-2 border- border-b-slate-300 bg-white">
        <p className="text-base p-4 font-bold tc h-16">
            <button onClick={Toggle} className="text-xl pr-4 pl-3"><ListIcon /></button>
            <span className="uppercase"> {props.title} </span>
        </p>
    </div>
}

export default Nav;