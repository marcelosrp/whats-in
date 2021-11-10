import Image from 'next/image'
import Moment from 'react-moment'
import { IMG_PATH } from '@services/api'
import FavButton from '@components/FavButton'
import 'moment/locale/pt-br'

import * as S from './styles'

export default function MovieCard({ movie, setStorageMovie }) {
  const { id, title, release_date, poster_path } = movie

  return (
    <S.Card>
      <Image
        src={
          poster_path === null ? '/assets/popcorn.jpg' : IMG_PATH + poster_path
        }
        alt={title}
        width={188}
        height={300}
        quality={80}
      />
      <S.Legend>
        <FavButton
          movieData={{ id, title }}
          setStorageMovie={setStorageMovie}
        />
        <h4>{title}</h4>
        <p>
          <Moment format="YYYY">{release_date}</Moment>
        </p>
      </S.Legend>
    </S.Card>
  )
}
