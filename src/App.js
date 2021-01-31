import Map from './component/Map.js'
import Images from './component/Images'
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow
} from "@react-google-maps/api"

import React,{Component} from 'react'

const libraries =["places"]
export default function App() {
	const {isLoaded , loadError} = useLoadScript ({
		googleMapsApiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries
	});

if (loadError) return "Error Loading Maps";
if (!isLoaded) return <div className="loader"></div>;

return (
<Router>	
<Route exact path="/">
<Map/>
</Route>
<Route path="/images" component={Images} />
</Router>

	)
}