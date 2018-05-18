import { CAMP, COMRADE, CONTACT, PARTY } from '@/constants'

export const Q01 = {
  name: 'Information 101',
  description: `A small insurgency is on the rise, you must find out who is behind
  it and report your findings to the head office.`,
  experience: 0,
  information: 20000,
  events: [
    {
      information: 0,
      message: {
        title: `Welcome to ${PARTY}, New Informant`,
        message: `Welcome to ${PARTY}, ${COMRADE}! You are tasked with uncovering information about your fellow citizens,
          and reporting back to ${PARTY} when you inevitably find out they are guilty of wrongthink.<br/><br/>We have
          provided you with an informant of your own to get started, but you must continue to cultivate your network of
          spies and informants on your own.<br/><br/>Your first mission: A small insurgency is on the rise, use your
          network to accumulate 20,000 information to prove to ${PARTY} that you're useful.<br/><br/><i>~ ${CONTACT}</i>`
      }
    },
    {
      information: 2000,
      message: {
        title: `Call me ${CONTACT}`,
        message: `By the way, my name is ${CONTACT}. I'm your contact within ${PARTY}. All your missions will come from me,
        and all the information you gather will be sent to me. Do not attempt to contact any other members of ${PARTY}, and tell me
        if any other members of ${PARTY} attempt to contact you.<br/><br/>If you stick by me you and your family should be fine, but
        cross me and I'll make sure information with YOUR name on it ends up on ${PARTY}'s desk, ${COMRADE}.<br/><br/>
        <i>~ ${CONTACT}</i>`
      }
    },
    {
      information: 10000,
      message: {
        title: `RE: Insurgency`,
        message: `From the information you've gathered so far, ${PARTY} has discovered that the leader of this uprising
          is a local shopkeep, and has around a dozen followers. Keep your informants active, we'll be in touch soon.
          <br/><br/><i>~ ${CONTACT}</i>`
      }
    },
    {
      information: 20000,
      message: {
        title: `Good Job ${COMRADE}`,
        message: `The shopkeeper has been detained in a ${CAMP}, good work comrade. We've picked up some of his followers, but
        there's one we could use your help with. It turns out your nextdoor neighbor, Ms. Jackson, was active in the insurgency.
        Collect 100,000 information on her and her family, and report back.<br/><br/><i>~ ${CONTACT}</i>`
      }
    }
  ]
}
