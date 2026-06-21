import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:pl-72">
        <div className="page-container">
          <Navbar />
          {children}
        </div>
      </main>
    </div>
  );
}
