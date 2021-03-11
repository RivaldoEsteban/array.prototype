import movies from './movies.js'
import render from './render.js'

const listenerBtn = document.getElementById('recommended')

listenerBtn.addEventListener('click',() => {
  render(setRecommendedMovies(movies))
} )

function setRecommendedMovies(movies){
  return movies.map((movie,index)=> {
      return { ...movie, recommended: movie.vote_average > 7 }
    })
}