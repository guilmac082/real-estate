import { defineStore } from 'pinia'

export const useAgencyStore = defineStore('agency', {
  state: () => ({
    // counter: 0,
    agency: {},
  }),

  getters: {
    // doubleCount(state) {
    //   return state.counter * 2
    // }
  },

  actions: {
    // increment() {
    //   this.counter++
    // },
    setAgency(agency) {
      this.agency = agency || {}
      // this.todoList.push({ agency, id: this.id++, completed: false })
    },
  }
})
