// @flow
import * as React from 'react';

// props: currentPage, handlerAdd,handlerSubtract, disabledPrev,disableNext, jumpToFirst, jumptoLast
export function Pagination(props) {
    let currentPage=props.currentPage;
    let handlerAdd=props.handlerAdd;
    let handlerSubtract=props.handlerSubtract;
    let disabledPrev=props.disabledPrev;
    let disabledNext=props.disabledNext;
    let jumpToFirst=props.jumpToFirst;
    let jumpToLast=props.jumpToLast;
    return (
        <div>
            <div style={{display: "flex", justifyContent: 'center', marginTop: '1rem'}}>
                <button disabled={disabledPrev} onClick={jumpToFirst}>
                    {"<<"}
                </button>
                <button disabled={disabledPrev} onClick={handlerSubtract}>
                    {"<"}
                </button>
                <button style={{marginLeft: "1rem", marginRight: "1rem"}}>
                    {currentPage+1}
                </button>
                <button disabled={disabledNext} onClick={handlerAdd}>
                    {">"}
                </button>
                <button disabled={disabledNext} onClick={jumpToLast}>
                    {">>"}
                </button>
            </div>
        </div>
    );
};