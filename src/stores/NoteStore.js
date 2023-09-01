import { defineStore } from 'pinia'

export const useNoteStore = defineStore('noteStore', {
    state: () => ({
        notes: [
            {
                id: 1,
                title: 'Note One',
                content: 'Note One Content',
                timestamp: Date.now(),
                pinned: false,
            },
            {
                id: 2,
                title: 'Note Two',
                content: 'Note Two Content',
                timestamp: Date.now(),
                pinned: true,
            },
            {
                id: 3,
                title: 'Note Three',
                content: 'Note Three Content',
                timestamp: Date.now(),
                pinned: true,
            },
            {
                id: 4,
                title: 'Note Four',
                content: 'Note Four Content',
                timestamp: Date.now(),
                pinned: false,
            },
            {
                id: 5,
                title: 'Note Five',
                content: 'Note Five Content',
                timestamp: Date.now(),
                pinned: false,
            },
        ],
    }),
    getters: {
        allNotes: (state) => {
            return state.notes
        },

        pinnedNotes: (state) => {
            return state.notes.filter((note) => note.pinned)
        },
    },
})
