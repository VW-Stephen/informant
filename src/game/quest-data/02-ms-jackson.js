import { COMRADE, CONTACT, PARTY } from '@/constants'

export const Q02 = {
  name: `Ms. Jackson, Oooh`,
  description: `Your neighbor was part of the shopkeep's insurgency, it's time to start peeping into windows.`,
  experience: 100,
  information: 100000,
  events: [
    {
      information: 50000,
      message: {
        title: `Don't feel sorry for Ms. Jackson`,
        message: `Your initial efforts to gather information on Ms. Jackson have fallen short, ${COMRADE}. It makes me question
        your loyalty to ${PARTY}...<br/><br/>Improve your informant network, get us the information we need.<br/><br/>
        <i>~ ${CONTACT}</i>`
      }
    }
  ]
}
