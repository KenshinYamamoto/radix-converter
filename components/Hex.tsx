import React, { FC, useState } from 'react'
import { Props } from '../types/type'

const Hex: FC<Props> = ({ setDecimal }) => {
    const [ hexVal, setHexVal ] = useState('')
    const includeOctalNums = ['a', 'b', 'c', 'd', 'e', 'f']

    const hexToDecimal = () => {
        const checkArray = hexVal.toLowerCase().split('')
        for(let i = 0;i < checkArray.length;i++) {
            if(checkArray[i] !== includeOctalNums[0] && checkArray[i] !== includeOctalNums[1] && checkArray[i] !== includeOctalNums[2] && checkArray[i] !== includeOctalNums[3] && checkArray[i] !== includeOctalNums[4] && checkArray[i] !== includeOctalNums[5]) {
                if(typeof(checkArray[i]) !== 'number') {
                    setDecimal('')
                    return
                }
            }
        }
        setDecimal(parseInt(hexVal, 16).toString())
    }
  return (
    <div className="hex decimal flex mb-3 mt-3 justify-center items-center">
        <label className='text-lg' htmlFor='hex'>16進数: </label>
        <input
        id='hex'
        className='mr-2 ml-2 h-10 text-xl border-2 border-black rounded-2xl p-2'
        type="text"
        value={hexVal}
        onChange={(e) => setHexVal(e.currentTarget.value)}
        placeholder='16進数を入力'
        />
        <button className='border-2 border-black bg-slate-500 text-white rounded-3xl p-1 w-20 h-10 hover:scale-110' onClick={() => hexToDecimal()}>変換</button>
    </div>
  )
}

export default Hex