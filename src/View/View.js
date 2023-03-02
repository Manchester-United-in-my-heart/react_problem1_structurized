// @flow
import * as React from 'react';

// Props:{id,list,handler}
export function View(props) {
    let id=props.id;
    let list=props.list;
    return (
        <div>
            <div style={
                {marginTop: "2rem", border: "solid 2px", padding: "2rem"}}>

                {/*Header*/}

                <div style={
                    {fontSize: "2rem", display: "flex", justifyContent: "center"}}>
                    Address Page {id}
                </div>

                {/*Content*/}
                <div>
                    Delivered To:
                    <ul style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        {list.map(chunk=> <li>{chunk}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};