import React from 'react'
import Content from './components/MainContent'
import Header from './components/Header'
class MyApplication extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}

export default MyApplication