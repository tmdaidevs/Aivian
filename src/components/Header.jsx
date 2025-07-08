import useSidebarStore from '../store/sidebar';

function Header() {
  const toggle = useSidebarStore(state => state.toggle);
  return (
    <header className="bg-gray-900 text-white flex items-center justify-between px-4 py-2 shadow">
      <h1 className="text-lg font-bold">MindCompanion</h1>
      <button className="md:hidden" onClick={toggle} aria-label="Toggle Menu">
        &#9776;
      </button>
    </header>
  );
}

export default Header;
