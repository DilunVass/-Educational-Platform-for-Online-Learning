import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AUTHENTICATED_ENTRY, UNAUTHENTICATED_ENTRY, AUTH_PREFIX_PATH } from 'configs/AppConfig';
import { protectedRoutes, publicRoutes } from 'configs/RoutesConfig';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import AppRoute from './AppRoute';

const Routes = () => {

	const { token } = useSelector(state => state.auth)

	return (
		<RouterRoutes>
			<Route path="/" element={<ProtectedRoute />}>
				<Route path="/" element={<Navigate replace to={AUTHENTICATED_ENTRY} />} />
				{protectedRoutes.map((route, index) => {
					return (
						<Route 
							key={route.key + index} 
							path={route.path}
							element={
								<AppRoute
									routeKey={route.key} 
									component={route.component}
									{...route.meta} 
								/>
							}
						/>
					)
				})}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Route>
			<Route path="/" element={<PublicRoute />}>
				{publicRoutes.map(route => {
					return (
						<Route 
							key={route.path} 
							path={route.path}
							element={
								<AppRoute
									routeKey={route.key} 
									component={route.component}
									{...route.meta} 
								/>
							}
						/>
					)
				})}
			</Route>
		</RouterRoutes>
	)
}

export default Routes