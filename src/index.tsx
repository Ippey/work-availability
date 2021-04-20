import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBatteryFull,
  faBatteryHalf,
  faBatteryEmpty
} from '@fortawesome/free-solid-svg-icons'

export interface Row {
  title: any
  availabilities: Array<'full' | 'half' | 'empty'>
}

interface Props {
  id?: string
  className?: string
  type: 'text' | 'image' | 'icon'
  full?: any
  half?: any
  empty?: any
  headers: Array<any>
  data: Array<Row>
}

export class WorkAvailability extends React.Component<Props, {}> {
  public status(value: string) {
    if (value === 'full') {
      return this.full()
    } else if (value === 'empty') {
      return this.empty()
    }
    return this.half()
  }

  public full() {
    if (this.props.type === 'text') {
      return this.props.full
    } else if (this.props.type === 'image') {
      return <img src={this.props.full} alt='full' />
    }
    return <FontAwesomeIcon icon={faBatteryFull} size='2x' />
  }

  public empty() {
    if (this.props.type === 'text') {
      return this.props.empty
    } else if (this.props.type === 'image') {
      return <img src={this.props.empty} alt='empty' />
    }
    return <FontAwesomeIcon icon={faBatteryEmpty} size='2x' />
  }

  public half() {
    if (this.props.type === 'text') {
      return this.props.half
    } else if (this.props.type === 'image') {
      return <img src={this.props.half} alt='half' />
    }
    return <FontAwesomeIcon icon={faBatteryHalf} size='2x' />
  }

  public render() {
    const id: string = this.props.id ? this.props.id : 'work-availability'
    const className: string = this.props.className ? this.props.className : ''
    return (
      <div>
        <table id={id} className={className}>
          <thead>
            <tr>
              {this.props.headers.map((value) => (
                // eslint-disable-next-line react/jsx-key
                <th>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((row) => (
              // eslint-disable-next-line react/jsx-key
              <tr>
                <td>{row.title}</td>
                {row.availabilities.map((value) => (
                  // eslint-disable-next-line react/jsx-key
                  <td className={value}>{this.status(value)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
