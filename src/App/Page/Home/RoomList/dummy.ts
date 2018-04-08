import { IRoom } from './Room'

const room: IRoom = {
  id: '123',
  heading: '관전자가 관전하는 방',
  mode: ['훈민정음', '어인정', '미션'],
  round: 5,
  time: 60,
  isLock: true,
  isPlaying: true,
  player: {
    now: 2,
    max: 8
  }
}

export const dummy: IRoom[] = [
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room,
  room
]
