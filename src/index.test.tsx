// noinspection HtmlUnknownTarget

import { WorkAvailability } from '.'
import * as React from 'react'
import {
  faBatteryEmpty,
  faBatteryFull,
  faBatteryHalf
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

describe('WorkAvailability', () => {
  it('is truthy', () => {
    expect(WorkAvailability).toBeTruthy()
  })

  it('text status', () => {
    const props: any = {
      id: 'hoge',
      type: 'text',
      full: 'it is full',
      half: 'it is half',
      empty: 'it is empty',
      headers: ['a', 'b'],
      data: [
        { title: 'hoge', availabilities: ['full', 'half'] },
        { title: 'foo', availabilities: ['empty', 'half'] }
      ]
    }
    const obj = new WorkAvailability(props, {})
    expect(obj.status('full')).toEqual('it is full')
    expect(obj.status('half')).toEqual('it is half')
    expect(obj.status('empty')).toEqual('it is empty')
  })

  it('image status', () => {
    const props: any = {
      id: 'hoge',
      type: 'image',
      full: 'full.png',
      half: 'half.png',
      empty: 'empty.png',
      headers: ['a', 'b'],
      data: [
        { title: 'hoge', availabilities: ['full', 'half'] },
        { title: 'foo', availabilities: ['empty', 'half'] }
      ]
    }
    const obj = new WorkAvailability(props, {})
    expect(obj.status('full')).toEqual(<img src='full.png' alt='full' />)
    expect(obj.status('half')).toEqual(<img src='half.png' alt='half' />)
    expect(obj.status('empty')).toEqual(<img src='empty.png' alt='empty' />)
  })

  it('icon status', () => {
    const props: any = {
      id: 'hoge',
      type: 'icon',
      headers: ['a', 'b'],
      data: [
        { title: 'hoge', availabilities: ['full', 'half'] },
        { title: 'foo', availabilities: ['empty', 'half'] }
      ]
    }
    const obj = new WorkAvailability(props, {})
    expect(obj.status('full')).toEqual(
      <FontAwesomeIcon icon={faBatteryFull} size='2x' />
    )
    expect(obj.status('half')).toEqual(
      <FontAwesomeIcon icon={faBatteryHalf} size='2x' />
    )
    expect(obj.status('empty')).toEqual(
      <FontAwesomeIcon icon={faBatteryEmpty} size='2x' />
    )
  })
})
