import React from 'react'
import{
    BrowserRouter,
    Route,
    Link,
  } from 'react-router-dom'

  function Topic({match}){
      return<h3>{match.params.topicId}</h3>
  }
export default function Topics(){
    return <div>
        <h2>Topics</h2>
            <ul>
            <li>
                <Link to='/topics/rendering'>Rendering with React</Link>
            </li>
            <li>
                <Link to='/topics/Components'>Components</Link>
            </li>
            <li>
                <Link to='/topics/props'>Props v/s State</Link>
            </li>
            </ul>

            <hr/>

            <Route path='/topics/:topicId' component={Topic}/>
            

            </div>
}