import React, { useState, useEffect } from 'react'
import DisplayCards from '../components/organisms/DisplayCards'
import { POSTS } from '../routes/api'
import request from '../utils/request'
import useScroll from '../utils/hocs/useScroll'
import debounce from '../utils/debounce'

const HomePage = () => {

    const [listData, setListData] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrestPage] = useState(1)
    const { endOfPage } = useScroll()

    //actual fetch api
    const fetchData  = async (start) => {
        setLoading(true)
        const response = await request({url: POSTS(start)})
        setListData([...listData, ...response.data])
        setLoading(false)
    }  


    //rate limit
    const optimizedFetch =  debounce(fetchData, 500)

    //handles the scroll events
    useEffect(() => {
      if(endOfPage){
          setLoading(true)
          optimizedFetch(currentPage+1)
          setCurrestPage(currentPage+1)
      }  
    }, [endOfPage])


    //initial fetching of data
    useEffect(() => {
        fetchData(1)
    }, [])


    return (
        <DisplayCards listData={listData} loading={loading} />
    )
}

export default HomePage;