import { defineStore } from 'pinia'
import { ref } from 'vue' // Import reactive function
import axiosInstance from './axiosInstance' // Update the import statement
import { genericStore } from '../stores/genericStore' // Import the data store

interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string
  backdrop_path: string
  genres: { id: number; name: string }[]
  homepage: string
  imdb_id: string
  original_language: string
  original_title: string
  popularity: number
  production_companies: {
    id: number
    logo_path: string | null
    name: string
    origin_country: string
  }[]
  production_countries: { iso_3166_1: string; name: string }[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[]
  status: string
  tagline: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface Comment {
  _id: string
  text: string
  rating: number
}

const apiKey = 'f2fd37be104137c08a49e01d8c6575a6'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: ref([] as Movie[]),
    movieDetails: ref(null as Movie | null),
    comments: ref([] as Comment[]),
    movieIdFor: ref(null as String),
    username: ref(null as String)
  }),
  actions: {
    async fetchMovies(params) {
      const url = `https://api.themoviedb.org/3/${params}?api_key=${apiKey}`

      try {
        const response = await fetch(url)
        const data = await response.json()
        this.movies = data.results
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    },
    async fetchMovieDetails(movieId) {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`

      try {
        const response = await fetch(url)
        const data = await response.json()
        this.movieDetails = data
      } catch (error) {
        console.error('Error fetching movie details:', error)
      }
    },
    async fetchComment(movieId: string) {
      const data = {
        id: movieId
      }
      try {
        const response = await axiosInstance.post('/api/users/getcomment', data)
        if (response.status === 200) {
          this.comments = response.data
          this.username = response.data.userName
        }
      } catch (error) {
        const genericStoreInstance = genericStore()
        genericStoreInstance.pleaseFixFollowingErrorsVisible = true
        genericStoreInstance.setMessage(
          'Auth Error',
          'You must be logged in to post a comment or see existing comments.',
          true,
          'text-red-700', // Red text color
          'bg-red-100' // Light red background color
        )
        setTimeout(() => {
          genericStoreInstance.pleaseFixFollowingErrorsVisible = false
        }, 3000)
      }
    },
    async postComment(movieId, text, rating) {
      const data = {
        id: movieId,
        text: text.value,
        rating,
        username: this.username
      }

      try {
        const response = await axiosInstance.post('/api/users/postcomment', data)
        const genericStoreInstance = genericStore()

        if (response.status === 201) {
          // Assuming the response contains the newly created comment
          this.fetchComment(this.movieIdFor)
        } else {
          genericStoreInstance.setMessage(
            'Error',
            response.data,
            true,
            'text-red-700', // Red text color
            'bg-red-100' // Light red background color
          )
          setTimeout(() => {
            genericStoreInstance.messageVisible = false
          }, 3000)
        }
      } catch (error) {
        const genericStoreInstance = genericStore()
        genericStoreInstance.setMessage(
          'Error',
          error.response.data.message,
          true,
          'text-red-700', // Red text color
          'bg-red-100' // Light red background color
        )
        setTimeout(() => {
          genericStoreInstance.messageVisible = false
        }, 3000)
      }
    },
    async searchMovie(params) {
      const url = `https://api.themoviedb.org/3/search/movie?query=${params}&api_key=${apiKey}`
      try {
        const response = await fetch(url)
        const data = await response.json()
        this.movies = data.results
      } catch (error) {
        console.error('Error fetching movie details:', error)
      }
    }
  }
})
