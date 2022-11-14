import React, { FC, useState } from 'react'
import { Props } from '../types/type'

const Octal: FC<Props> = ({ setDecimal }) => {
    const [ octalVal, setOcralVal ] = useState('')

    const octalToDecimal = () => {
        const result = octalVal.indexOf('8') || octalVal.indexOf('9')
        if(result === -1) {
            setDecimal(parseInt(octalVal, 8).toString())
        } else {
            setDecimal('')
            return
        }
    }
  return (
    <div className='octal flex mb-3 mt-3 justify-center items-center'>
        <label className='text-lg' htmlFor='octal'>8進数: </label>
        <input
        id='octal'
        className='mr-2 ml-2 h-10 text-xl border-2 border-black rounded-2xl p-2'
        type="number"
        value={octalVal}
        onChange={(e) => setOcralVal(e.currentTarget.value)}
        placeholder='8進数を入力'
        />
        <button className='border-2 border-black bg-slate-500 text-white rounded-3xl p-1 w-20 h-10 hover:scale-110' onClick={() => octalToDecimal()}>変換</button>
    </div>
  )
}

export default Octal