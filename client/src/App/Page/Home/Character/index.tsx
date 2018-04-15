import * as React from 'react'

import './index.scss'
import { Layout } from '../../../Base'

interface IProps {
  onClick ()
}

export const Character: React.SFC<IProps> = ({ onClick }) => (
  <Layout name='Character'>
    <div onClick={onClick}>
      캐릭터
    </div>
  </Layout>
)
