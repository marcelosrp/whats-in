import { AiOutlineHeart } from '@react-icons/all-files/ai/AiOutlineHeart'
//import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart'

import * as S from './styles'

export default function FavButton({ movieData, setStorageMovie }) {
  const handleStorageMovie = () => {
    setStorageMovie((prevState) => [...prevState, movieData])
  }

  return (
    <S.Fav onClick={handleStorageMovie}>
      <AiOutlineHeart />
    </S.Fav>
  )
}
