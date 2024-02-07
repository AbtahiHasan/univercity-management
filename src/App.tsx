import { Toaster } from "sonner";
import RootLayout from "./layout/RootLayout";
import ProtectedRoute from "./private/ProtectedRoute";

function App() {
  return (
    <>
      <ProtectedRoute>
        <RootLayout />;
        <Toaster />
      </ProtectedRoute>
    </>
  );
}

export default App;
