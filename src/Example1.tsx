import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import NexusUICanvas from './NexusUICanvas';
/**
 * Simple example without Mobx.
 */
class Example1 extends React.Component<{}, {}> {
    render() {
        return (
            <NexusUICanvas type='dial'
                canvasAttrs={{
                    height: 200,
                    width: 200,
                    min: 40,
                    max: 300,
                    label: 'freq'
                }}
                initWidget={(widget)=>{
                    widget.set({value: 250});
                }}
                />
        );
    }
};

export default Example1;