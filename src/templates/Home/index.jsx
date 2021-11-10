import { useState, useEffect } from 'react'
import { FaSearch } from '@react-icons/all-files/fa/FaSearch'
import { NextSeo } from 'next-seo'
import { SEARCH_API } from '@services/api'
import Layout from '@components/Layout'
import Input from '@components/Input'
import EmptySearch from '@components/EmptySearch'
import MovieCard from '@components/MovieCard'
import Pagination from '@components/Pagination'

import * as S from './styles'

export default function HomeTemplate() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(null)
  const [storageMovie, setStorageMovie] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      if (query.length >= 3) {
        try {
          const response = await fetch(
            `${SEARCH_API}&query=${query}&page=${currentPage}`
          )

          if (!response.ok) throw new Error('Deu ruim!')

          if (response.status === 200) {
            const data = await response.json(response)
            setMovies(data.results)
            setTotalPages(data.total_pages)
          }
        } catch (error) {
          console.log(error)
        }
      }
    }

    getMovies()
  }, [query, currentPage])

  useEffect(() => {
    console.log('storage: ', storageMovie)
  }, [storageMovie])

  const handleQueryChange = ({ target }) => setQuery(target.value)

  const renderMoviesCard = () => {
    return movies.map((movie) => {
      return (
        <MovieCard
          key={movie.id}
          movie={movie}
          setStorageMovie={setStorageMovie}
        />
      )
    })
  }

  const getPrevPage = () => {
    if (currentPage > 1) setCurrentPage((currentPage) => currentPage - 1)
  }

  const getNextPage = () => {
    if (currentPage < totalPages)
      setCurrentPage((currentPage) => currentPage + 1)
  }

  const setPage = (page) => setCurrentPage(page)

  const GoToFirstPage = () => setCurrentPage(1)

  const GoToLastPage = () => setCurrentPage(totalPages)

  return (
    <Layout>
      <NextSeo
        title="Whats in"
        description="A simple NextJS Boilerplate to start an project"
        canonical="https://my-trips-soares.vercel.app/"
        openGraph={{
          url: 'https://my-trips-soares.vercel.app/',
          title: 'NextJS - Boilerplate',
          description: 'A simple NextJS Boilerplate to start an project',
          images: [
            {
              url: '',
              width: 1280,
              height: 720,
              alt: 'Whats in'
            }
          ],
          site_name: 'Whats in'
        }}
      />

      <S.Search>
        <FaSearch />
        <Input
          type="search"
          name="query"
          id="query"
          placeholder="Search movies..."
          query={query}
          handleQueryChange={handleQueryChange}
        />
      </S.Search>

      <S.MainContent hasMovies={movies.length > 0}>
        {movies.length === 0 ? <EmptySearch /> : renderMoviesCard()}
      </S.MainContent>

      {movies.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          getPrevPage={getPrevPage}
          getNextPage={getNextPage}
          setPage={setPage}
          GoToFirstPage={GoToFirstPage}
          GoToLastPage={GoToLastPage}
        />
      )}
    </Layout>
  )
}
