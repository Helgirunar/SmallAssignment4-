import React from 'react';
import { Carousel } from './components/Carousel';

class App extends React.Component {
	render() {
		return (
            <div>
						<Carousel size="large" image={[
							"https://yt3.ggpht.com/a-/AAuE7mC75lyDOGkH_0L4_ZR6F4bfGviFjsMZIGa22w=s900-mo-c-c0xffffffff-rj-k-no",
						"https://www.childrensmuseum.org/sites/default/files/ExhibitsIconsPlaces_Carousel_Large_003.jpg"
					]}/>
						</div>
        );
	}
}

export default App;
