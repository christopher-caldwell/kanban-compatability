import { FC } from 'react'
import { UncontrolledBoard } from '@caldwell619/react-kanban'

import { board } from './data'

export const App: FC = () => {
  return (
    <body>
      <UncontrolledBoard
        initialBoard={board}
        onCardRemove={({ board, card, column }) => {
          console.log({ board, card, column })
        }}
      />
    </body>
  )
}
