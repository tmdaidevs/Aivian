import { NavLink } from 'react-router-dom';
import useSidebarStore from '../store/sidebar';

const links = [
  { to: '/chat', label: 'Chat Assistant' },
  { to: '/productivity', label: 'Productivity Tools' },
  { to: '/creative', label: 'Creative Tools' },
  { to: '/voice', label: 'Voice Tools' },
  { to: '/knowledge', label: 'Knowledge Tools' },
  { to: '/insights', label: 'Insights & History' },
];

function Sidebar() {
  const { open, close } = useSidebarStore();

  return (
    <aside className={`bg-gray-800 text-white w-64 flex-shrink-0 p-4 space-y-2 absolute md:static z-10 h-full md:h-auto md:block transition-transform ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
      {links.map(link => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={close}
          className={({ isActive }) =>
            `block p-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </aside>
  );
}

export default Sidebar;
