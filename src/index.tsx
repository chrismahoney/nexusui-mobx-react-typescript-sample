import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';

import Example1 from './Example1';

class Main extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Example1 />
                <DevTools />
            </div>
        );
     }
};


ReactDOM.render(<Main />, document.getElementById('root'));
