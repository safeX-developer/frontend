import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

export default function Referal() {
    const {code} = useParams()
    const { _app } = useContext(AppContext)

    useEffect(()=>{
        _app?.referalCodeRegistration(code)
    },[code])

  return (
    <div>
        Loading...
    </div>
  )
}
