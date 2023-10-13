import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteAhistory, getHistory } from '../services/allAPI';


export default function WatchHistory() {
  const [history, setHistory] = useState([])
  const getWatchHistory = async () => {
    // make api call
    const { data } = await getHistory()
    console.log(data);
    setHistory(data)
  }

  const deleteHistory=async(id)=>{
    // make api call
    await deleteAhistory(id)
    getWatchHistory()
  }
  useEffect(() => {
    getWatchHistory()
  }, [])


  return (
    <>
      <div className="d-flex justify-content-between mt-5 mb-5 container align-items-center">
        <h3>Watch History</h3>
        <Link to={'/home'} style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }}>
          <i className='fa-solid fa-arrow-left me-2'></i>Back to Home</Link>
      </div>

      <div className="mt-5 mb-5  container">
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
            </tr>
          </thead>
          <tbody>
            {
              history.length > 0 ?
                history.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item?.caption}</td>
                    <td><a href={item?.embbedLink} target='_blank'>{item?.embbedLink}</a></td>
                    <td>{item?.timeStamp}</td>
                    <td><button onClick={()=>deleteHistory(item?.id)} className='btn text-danger'><i className='fa-solid fa-trash fs-5'></i>
                    </button></td>
                  </tr>

                ))
                : <p className='fw-bolder fs-5 text-danger mt-3'>Sorry nothing to display!!!</p>

            }
          </tbody>
        </table>
      </div>
    </>
  )
}
