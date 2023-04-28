import overviewImg from '../../../Asset/Image/218988_86955.jpg'
import logo2 from '../../../Asset/Image/logo2.png'
import TextField from '@mui/material/TextField'
import {useContext} from 'react'
import {dangnhap} from '../../Components/App/index'
function LogIn({setAuth}) {
  return (
    <div className="flex">
      <div
        className="h-screen w-2/3"
        style={{
          backgroundImage: `url(${overviewImg})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: ' 100% 100%',
        }}
      ></div>
      <div className="h-screen w-1/3">
        <div
          className="w-full h-16 mt-14"
          style={{
            backgroundImage: `url(${logo2})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: ' 100% 100%',
          }}
        />
        <hr></hr>
        <div className="mx-4">
          <p className="text-red-600 text-lg flex ">
            HỆ THỐNG GIÁM SÁT TỰ ĐỘNG CÔNG TRÌNH THỦY LỢI
          </p>
          <p className="italic text-sm mt-4">Tên đăng nhập</p>
          <TextField className="w-full  mt-4" type="text" />
          <p className="italic mt-4 text-sm">Mật khẩu</p>
          <TextField className="w-full mt-4 " type="password" />
          <a className="mt-4 italic text-cyan-600 underline" href="/login ">
            Quên mật khẩu
          </a>
          <button
            onClick={() => setAuth(true)}
            className="w-full mt-4 rounded-full py-3 border-[1px] bg-sky-500"
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  )
}

export default LogIn
