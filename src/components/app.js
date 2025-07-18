import { h, Component } from 'preact';
import Profile from './profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](https://github.com/preactjs/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				{/* <Home /> */}
				<Profile />
			</div>
		);
	}
}
