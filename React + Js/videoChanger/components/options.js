import React from 'react';

export default class Options extends React.Component{
    constructor(props){
        super(props);
        this.radioSelected = this.radioSelected.bind(this);
    }

    radioSelected(event){
        const radioN = event.target.value;
        this.props.onChangeVideo(radioN);
    }

    render(){
        return(
           <form>
                <label htmlFor="fast">Fast</label>
                <input onChange={this.radioSelected} type="radio" id="fast" name="videoType" value="1" />

                <label htmlFor="low">Low</label>
                <input onChange={this.radioSelected} type="radio" id="low" name="videoType" value="2" />
            
                <label htmlFor="cute">Cute</label>
                <input onChange={this.radioSelected} type="radio" id="cute" name="videoType" value="3" />
           </form>
        )
    }
}