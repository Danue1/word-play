import * as React from 'react'

import { Layout } from '../../../Base'

export interface ILine {
  readonly id: string
  readonly nickname: string
  readonly text: string
  readonly time: number
}

interface IProps {
  readonly data: ILine
}

export const Line: React.SFC<IProps> =
  ({ data }) => {
    const { nickname, text, time } = data

    const timeTemp = new Date()
    timeTemp.setTime(time)

    const hour = timeTemp.getHours()
    const minute = timeTemp.getMinutes()
    const second = timeTemp.getSeconds()

    const datetime = [hour, minute, second].join(':')

    return (
      <Layout name='Line'>
        <div id='Nickname'>{nickname}</div>
        <div id='Text'>{text}</div>
        <div id='Datetime'>{datetime}</div>
      </Layout>
    )
  }
