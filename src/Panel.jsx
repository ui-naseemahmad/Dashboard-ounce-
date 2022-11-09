import {
  Button,
  FlexLayout,
  Topbar,
  BodyLayout,
  NewSidebar,
  Sidebar,
} from
  '@cedcommerce/ounce-ui';
import { Home, User, Box, Bell, LogOut, Settings } from 'react-feather';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Leverage from './Levearge/Leverage';
import Profile from './Profile/Profile';

export const Panel = () => {
  const history = useNavigate();
  return (
    <>
       <Topbar 
        account={{
        image: 'https://rapidexeducation.com/wp-content/uploads/2016/01/tutor-8.jpg',
        name: 'Jon Doe',
        url: 'www.Cedcommerce.com',
        userPopoverMenu: <><Button halign="Start" icon={<User size={20} />} length="fullBtn" type="Plain">Profile</Button><Button halign="Start" icon={<Settings size={20} />} length="fullBtn" type="Plain">Settings</Button><Button halign="Start" icon={<LogOut size={20} />} length="fullBtn" type="Plain">Logout</Button></>
      }}
      connectRight={<FlexLayout spacing="tight"><Button icon={<Bell size={20} />} iconAlign="left" onClick={function noRefCheck(){}} type="Outlined"/><Button icon={<User size={20} />} iconAlign="left" type="Outlined"/></FlexLayout>}
    />
      <Sidebar
        onChange={(e)=>{history(e.path)}}
        logo={<img alt="CedCommerce" src="https://d3vlhkqyz4y38a.cloudfront.net/skin/frontend/cedcomnew/default/images/header/logo/ced-logo-web.svg" title="CedCommerce" width={150} />}
        menu={[
          {
            content: 'Dashboard',
            icon: <Box size={20} />,
            id: 'dashboard',
            path: 'dashboard',
            url: "/dashboard",
            showPage: true,
            showTargetSelect: true,
            heading: 'Dashboard'
          },
          {
            content: 'Profile',
            icon: <Box size={20} />,
            id: 'profiling',
            path: 'profile',
            url: "/profile",
            showPage: true,
            showTargetSelect: true,
            heading: 'profiling'
          },
          {
            content: 'leverage',
            icon: <Box size={20} />,
            id: 'leverage',
            path: 'leverage',
            url: "/leverage",
            showPage: true,
            showTargetSelect: true,
            heading: 'leverage'
            
          },
          {
            content: 'Orders',
            icon: <Box size={20} />,
            id: 'order',
            path: 'order',
            url: "/order",
            showPage: true,
            showTargetSelect: true,
            heading: 'order'
          },
          {
            content: 'Configuration',
            icon: <Box size={20} />,
            id: 'configuration',
            path: 'config',
            url: "/config",
            showPage: true,
            showTargetSelect: true,
            heading: 'config'
          },
          {
            content: 'Activities',
            icon: <Box size={20} />,
            id: 'queuedtasks',
            path: 'activities',
            url: "/activities",
            showPage: true,
            showTargetSelect: true,
            heading: 'activities'
          }
        ]}
        mobileLogo={<img alt="CedCommerce" src="https://i.imgur.com/cqfQhek.png" title="CedCommerce" width={40} />}
        subMenu={[
          {
            content: 'FAQ',
            icon: <Home size={20} />,
            id: 'dashboard2',
            path: 'dashboard2'
          }
        ]}
      />
      <BodyLayout>
        <Routes>
            <Route path='/' element={<Dashboard />} />
              <Route path='dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<Profile /> } />
            <Route path='/leverage' element={<Leverage /> } />
            {/* <Route path='/products' element={''} /> */}
            {/* <Route path='*' element={<Navigate to ="/" />}/> */}
        </Routes>
      </BodyLayout>
    </>
  )
}
