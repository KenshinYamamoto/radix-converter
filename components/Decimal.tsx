import React, { FC, useState } from 'react'
import { Props } from '../types/type'

const Decimal: FC<Props> = ({ setDecimal }) => {
    const [ decimalVal, setDecimalVal ] = useState('')

  return (
    <div className='decimal flex mb-3 mt-3 justify-center items-center'>
        <label className='text-lg' htmlFor='decimal'>10進数: </label>
        <input
        id='decimal'
        className='mr-2 ml-2 h-10 text-xl border-2 border-black rounded-2xl p-2'
        type="number"
        value={decimalVal}
        onChange={(e) => setDecimalVal(e.currentTarget.value)}
        placeholder='10進数を入力'
        />
        <button className='border-2 border-black bg-slate-500 text-white rounded-3xl p-1 w-20 h-10 hover:scale-110' onClick={() => setDecimal(decimalVal)}>変換</button>
    </div>
  )
}

export default Decimal