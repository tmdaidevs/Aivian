import { create } from 'zustand';

const useSidebarStore = create(set => ({
  open: false,
  toggle: () => set(state => ({ open: !state.open })),
  close: () => set({ open: false }),
}));

export default useSidebarStore;
