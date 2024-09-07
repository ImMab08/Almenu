import create from 'zustand';

const useEditStore = create((set) => ({
  editingSection: null,
  setEditingSection: (section) => set({ editingSection: section }),
  clearEditingSection: () => set({ editingSection: null }),
}));

export default useEditStore;

