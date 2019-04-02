import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal.module.css';


class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }
    onClose(e){
        this.setState({isOpen: false});
    }
    onOpen(){
        document.getElementById('myModal').style.display = "block";
        this.setState({isOpen: true});
    }
    render(){
        return(
            <div>
                <button type="button" onClick={() => this.onOpen()}>Open</button>
                <div className={ styles.modal} id="myModal">
                    <div className={styles.modalContent}> 
                        <Modal.Title title={this.props.children[0].props.children}/>
                        <Modal.Body body={this.props.children[1].props.children}/>
                        <Modal.Footer footer={this.props.children[2].props.children}/>
                    </div>
                </div>
            </div>
        )
    }
}
var close = function(){
    document.getElementById('myModal').style.display = "none";
}
Modal.Title = ({title}) =>{
    console.log(title)
    return(
        <div className={ styles.title }>
            <span className={styles.close} onClick={() => close()}>x</span>
            <h2>{title}</h2>
        </div>
    )
}
Modal.Body = ({body}) =>{
    return(
        <div className={ styles.body }>{body}</div>
    )
}
Modal.Footer = ({footer}) =>{
    return(
        <div className={ styles.footer }>{footer}</div>
    )
}

Modal.prototypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired
}

export default Modal;