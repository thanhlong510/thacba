import {Link, useParams} from 'react-router-dom'
import {sectionInfor} from '../../Shared/data'
import sidemap from '../../../../../Asset/Image/Group92.png'
import {useState} from 'react'
function Side() {
  const params = useParams()
  return (
    <div
      className="Side w-full h-full"
      style={{
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundImage: 'no-repear',
        backgroundImage: `url(${sidemap})`,
      }}
    >
      <Link to="/map/factory">
        <button
          className={
            'uppercase border-2 m-4 rounded-full w-32 ' +
            (params.section ? 'bg-white' : 'bg-red-600')
          }
        >
          {' '}
          {params.section}{' '}
        </button>
      </Link>
      {sectionInfor.map((b) => {
        return (
          <Link to={'/map/' + params.section + b.link}>
            <button
              className={
                'uppercase border-2 m-4 w-32 rounded-full ' +
                (params.side === b.name ? 'bg-red-600' : 'bg-white')
              }
            >
              {b.title}
            </button>
          </Link>
        )
      })}
    </div>
  )
}

export default Side
