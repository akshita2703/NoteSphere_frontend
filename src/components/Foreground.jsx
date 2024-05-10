import React, { useState, useRef, useEffect } from 'react'
import Card from './Card'
import { MdLocalFireDepartment } from 'react-icons/md'
import axios from 'axios'

const Foreground = () => {
  const ref = useRef(null)
  

  const [data, setData1] = useState([])

  const token = localStorage.getItem('token')

  const fetchData = async () => {
    try {
      const header = {
        Authorization: `Bearer ${token}`
      }

      const res = await axios.get('http://localhost:5500/note/read', { headers: header })
      setData1(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>

      <div ref={ref} className='fixed top-10 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>

    </>

  )
}

export default Foreground
