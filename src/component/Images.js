import react,{Component} from 'react'
import {Link} from 'react-router-dom'
import img from '../Assets/noPics.jpg'
import Photos from './Photos'
class Images extends Component {
state ={
	lat:localStorage.getItem('lat'),
	lon:localStorage.getItem('lon'),
	pictures:[],
  isPicturesAvailable:false,
  isLoading:true,
}

componentDidMount() {
	
   let url =`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&lat=${this.state.lat}&lon=${this.state.lon}&radius=1&nojsoncallback=1&format=json&sort=interestingness-desc`;
	 fetch(url)
	        .then(function(response){
      return response.json();
    })
    .then(function(j){
      let picArray = j.photos.photo.map((pic) => {
        
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
          srcPath
        )
      })
      this.setState({pictures: picArray});
      this.setState({isLoading:false});


      if (picArray.length>0)
        {
          this.setState({isPicturesAvailable:true})
    }
    }.bind(this))
}
render(){

let content =<div>
              <Link to={{pathname:'/'}}>
                  <button  className="btn ml-auto btn-danger fixed-top "> 
                  &#x2715;</button>
              </Link>
               
              <div>
              {this.state.isPicturesAvailable?
                <Photos photoArray={this.state.pictures}/>:
              <div>
              <h3>Can't find photos tagged to current co-ordinates</h3>  
              <div className="noImage">
               <img  className="img-fluid img-responsive" src={img}/>
              </div></div>}
            </div>
            </div>

	return (<div className="images"> 
   {this.state.isLoading?<div className="loader"></div>:content}
    </div>);
  }
}



export default Images;