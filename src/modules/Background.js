import React from 'react';
import { init } from '../background/sky'
import '../css/Background.css'
import {isMobile} from 'react-device-detect';
let canvasID = 'glCanvas'

export default class Background extends React.Component {

    componentDidMount() {
        if(!isMobile){
            init(canvasID)
        }
    }

    render() {
        if(isMobile){
            return <div></div>
        }
        return (
            <div className='background_wrapper'>
                <canvas id={canvasID}></canvas>
            </div>
        )
    }
}
