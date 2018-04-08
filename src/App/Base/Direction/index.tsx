import * as React from 'react'

import './index.scss'

const enum DirectionKey {
  Top = 'Top',
  Right = 'Right',
  Bottom = 'Bottom',
  Left = 'Left',
  Center = 'Center'
}

class DirectionBuilder {
  public static initialise (direction: DirectionKey): React.SFC {
    return ({ children }) => (
      <div id='Direction' className={direction}>
        {children}
      </div>
    )
  }
}

export const Direction = {
  Top: DirectionBuilder.initialise(DirectionKey.Top),
  Right: DirectionBuilder.initialise(DirectionKey.Right),
  Bottom: DirectionBuilder.initialise(DirectionKey.Bottom),
  Left: DirectionBuilder.initialise(DirectionKey.Left),
  Center: DirectionBuilder.initialise(DirectionKey.Center)
}
