import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { WorkAvailability, Row } from 'work-availability'
import 'work-availability/dist/index.css'

const headers:Array<string> = [
  '項目',
  '4月',
  '5月',
  '6月'
]
const data:Array<Row> = [
  {title: "CMS構築", availability: ['full', 'empty', 'full']},
  {title: "技術顧問", availability: ['full', 'full', 'half']},
  {title: "システム開発", availability: ['empty', 'full', 'empty']}
]
const empty = (<div className='text-danger'>むり</div>)
const App = () => {
  return (
    <div className='container p-4'>
      <WorkAvailability headers={headers} data={data}
                         type='icon' className='table table-striped w-50 mb-3' />
      <WorkAvailability headers={headers} data={data}
                        type='text' full='いけるよ' half='まぁまぁ' empty={empty} className='table table-primary w-50 mb-3' />
      <WorkAvailability headers={headers} data={data}
                        type='image' full='./full.png' half='./half.png' empty='./empty.png' className='table w-50 mb-3' />
    </div>
  )
}

export default App
