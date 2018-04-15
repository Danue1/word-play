import * as React from 'react'
import * as classNames from 'classnames'

import './index.scss'

interface IProps {
  readonly name: string
  readonly className?: string

  onClick? ()
}

export const Layout: React.SFC<IProps> =
  ({ children, name, className, onClick }) => (
    <div
      id='Layout'
      className={classNames(name, className)}
      onClick={onClick}
    >
      {children}
    </div>
  )
