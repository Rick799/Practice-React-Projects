import React from 'react'
import './App.css'
import IntervalClassCounter from './components/IntervalClassCounter'
import IntervalHookCounter from './components/IntervalHookCounter'

function App() {
  return (
    <div className="App-header">
      <IntervalClassCounter />
      <IntervalHookCounter/>
    </div>
  )
}

export default App