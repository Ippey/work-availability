import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { WorkAvailability, Row } from 'work-availability'
import 'work-availability/dist/index.css'

const columns:Array<string> = [
  '4月',
  '5月',
  '6月'
]
const data:Array<Row> = [
  {name: "CMS構築", availability: ['full', 'empty', 'full']},
  {name: "技術顧問", availability: ['full', 'full', 'half']},
  {name: "システム開発", availability: ['empty', 'full', 'empty']}
]
const empty = (<div className='text-danger'>むり</div>)
const App = () => {
  return (
    <div className='container p-4'>
      <WorkAvailability columns={columns} data={data}
                        header='項目' type='icon' className='table table-striped w-50 mb-3' />
      <WorkAvailability columns={columns} data={data}
                        header='項目' type='text' full='いけるよ' half='まぁまぁ' empty={empty} className='table table-primary w-50 mb-3' />
      <WorkAvailability columns={columns} data={data}
                        header='項目' type='image' full='./full.png' half='./half.png' empty='./empty.png' className='table w-50 mb-3' />
    </div>
  )
}

export default App
