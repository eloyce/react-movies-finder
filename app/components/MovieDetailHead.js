import React from 'react';

class MovieDetailHead extends React.Component {
	render() {
		const details = this.props.info;
		const baseBackdropUrl = "https://image.tmdb.org/t/p/w640";
		return(
			<section className="container">
				<div className="movie__hero--container">
					<img src={baseBackdropUrl + details.poster_path} alt={ details.title }/>
				</div>
				<div className="movie__head">
					<div className="movie__head--genre">
						<p>Action Adventure</p>
						<hr/>
					</div>
					<header>
						<div className="movie__head--title">
							<h2>{details.title}</h2>
						</div>
					</header>
					<div className="movie__head--meta">
						<div className="movie__head--score">
							<div className="btn-score"><span>{details.vote_average}</span></div>
							<span className="user-score">User Score</span>
						</div>
						<div className="movie__head--rating">
							<span>Rated: </span><span>PG-13</span>
						</div>
					</div>
					<div className="mobile-head__toggle">
						<a className="active">INFO</a>
						<a href="#trailers">TRAILERS</a>
					</div>
				</div>
			</section>
		)
	}
}

export default MovieDetailHead;