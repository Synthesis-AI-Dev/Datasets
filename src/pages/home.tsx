import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { RoutesNames } from '../constants/routes'

const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate(RoutesNames.CLOSE_UP)
    })
    return (
        <> </>
    )
}
export default Home