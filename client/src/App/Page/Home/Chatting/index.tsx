import * as React from 'react'
import * as SocketIoClient from 'socket.io-client'

import './index.scss'
import { Layout } from '@/App/Base'
import { Line, ILine } from './Line'
import { dummy } from './dummy'

interface IState {
  readonly dummy: ILine[]
}

export class Chatting extends React.Component<null, IState> {
  public readonly state: IState = {
    dummy
  }

  private message: HTMLInputElement

  private readonly socket = this.getSocket()

  public render (): JSX.Element {
    const lines = dummy.map((line, index) => (
      <Line data={line} key={index} />
    ))

    const Lines = () => (
      <Layout name='Lines'>{lines}</Layout>
    )

    const Input = () => (
      <Layout name='Input'>
        <input id='Input' type='text' ref={(ref) => this.message = ref} onKeyUp={this.onKeyUp()} />
        <button id='Submit'>전송</button>
      </Layout>
    )

    return (
      <Layout name='Chatting'>
        <Lines />
        <Input />
      </Layout>
    )
  }

  private getSocket () {
    const endPoint = 'http://localhost:3030'
    const socket = SocketIoClient(endPoint)

    socket.on('hello', ({ message }) => {
      this.setState(({ dummy }) => {
        const line: ILine = {
          id: '아이디',
          nickname: '닉네임',
          text: message,
          time: 123
        }

        dummy.push(line)

        return { dummy }
      })
    })

    return socket
  }

  private onKeyUp () {
    return ({ key }: React.KeyboardEvent<HTMLInputElement>): void => {
      if (key !== 'Enter') { return }

      this.socket.emit('hello', { message: this.message.value })
    }
  }
}
