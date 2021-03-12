import React from 'react'
import '../App.css'
class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            TopText : "",
            BottomText : "",
            RandomImage : "http://i.imgflip.com/1bij.jpg",
            MemeImages : []
        }
        this.handleChange = this.handleChange.bind(this)
        console.log(this.state.RandomImage);
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const{memes} = response.data
            this.setState({
                MemeImages : memes
            })
        })
    }
    handleChange =(event) => {
        const {name,value} = event.target
        this.setState({
            [name] : value
        })
    }
    handleSubmit =(event) => {
        event.preventDefault();
        const num = Math.floor(Math.random() * this.state.MemeImages.length)
        const image = this.state.MemeImages[num].url
        this.setState({
            RandomImage : image
        })
        console.log(this.state.RandomImage);
    }
    render(){
        return(
            <div className="meme-body">
                <div className="input-body column">
                    <input
                        type="text"
                        name="TopText"
                        placeholder="Enter text here"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="BottomText"
                        placeholder="Enter text here"
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit}>Generate</button>
                </div>
                <br/>
                <div className="meme-img column">
                    <h2><span className="toptext">{this.state.TopText}</span></h2>
                    <img src={this.state.RandomImage} alt="meme"/>
                    <h2><span className="bottomtext">{this.state.BottomText}</span></h2>
                    
                </div>
            </div>
        )
    }
}

export default Content