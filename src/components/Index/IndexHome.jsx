import React, { PureComponent } from 'react'

import MovieIndexFeed from './MovieIndexFeed'
import UpcomingIndexFeed from './UpcomingIndexFeed'
import Carousel from '../Carousel/Carousel'
import PromoBanner from './PromoBanner'

class IndexHome extends PureComponent {
  render() {
    return (
      <div className="index-container">
        <Carousel />
        <PromoBanner
          title={'Discover new movies'}
          message={'Find a new favorite.'}
          classes={'banner-block index-promo red-gradient'}
        />
        <PromoBanner
          title={'Find new collections'}
          message={'Find a new series'}
          classes={'banner-block index-promo purple-gradient'}
        />
        <MovieIndexFeed />
        <UpcomingIndexFeed />
      </div>
    )
  }
}

export default IndexHome