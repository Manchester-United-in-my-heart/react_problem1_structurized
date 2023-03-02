// @flow
import * as React from 'react';
import {dataStorage} from "../Model/Storage";
import {useEffect, useState} from "react";
import {View} from "../View/View";
import {Pagination} from "../View/Pagination";


export function Control() {
    // get Data
    let getData=dataStorage;
    // Hooks
    let [currentPage,setCurrentPage]=useState(0)
    let [disabledPrev,setDisablePrev] = useState(currentPage===0)
    let [disabledNext,setDisableNext] = useState(currentPage===getData.length-1)
    // handler
    let handlerAdd=()=>
    {
        setCurrentPage(currentPage+1);
    }
    let handlerSubtract=()=>
    {
        setCurrentPage(currentPage-1)
    }
    let jumpToFirst=()=>
    {
        setCurrentPage(0)
        console.log("JTF")
    }
    let jumpToLast=()=>
    {
        setCurrentPage(dataStorage.length-1)
        console.log("JTL")
    }
    // useEffect Hook
    useEffect(()=>
    {
        setDisablePrev(currentPage===0)
        setDisableNext(currentPage===dataStorage.length-1)
    },[currentPage])
    return (
        <div>
            <View id={getData[currentPage].id} list={getData[currentPage].list}></View>
            <Pagination
                currentPage={currentPage}
                disabledNext={disabledNext}
                disabledPrev={disabledPrev}
                handlerAdd={handlerAdd}
                handlerSubtract={handlerSubtract}
                jumpToFirst={jumpToFirst}
                jumpToLast={jumpToLast}
            ></Pagination>
        </div>
    );
};