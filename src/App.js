import React from 'react'
import Content from './components/MainContent'
import Header from './components/Header'
//Header and Content are alias name used for importing Header and Main Content stored in Components folder.
class MyApplication extends React.Component{
  render(){
    return(
      <div>
        <Header/> {/*It brings up the header for the application.*/}
        <Content/> {/*Rendering API contents and applying logic is stored here.*/}
      </div>
    )
  }
}

export default MyApplication