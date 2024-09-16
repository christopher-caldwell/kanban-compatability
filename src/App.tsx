import { FC } from 'react'
import { UncontrolledBoard } from '@caldwell619/react-kanban'

import { board } from './data'
import { Source } from './Source'

export const App: FC = () => {
  return (
    <body>
      <Source
        title="Uncontrolled"
        url="https://github.com/christopher-caldwell/react-kanban/blob/main/demo/src/features/uncontrolled/index.tsx"
      />
      <UncontrolledBoard
        initialBoard={board}
        onCardRemove={({ board, card, column }) => {
          console.log({ board, card, column })
        }}
      />
    </body>
  )
}
