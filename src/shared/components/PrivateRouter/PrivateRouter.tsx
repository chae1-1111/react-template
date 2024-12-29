import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

interface PrivateRouterProps {
    requiredRole?: string;
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const {isAuthenticated, userRole} = useSelector((state: any) => state.auth);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (userRole !== undefined && userRole !== props.requiredRole) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet/>;
}

export default PrivateRouter;
