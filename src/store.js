import Vue from 'vue'
import Vuex from 'vuex'
import { getInformants } from '@/game/informants'
import { getQuest, getQuestEvent, QUESTS } from '@/game/quests'
import { MAX_MESSAGES, MESSAGE_STATUS } from '@/constants'

Vue.use(Vuex)

function initialState () {
  return {
    information: 0,
    informants: getInformants(),
    messages: [],
    player: {
      generation: 1,
      level: 1,
      experience: 0
    },
    quest: {
      id: 0,
      event: 0
    }
  }
}

// Dynamically build the list of informants
export const store = new Vuex.Store({
  getters: {
    getInformation: state => state.information,
    getInformants: state => state.informants,
    getMessages: state => state.messages,
    getPlayer: state => state.player,
    getQuest: state => state.quest.id < QUESTS.length ? QUESTS[state.quest.id] : null,
    getUnreadMessageCount: state => state.messages.filter(m => m.status === MESSAGE_STATUS.UNREAD).length
  },
  mutations: {
    // Adds the specified amount of information to the user's stash
    addInformation: (state, { count }) => {
      console.log('adding ' + count)
      state.information += parseInt(count)
    },

    // Loads the saved game from local storage
    loadLocalStorage: (state) => {
      let saved = localStorage.getItem('store')
      if (saved) {
        store.replaceState(Object.assign(state, JSON.parse(saved)))
      }
    },

    // Marks a message as read
    markMessageRead: (state, { messageTitle }) => {
      let i = state.messages.findIndex(function (m) { return m.title === messageTitle })
      if (i !== -1) {
        state.messages[i].status = MESSAGE_STATUS.READ
      }
    },

    // Purchases one of the given informants
    purchaseInformant: (state, { name }) => {
      // Find the informant by name and price
      let i = state.informants.findIndex(function (i) {
        return i.name === name && i.price <= state.information
      })
      if (i !== -1) {
        console.log(name)
        state.information -= state.informants[i].price
        state.informants[i].count += 1
        state.informants[i].price = Math.floor(state.informants[i].price * state.informants[i].priceMultiplier)
      }
    },

    // Resets the game
    reset: (state) => {
      const newState = initialState()
      Object.keys(newState).forEach(k => {
        state[k] = newState[k]
      })
    },

    // Game tick function
    tick: (state) => {
      // Add information
      let information = state.informants.map(
        i => i.count * i.information
      ).reduce((a, v) => a + v)
      state.information += information

      // Get any event changes
      let event = getQuestEvent(state.quest.id, state.quest.event, state.information)
      if (event !== null) {
        state.messages.unshift({
          ...event.message,
          ...{status: MESSAGE_STATUS.UNREAD}
        })
        state.quest.event += 1

        if (state.messages.length > MAX_MESSAGES) {
          state.messages.pop()
        }
      }

      // Check quest changes
      let quest = getQuest(state.quest.id, state.quest.event, state.information)
      if (quest !== null) {
        // NOTE: Quest XP is given for unlocking a quest, because I'm lazy and bad at design
        state.player.experience += parseInt(quest.experience)
        state.quest.id += 1
        state.quest.event = 0
      }
    }
  },
  state: initialState()
})

// Save store to localstorage
store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})
