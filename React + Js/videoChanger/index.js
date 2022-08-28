import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Options from './components/options';
import Video from './components/video';

class VideoDisplay extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            videoNumber: 1,
        }

        this.changeVideo = this.changeVideo.bind(this)
    }

    changeVideo(videoN){
      this.setState({
          videoNumber: Number(videoN),
      })
    }

    render(){
        return(
            <div>
                <Header />
                <Options onChangeVideo={this.changeVideo} />
                <Video videoNumber={this.state.videoNumber} />
            </div>
        );
    }
}

ReactDOM.render(
    <VideoDisplay/>,
    document.querySelector("#root")
)