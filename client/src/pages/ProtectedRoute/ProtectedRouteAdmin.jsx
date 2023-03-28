import {Navigate} from 'react-router-dom'

function ProtectedRouteAdmin({children,loggedIn,user}) {
    if (!loggedIn) {
        return <Navigate to="/login" replace />;
    }

    if(user.role !=="admin"){
        return <Navigate to="/" replace />
    }

    return children;
}

export default ProtectedRouteAdmin
