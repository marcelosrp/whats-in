import { useState, useEffect } from 'react'
import { FaSearch } from '@react-icons/all-files/fa/FaSearch'
import { NextSeo } from 'next-seo'
import { SEARCH_API } from '@services/api'
import Layout from '@components/Layout'
import Input from '@components/Input'
import EmptySearch from '@components/EmptySearch'

import * as S from './styles'

export default function HomeTemplate() {
  const [query, setQuery] = useState('')
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      if (query.length >= 3) {
        try {
          const response = await fetch(SEARCH_API + query)

          if (!response.ok) throw new Error('Deu ruim!')

          if (response.status === 200) {
            const data = await response.json(response)
            setMovie(data.results)
          }
        } catch (error) {
          console.log(error)
        }
      }
    }

    getMovies()
  }, [query])

  const handleQueryChange = ({ target }) => setQuery(target.value)

  return (
    <Layout>
      <NextSeo
        title="NextJS - Boilerplate"
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
              alt: 'NextJS - Boilerplate'
            }
          ],
          site_name: 'NextJS - Boilerplate'
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

      <S.MainContent>
        {movie.length !== 0 ? <h1>Tem filme</h1> : <EmptySearch />}
      </S.MainContent>
    </Layout>
  )
}
