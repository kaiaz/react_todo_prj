import React, { Component } from 'react';
import ListContainer from './containers/ListContainer'
import './App.css';
import FieldContainer from './containers/FieldContainer';


function App ({store}) {

        return (
            <div className="App">
                <h1 className='mainTitle'>React Todo</h1>

                <main className="tasks">
                    <ListContainer store = {store}/>
                    <div className="panel">
                        <FieldContainer store={store}/>
                    </div>
                </main>

            </div>
        );



}

export default App;
