import React from 'react';
import Pagination from './Pagination';

class Photos extends React.Component
{
	state ={
		posts:this.props.photoArray,
		currentPage:1,
		postsPerPage:21
	}
	
	paginate =(pageNumber) =>{
		this.setState({currentPage:pageNumber});
		console.log(this.state);
	}

	render (){

			let indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
  			let indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
  			let currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);
	let Posts =(
		<div>
			<div class="wrapper">
		{
			currentPosts.map((photo)=>{
				return <img src={photo}/>
		})
		}
		</div>
		
		<div>
			<Pagination 
        postsPerPage={this.state.postsPerPage}
        totalPosts={this.state.posts.length}
        paginate={this.paginate}
      />
      </div> 
      </div>)

	return(<div>{Posts}</div>
		) }
}


export default Photos;