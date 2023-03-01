// stores.ts
import { writable } from 'svelte/store'
import type { ToggleType } from './types/toggle.type'

export const alert = writable<string>('Welcome to the To-Do list app!')

export const toggle = writable<ToggleType>({
  on: false,
  text: 'This component updates a value in the store.'
})