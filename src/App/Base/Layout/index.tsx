import * as React from 'react'
import * as classNames from 'classnames'

import './index.scss'

interface IProps {
  readonly name: string
  readonly className?: string
}

export const Layout: React.SFC<IProps> =
  ({ children, name, className }) => (
    <div id='Layout' className={classNames(name, className)}>{children}</div>
  )
