import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem('数据总览', 'sub1', <MailOutlined />),

  getItem('用户管理', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')])
  ]),

  { type: 'divider' },

  getItem('订单管理', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ]),

  getItem('骑手管理', 'sub5', null, [getItem('Option 13', '13'), getItem('Option 14', '14')]),
  getItem('城市管理', 'sub6', null, [getItem('Option 15', '15'), getItem('Option 16', '16')]),
  getItem('运营管理', 'sub7', null, [getItem('Option 17', '17'), getItem('Option 18', '18')]),
  getItem('优惠卷管理', 'sub8', null, [getItem('Option 19', '19'), getItem('Option 14', '16')]),
  getItem('提现管理', 'sub9', null, [getItem('Option 17', '17'), getItem('Option 14', '17')]),
  getItem('系统设置', 'sub10', null, [getItem('Option 18', '18'), getItem('Option 14', '18')])
]

const App: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e: any) => {
    console.log('click ', e)
  }

  return (
    <div className="bg-gray-300">
      <header className="h-[10vh] bg-cyan-100 w-[100vw]">一件秒发送系统</header>
      <div className="w-[96vw] relative left-[50%] translate-x-[-50%] h-[90vh] bg-cyan-400 ">
        <Menu
          onClick={onClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
          className="h-[80vh] w-[150px] absolute left-0 top-[5vh] "
        />
        <div className=" h-[80vh] absolute left-[290px] mt-[5vh] bg-white min-w-[800px] w-[80%]">
          main
        </div>
      </div>
    </div>
  )
}

export default App
