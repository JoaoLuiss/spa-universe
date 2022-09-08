import { page } from './elements.js'

export function Scenario() {
  function homeBackground() {
    page.style.backgroundImage = 'url(/assets/mountains-universe-1.svg)'
  }

  function theUniverseBackground() {
    page.style.backgroundImage = 'url(/assets/mountains-universe-2.svg)'
  }

  function explorationBackground() {
    page.style.backgroundImage = 'url(/assets/mountains-universe-3.svg)'
  }

  return { homeBackground, theUniverseBackground, explorationBackground }
}
