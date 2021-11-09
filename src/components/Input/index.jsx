import * as S from './styles'

export default function Input(props) {
  const { query, handleQueryChange } = props
  return <S.Input {...props} value={query} onChange={handleQueryChange} />
}
