import React, { useEffect } from 'react'
import Questions from './Questions';
import {useSelector,useDispatch} from 'react-redux'
import { MoveNextQuestion } from '../hooks/fetchQuestion';

export default function Quiz() {

  const state=useSelector(state => state.questions.trace);
  const dispatch=useDispatch()

  useEffect(()=>{
    console.log(state)
  })

    function onPrev(){
        console.log('on onPrev click')
    }

    function onNext(){
        console.log('on next click')
        /**update the trace value by 1 using MoveNewAction */
        dispatch( MoveNextQuestion );
    }
  return (
    <div className='container'>
         <h1 className='title text-light'>Quiz Application</h1>

         <Questions></Questions>

         <div className='grid'>
            <button className='btn prev' onClick={onPrev}>Prev</button>
            <button className='btn next' onClick={onNext}>Next</button>
         </div>
    </div>
  )
}
