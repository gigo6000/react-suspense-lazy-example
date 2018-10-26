import React, {Component, Suspense, lazy} from 'react';
import './App.css';
const Cat = lazy(() => import('./Cat'));

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {showImage: false};
    }

    showImage = () => {
        this.setState({showImage: true});
    };

    hideImage = () => {
        this.setState({showImage: false});
    };

    render() {
        if (!this.state.showImage) {
            return (
                <div className="App">
                    <header className="App-header">
                        <button onClick={this.showImage}> Show </button>
                    </header>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <header className="App-header">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Cat />
                        </Suspense>
                        <button onClick={this.hideImage}> Hide</button>
                    </header>
                </div>
            );
        }
    }
}

export default App;
