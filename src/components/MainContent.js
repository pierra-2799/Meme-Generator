import React from 'react'
import '../App.css'
/**
 * The content class does the following -->
 *      1. Call the API and get the components.
 *      2. Update the state of components {text and image}
 *      3. Design of the Body of application.
 */
class Content extends React.Component{
    /**
     * Constructor stores the state of :
     *  1.Text that appears at top.
     *  2.Text that appears at bottom.
     *  3.Image that will be rendered next.
     */
    constructor(){
        super();
        this.state = {
            TopText : "",
            BottomText : "",
            RandomImage : "http://i.imgflip.com/1bij.jpg",
            MemeImages : []
        }
        {/*Meme Images is array of images from which the random image will be selected.*/}
        this.handleChange = this.handleChange.bind(this)
        console.log(this.state.RandomImage);
    }
    /** ComponentDidMount will call the API at the begining and store the data into MemeImages array.*/
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
    /**Handle Change handles the state of top and bottom text.*/
    handleChange =(event) => {
        const {name,value} = event.target
        this.setState({
            [name] : value
        })
    }
    /**Handle Submit changes the meme by selecting random image from MemeImages[] */
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
                    {/**Input Text and button*/}
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
                    {/**Displays text and image*/}
                    <h2><span className="toptext">{this.state.TopText}</span></h2>
                    <img src={this.state.RandomImage} alt="meme"/>
                    <h2><span className="bottomtext">{this.state.BottomText}</span></h2>  
                </div>
            </div>
        )
    }
}

export default Content