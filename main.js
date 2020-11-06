import tracker from 'simple-tracker'
import fp from '@fingerprintjs/fingerprintjs'
import isIncognito from 'is-incognito-mode'
import BotDetector from './bot-detector'
import { screenWidth, screenHeight } from './screen-dimensions'

window.initializeTrackerClientContext = async callback => {
    const fpAgent = await fp.load()
    const result = await fpAgent.get()
    const visitorId = result.visitorId
    
    let isPrivate
    try {
        isPrivate = await isIncognito()
    } catch {
        isPrivate = undefined
    }
    
    /* TODO: promisify bot detection */
    let isBot
    new BotDetector({
        timeout: 1000,
        callback: res => isBot = res.isBot
    })
    
    tracker.clientContext = {
        ...tracker.clientContext,
        visitorId,
        isPrivate,
        screenWidth,
        screenHeight
    }
    
    if (typeof callback === 'function') callback()
}
