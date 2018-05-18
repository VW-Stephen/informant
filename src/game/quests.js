import * as quests from '@/game/quest-data'

// List of all the quests in the game.
// NOTE: All quest XP is awarded at the BEGINNING of the quest
export const QUESTS = [
  quests.Q01,
  quests.Q02
]

// Returns a new quest if the user has enough information
export const getQuest = (questId, eventId, information) => {
  // If there are unresolved events left for the current quest, don't return a new quest
  if (QUESTS[questId] === undefined || QUESTS[questId].events[eventId] !== undefined) {
    return null
  }

  // No more quests? Sad days
  if (QUESTS[questId + 1] === undefined) {
    return null
  }

  return information >= QUESTS[questId].information ? QUESTS[questId + 1] : null
}

// Returns a new quest event if the given 'information' is high enough for the given quest
export const getQuestEvent = (questId, eventId, information) => {
  if (QUESTS[questId] === undefined || QUESTS[questId].events[eventId] === undefined) {
    return null
  }

  let event = QUESTS[questId].events[eventId]
  return information >= event.information ? event : null
}
