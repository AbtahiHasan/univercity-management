import RootLayout from "./layout/RootLayout";
import ProtectedRoute from "./private/ProtectedRoute";

function App() {
  return (
    <>
      <ProtectedRoute>
        <RootLayout />;
      </ProtectedRoute>
    </>
  );
}

export default App;
