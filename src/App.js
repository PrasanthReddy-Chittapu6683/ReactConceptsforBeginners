import React from 'react';
import './App.css';
import Greet from './components/GreetProps';
import GreetState from './components/GreetState'

import FunctionCompClickEvent from './components/FunctionCompClickEvent'
import ClassCompClickEvent from './components/ClassCompClickEvent'
import EventBind from './components/EventBind'
import ParentComponet from './components/ParentComponet'
import UserGreeting from './components/UserGreeting'
import NameListRender from './components/NameListRender'
import NameListObjectRender from './components/NameListObjectRender'
import Stylesheet from './components/Stylesheet'
import InlineStylesheet from './components/InlineStylesheet'
import FromHandling from './components/FromHandling'
import moduleStyles from './appStyle.module.css'

import LifeCycleA from './components/lifecyclehooks/LifeCycleA'
function App() {
  return (
    <div className="App">
      <header className="App-header">


        <h1> Using Props:::</h1>
        <Greet name="Prasnth" heroName="BatMan">
          <button value="">Fly</button>
        </Greet>
        <Greet name="Reddy" heroName="IronMan" >
          <button value=''>Fire</button>
        </Greet>
        <Greet name="cv" heroName="Thor" >
          <button value="">Thorw</button>
        </Greet>
        <hr></hr>
        <h1>Using States:::</h1>
        <GreetState name="Tanu" heroName="Wonder Women"></GreetState>
        <hr></hr>
        <h1>Function Comp: Event Handling:::</h1>
        <FunctionCompClickEvent></FunctionCompClickEvent>
        <h1>Class Comp: Event Handling:::</h1>
        <ClassCompClickEvent></ClassCompClickEvent>
        <hr></hr>
        <h1>Class Comp: Event Binding:::</h1>
        <EventBind></EventBind>

        <hr></hr>
        <ParentComponet></ParentComponet>
        <hr></hr>
        <h1>Conditional Rending</h1>
        <div>
          <ul>
            <li> if/else </li>
            <li> Element Variables </li>
            <li> Ternary Conditional Operators </li>
            <li> Short circuit operator </li>
          </ul>
        </div>
        <UserGreeting></UserGreeting>
        <hr></hr>
        <h1>Array List Rending</h1>
        <NameListRender></NameListRender>
        <h1>Array List Object Rending</h1>
        <NameListObjectRender></NameListObjectRender>
        <hr></hr>
        <h1>Stylings & CSS basics</h1>
        <Stylesheet></Stylesheet>
        <InlineStylesheet></InlineStylesheet>
        <span className={moduleStyles.success}> css Module approach commnly using the css class name in appStyle.module.css file</span>
        <h1> Controlled Components</h1>
        <FromHandling></FromHandling>
        <h1> Life Cycle Hooks</h1>
        <LifeCycleA></LifeCycleA>
      </header>
    </div>
  );
}

export default App;
