import React from 'react'

//recall prop of data was passed to MovieCard from MovieListing
const MovieCard = (props) => {
  //destructure the data props
  const { data } = props;
  return (
    <div className='card-item'>
      <div className='card-inner'>
        <div className='card-top'>
          {/**See the inspector element for the redux tab for these data->properties used here */}
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className='card-bottom'>
          <div className='card-info'>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
