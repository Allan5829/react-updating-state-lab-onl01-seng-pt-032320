import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        };
    }

    changeBitrate = () => {
        this.setState(previousState => {
          return {
            count: previousState.count + 1
          }
        })
    }

    changeResolution = () => {
        this.setState(previousState => {
          return {
            count: previousState.count + 1
          }
        })
    }
   
    render() {
        return (
        <button
            onClick={this.handleClick}
        />
        )
    }
}