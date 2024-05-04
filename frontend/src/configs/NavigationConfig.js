import { DashboardOutlined ,UsergroupDeleteOutlined, InboxOutlined, UserOutlined, CrownOutlined, SnippetsOutlined, UserAddOutlined, UsergroupAddOutlined, GiftOutlined} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const defaultNav = [{
  key: 'dashboards/default',
  path: `${APP_PREFIX_PATH}/dashboards/default`,
  title: 'Overview',
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'Home',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const sectionNav = [{
  key: 'dashboards/default',
  title: 'Sections',
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards/marsRoverPhotos',
      path: `${APP_PREFIX_PATH}/dashboards/marsRoversPhotos`,
      title: 'Mars',
      icon: UsergroupDeleteOutlined,
      breadcrumb: false,
      isGroupTitle: false,
      submenu: [
        {
          key: 'marsRoverPhotos-view',
          path: `${APP_PREFIX_PATH}/dashboards/marsRoversPhotos/view`,
          title: 'Mars Rovers',
          icon: UsergroupAddOutlined,
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'dashboards/astronomyPhotoOfDay',
      path: `${APP_PREFIX_PATH}/dashboards/astronomyPhotoOfDay`,
      title: 'Astronomy Pictures',
      icon: UsergroupDeleteOutlined,
      breadcrumb: false,
      isGroupTitle: false,
      submenu: [
        {
          key: 'astronomyPhotoOfDay-view',
          path: `${APP_PREFIX_PATH}/dashboards/astronomyPhotoOfDay/view`,
          title: 'Imagery',
          icon: UsergroupAddOutlined,
          breadcrumb: false,
          submenu: []
        },
      ]
    }
  ]
}]

const navigationConfig = [
  ...defaultNav,
  ...sectionNav
]

export default navigationConfig;
