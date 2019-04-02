import React from 'react';
import PropTypes from 'prop-types';
import styles from './cartoonNetworkSpinner.module.css';



class CartoonNetworkSpinner extends React.Component{
    componentDidMount(){
        this.setUrls();
        this.setState({
            interval: this.props.interval
        })
    }
    constructor(props){
        super(props);
        this.state = {
            currentImg: 0,
            interval: 0,
            urls:[]
        }
    }
    setUrls(){
        const tmpUrls = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0dWCWuhetFrbytds2d4OSbP18RHTiB8ckVQ97SRRNaO8jYxbrw',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ISPwhnusmzewF5BPdD_BVzftC_qQO5drJjcMlRyGpKWEIctnrQ']
        this.setState({
            urls: tmpUrls
        })
    }

    /*
    delayState: function() {
        setTimeout(() => {
            this.setState({
                currentImg: currentImg+1
            })
            document.getElementById("imgSpinner").src=this.props.urls[this.state.currentImg];
          })
        }, 2000);
    },
    spinner(){
        this.setState({
            currentImg: currentImg+1
        })
        document.getElementById("imgSpinner").src=this.props.urls[this.state.currentImg];
    }
    */
    render(){
        return(
            <div>
                <img src={this.state.urls[this.state.currentImg]} id="imgSpinner"></img>
            </div>
        )
    }
}

export default CartoonNetworkSpinner;