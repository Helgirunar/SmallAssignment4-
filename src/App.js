import React from 'react';
import { Carousel } from './components/Carousel';
import { Modal} from './components/Modal';
import Row from './components/Row/Row';
import Col from './components/Col/Col';
import DatePicker from './components/DatePicker/DatePicker'
import CartoonNetworkSpinner from './components/CartoonNetworkSpinner/CartoonNetworkSpinner'
class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isOpen: false,
			date: ''
		}
	}
	render() {
		return (
            <div>
				{console.log(this)}
				<Carousel size="large" image={[
							"https://yt3.ggpht.com/a-/AAuE7mC75lyDOGkH_0L4_ZR6F4bfGviFjsMZIGa22w=s900-mo-c-c0xffffffff-rj-k-no",
						"https://www.childrensmuseum.org/sites/default/files/ExhibitsIconsPlaces_Carousel_Large_003.jpg"
					]}/>
				<Modal
					isOpen={this.state.isOpen}
					onClose={() => this.setState({isOpen: false})}>
					<Modal.Title>My Modal title</Modal.Title>
					<Modal.Body>My Modal Body</Modal.Body>
					<Modal.Footer>My Modal Footer</Modal.Footer>
				</Modal>
				<Row>
					<Col size={4}>asdasd</Col>
					<Col size={4}>asdasda</Col>
					<Col size={4}>asdasdasd</Col>
				</Row>
				<Row>
					<Col size={6}>asdasd</Col>
					<Col size={6}>asdasda</Col>
				</Row>
				<DatePicker
					onDatePick={date => this.setState({date})}/>
				<CartoonNetworkSpinner
					interval={4}/>
			</div>
        );
	}
}

//onDatePick={date => this.setState({date})}
export default App;
