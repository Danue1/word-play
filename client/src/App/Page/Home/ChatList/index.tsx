import * as React from 'react'

import './index.scss'
import { Layout } from '@/App/Base'
import { Line } from './Line'
import { dummy } from './dummy'

export const ChatList: React.SFC = () => {
  const lines = dummy.map((line, index) => (
    <Line data={line} key={index} />
  ))

  const Lines = () => (
    <Layout name='Lines'>{lines}</Layout>
  )

  const Input = () => (
    <Layout name='Input'>
      <input id='Input' type='text' />
      <button id='Submit'>전송</button>
    </Layout>
  )

  return (
    <Layout name='ChatList'>
      <Lines />
      <Input />
    </Layout>
  )
}
