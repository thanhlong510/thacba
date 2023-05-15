import {FactoryData, LeftSideData, RightSideData} from '../../Shared/chartdata'
import Tippy from '@tippyjs/react/headless'
import React, {useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import {useRef} from 'react'

function PopperButton({children, menus, name, checkTypeSensor}) {
  const TippyRef = useRef(null)
  const [activeMenus, setActiveMenus] = useState([])
  const [isHide, setIsHide] = useState(true)

  const handleOnHide = () => {
    setActiveMenus([])
    TippyRef.current.className =
      'flex flex-col w-48 max-h-45 bg-slate-100 border-2' // Phuc hoi Tippy
  }

  const handleArrowClick = (menuName, data, type) => {
    //Kiểm tra xem khu vực cha nào được chọn để set lại cho button
    if (!data.children) {
      name(data.title)
      // setIsHide(false)
      if (type === 'factory') {
        checkTypeSensor(1)
      } else if (type === 'leftside') {
        checkTypeSensor(2)
      } else if (type === 'rightside') {
        checkTypeSensor(3)
      }
      TippyRef.current.className = 'display-none' // Xoa Tippy

      // a.hide()
    }
    // Xác định xem menu được nhấn xuống hay nhấn lên
    let newActiveMenus = [...activeMenus]
    if (newActiveMenus.includes(menuName)) {
      var index = newActiveMenus.indexOf(menuName)
      if (index > -1) {
        newActiveMenus.splice(index, 1)
      }
    } else {
      newActiveMenus.push(menuName)
    }

    setActiveMenus(newActiveMenus)
  }

  const ListMenu = ({dept, data, hasSubMenu, type, menuName}) => (
    <div className="max-h-40 overflow-auto ">
      <div onClick={() => handleArrowClick(menuName, data, type)} dept={dept}>
        <button
          className={
            ' ' +
            (dept == 1 ? 'ml-4' : ' ml-8') +
            (dept === 2 ? ' hover:font-bold' : '')
          }
        >
          {dept === 2 ? <ArrowRightIcon /> : ''} {data.title}
        </button>
        {hasSubMenu && (
          <button>
            <KeyboardArrowDownIcon />
          </button>
        )}
      </div>
      {hasSubMenu && (
        <SubMenu
          type={type}
          dept={dept}
          data={data.children}
          toggle={activeMenus.includes(menuName)}
        />
      )}
    </div>
  )

  const SubMenu = ({dept, data, toggle, type}) => {
    if (!toggle) {
      return null
    }

    dept = dept + 1

    return (
      <div>
        {data.map((menu, index) => {
          return (
            <ListMenu
              type={type}
              dept={dept}
              data={menu}
              hasSubMenu={menu.children}
              menuName={menu.code}
              key={menu.code}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className=" text-blue-400">
      <Tippy
        //  visible={true}
        interactive
        placement="bottom-start"
        onHidden={handleOnHide} // xoa du lieu
        // hideOnClick={isHide}
        render={(attrs) => (
          <div
            ref={TippyRef}
            className="flex flex-col w-48 max-h-45 bg-slate-100 border-2"
            tabIndex="-1"
            {...attrs}
          >
            {menus.map((menu, index) => {
              const dept = 1
              return (
                <ListMenu
                  key={menu.code}
                  dept={dept}
                  data={menu}
                  hasSubMenu={menu.children}
                  menuName={menu.code} // tên khác nhỏ gọn ( trong code này yêu cầu code, có thể bỏ thay bằng title)
                  type={menu.type}
                />
              )
            })}
          </div>
        )}
      >
        <button className="shadow-card  boder-2 w-32 px-1 py-1 mr-3 rounded-full hover:bg-red-600 hover:text-gray-50 ">
          {children} <ChevronRightIcon />
        </button>
      </Tippy>
    </div>
  )
}

export default PopperButton
