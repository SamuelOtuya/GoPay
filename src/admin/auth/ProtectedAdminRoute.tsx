import { Navigate } from "react-router-dom";
import { useAdminAuth } from "./AdminAuthContext";

export default function ProtectedAdminRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session, loading } = useAdminAuth();

  if (loading) {
    return <div className="p-10">Checking admin access...</div>;
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}
