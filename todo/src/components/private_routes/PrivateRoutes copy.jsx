import React from 'react';
import ConfigRoutes from '../../config/routes';
import { Routes, Route, Navigate } from 'react-router-dom';

function PrivateRoutes(props) {
    const role = props.role || "guest"

    const allowedRoutes = ConfigRoutes[role].allowedRoutes
    const redirectRoutes = ConfigRoutes[role].redirectRoutes

    return (
        <Routes>
            {allowedRoutes.map(route => (
                <Route
                    path={route.url}
                    key={route.url}
                    element={<route.component setRole={props.setRole} />} // ส่ง setRole ผ่าน element นี้
                />
            ))}

            <Route
                path="*"
                element={<Navigate to={redirectRoutes} replace />}
            />
        </Routes>
    );
}

export default PrivateRoutes;
