import Image from 'next/image'
import * as S from './styles'

export default function EmptySearch() {
  return (
    <S.ErrorWrapper>
      <Image
        alt="Ilustration empty state"
        src="/assets/illustration-empty-state.png"
        width={450}
        height={225}
        quality="80"
      />
      <S.ErrorTitle>Dont know what to search?</S.ErrorTitle>
      <S.ErrorText>Heres an offer you cant refuse</S.ErrorText>
    </S.ErrorWrapper>
  )
}
