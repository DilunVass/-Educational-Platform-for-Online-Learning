import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
]

export const protectedRoutes = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        component: React.lazy(() => import('views/app-views/dashboards/default')),
    },
    {
        key: 'dashboards-mars-rovers-photos',
        path: `${APP_PREFIX_PATH}/dashboards/marsRoversPhotos/view`,
        component: React.lazy(() => import('views/app-views/dashboards/marsRoverPhotos')),
    },
    {
        key: 'dashboards-astronomyPhoto-ofDay',
        path: `${APP_PREFIX_PATH}/dashboards/astronomyPhotoOfDay/view`,
        component: React.lazy(() => import('views/app-views/dashboards/astronomyPhotoOfDay')),
    }
]