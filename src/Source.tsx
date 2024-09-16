import { FC } from 'react'

export const Source: FC<Props> = ({ title, navId = title.toLocaleLowerCase() }) => {
  return (
    <span id={navId}>
      <p style={{ paddingTop: '10vh' }}>{title}: </p>
    </span>
  )
}

interface Props {
  title: string
  url: string
  navId?: string
}
