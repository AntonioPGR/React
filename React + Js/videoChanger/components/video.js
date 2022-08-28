import React from 'react';

export default class Video extends React.Component{
    loadVideo(){
        const videoNumber = this.props.videoNumber === null? 1: this.props.videoNumber;
        let videoUrl;
        console.log(videoNumber);

        switch(videoNumber){
            case 1:
                videoUrl = "./video/Cheeta.mov"
                break;
            case 2:
                videoUrl = "./video/caramujo.mov"
                break;
            case 3:
                videoUrl = "./video/cuteCat.mov"
                break;
            default:
                videoUrl = "./video/Cheeta.mov"
                break;
        }

        return videoUrl;
    }

    render(){
        const url = this.loadVideo();
        console.log(url);

        return(
            <section>
                <div>
                    <video width="500px" controls>
                        <source src={url} />
                    </video>
                </div>
            </section>
        )
    }
}