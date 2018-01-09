import React from 'react';

const apiKey = "1ae83ca4d8a91826db50f652ef3e24de";
const popularMoviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key="+ apiKey + "&language=en-US&page=1";

class IndexHomeCarousel extends React.Component {
	constructor() {
		super();
		this.state = {
			popularMovies: false
		}
		this.renderSlider = this.renderSlider.bind(this);
	}

	componentDidMount() {
		// Get popular movies for carousel
		fetch(popularMoviesUrl)
		.then(data => data.json())
		.then(data => {
			this.setState({
				popularMovies: data.results
			})
		});
	}

	renderSlider(key) {
		const item = this.state.popularMovies;
		return(
			<li key={key} className="carousel-slider__item">
				<img src={"https://image.tmdb.org/t/p/w640" + item[key].poster_path } alt={item[key].title} className="slide-item__featured--img"/>
				<div className="slide-item__meta--container">
					<p>{item[key].release_date}</p>
					<h3 className="slide-item__title">{item[key].title}</h3>
					<div className="slide-item__meta--info">
						<p className="slide-item__meta--time">{item[key].vote_count}</p>
						<p className="slide-item__meta--rating">{item[key].vote_count}</p>
					</div>
				</div>
			</li>
		)
	}

	// http://bashooka.com/wp-content/uploads/2016/06/movie-music-website-ui-50.jpg
	render() {
		if (this.state.popularMovies) {
			return(
				<div className="carousel-slider--container">
					<ul>
						{ Object.keys(this.state.popularMovies.slice(0,4)).map(this.renderSlider) }
					</ul>
					<div className="carousel-slider--dots">
						<ul>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
				</div>
			)
		} else {
			return('');
		}
	}

}

export default IndexHomeCarousel;