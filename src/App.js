import React, {Profiler, useEffect, useState} from 'react';
import './App.css';
import {unstable_trace as trace, unstable_wrap as wrap} from "scheduler/tracing";
import {FixedSizeList as List} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import * as api from "./utils/api";

import "./style.css";

function App() {
    console.log('App')
    const [data, setData] = useState(undefined)

    const loadData = async () => {
        const colorData = await api.fetchData();
        setData(colorData)
    };

    const dataSize = (() => {
        if (data === undefined)
            return 0

        return Object.keys(data).length
    })();

    const Row = ({index, style}) => {
        const colorName = data !== undefined ? Object.keys(data)[index] : undefined;
        const colorStyle = data !== undefined ?
            (() => {
                if (index >= dataSize) {
                    return style;
                }

                const rgbVal = Object.values(data)[index]
                return ({backgroundColor: `rgba(${rgbVal[0]},${rgbVal[1]},${rgbVal[2]},${rgbVal[3]})`, ...style})
                //return (style)
            })() : style;


        return (
            <div
                className={index % 2 ? "ListItemOdd" : "ListItemEven"}
                style={colorStyle}
            >
                {colorName}
            </div>
        );
    }


    const Example = () => (
        <AutoSizer>
            {({height, width}) => (
                <List
                    className="List"
                    height={height}
                    itemCount={dataSize}
                    itemSize={35}
                    width={width}
                >
                    {Row}
                </List>
            )}
        </AutoSizer>
    );


    return (
        <div className="App-fullscreen">
            <button onClick={loadData}>show color</button>
            <Example/>
        </div>
    );
}

export default App;
