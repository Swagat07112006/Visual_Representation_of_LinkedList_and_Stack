import React from 'react'
const InputFields = ({position, setPosition, inputVal, setInputVal, linkedList, error, setError, addNode, customPosition, setCustomPosition}) => {
  return (
    <div className='
       w-full max-w-md bg-slate-800 rounded-2xl p-6 shadow-xl flex flex-col gap-5
    '>
        <h1 className='
            text-xl font-semibold text-emerald-400 text-center
        '>Add Node to Linked List</h1>

        <div className='flex flex-col gap-4'>
            <input 
                type="text"
                placeholder="Enter Value for Node"
                onChange={(e) => setInputVal(e.target.value)}   
                value={inputVal}
                className='
                    w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-600 text-slate-100 focus:outline-none focus:border-emerald-400
                '
            />

            <select value={position} onChange={(e) => setPosition(e.target.value)} className='
                w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-600 text-slate-100 focus:outline-none focus:border-emerald-400 cursor-pointer
            '>
                <option value="beginning">Beginning</option>
                <option value="end">End</option>
                <option value="anyPosition">Any Position</option>
            </select>

            {position === 'anyPosition' && 
                <input 
                    type="number"
                    placeholder="Enter position"
                    onChange={(e) => setCustomPosition(parseInt(e.target.value))}
                    value={customPosition}
                    className='
                        w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-600 text-slate-100 focus:outline-none focus:border-emerald-400
                    '
                />
            }
        </div>

        <button onClick={addNode} className='
            w-full mt-2 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-semibold transition cursor-pointer
        '>Add Node</button>
    </div>
  )
}

export default InputFields