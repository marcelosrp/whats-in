import { useState } from 'react'
import { FaSearch } from '@react-icons/all-files/fa/FaSearch'
import { NextSeo } from 'next-seo'
import Layout from '@components/Layout'
import Input from '@components/Input'
import EmptySearch from '@components/EmptySearch'

import * as S from './styles'

export default function HomeTemplate() {
  const [query, setQuery] = useState('')

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
        <EmptySearch />
      </S.MainContent>
    </Layout>
  )
}
