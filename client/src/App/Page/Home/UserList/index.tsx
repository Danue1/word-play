import * as React from 'react'

import './index.scss'
import { Layout, Link } from '@/App/Base'

const dummy = '0123456789'.repeat(10).split('')

export class UserList extends React.Component {
  public render (): JSX.Element {
    const User = dummy.map((_, index): JSX.Element => (
      <Link to='' className='User' key={index}>Guest{index}</Link>
    ))

    return (
      <Layout name='UserList'>
        <div id='Heading'>접속자 리스트</div>
        <Layout name='Users'>
          {User}
        </Layout>
      </Layout>
    )
  }
}
