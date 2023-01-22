import groq from 'groq'

export const query: string = groq`count(*[])`

interface Props {
  data: number;
}

export function DocumentsCount({data}: Props) {
  return (
    <>
      Documents: <strong>{data}</strong>
    </>
  )
}
 