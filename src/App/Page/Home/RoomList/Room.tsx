import * as React from 'react'
import * as classNames from 'classnames'

import { Link, Direction, Layout } from '@/App/Base'

type People = 2 | 3 | 4 | 5 | 6 | 7 | 8

interface Player {
  readonly now: People
  readonly max: People
}

export interface IRoom {
  readonly id: string
  readonly heading: string
  readonly mode: string[]
  readonly round: number
  readonly time: number
  readonly isLock: boolean
  readonly isPlaying: boolean
  readonly player: Player
}

interface IRoomProps {
  readonly info: IRoom
}

export const Room: React.SFC<IRoomProps> =
  ({ info }) => {
    const {
      id,
      heading,
      mode,
      round,
      time,
      isLock,
      isPlaying,
      player
    } = info

    const privacy = (isLock) ? '클로즈' : '오픈'

    const Left: React.SFC = () => (
      <Direction.Left>
        <div id='People'>{player.now} / {player.max}</div>
        <div id='Privacy'>{privacy}</div>
      </Direction.Left>
    )

    const Right: React.SFC = () => (
      <Direction.Right>
        <Link to={id}>
          <div id='Heading'>{heading}</div>
          <div id='Mode'>{mode.join(' / ')}</div>
          <div id='Detail'>{round}라운드 {time}초</div>
        </Link>
      </Direction.Right>
    )

    const className = classNames({ isActive: isPlaying })

    return (
      <Layout name='Room' className={className}>
        <Left />
        <div id='Divider' />
        <Right />
      </Layout>
    )
  }
