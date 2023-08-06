// genericStore.ts
import { defineStore } from 'pinia'

// Define the store
export const genericStore = defineStore('generic', {
  state: () => ({
    messageTitle: null as string | null,
    messageDesc: null as string | null,
    messageVisible: null as boolean | null,
    messageTextColor: null as string | null,
    messageBackgroundColor: null as string | null,
    pleaseFixFollowingErrorsVisible: null as boolean | null
  }),
  actions: {
    setMessage(
      title: string,
      desc: string,
      visible: boolean,
      textColor: string,
      backgroundColor: string
    ) {
      this.messageTitle = title
      this.messageDesc = desc
      this.messageVisible = visible
      this.messageTextColor = textColor
      this.messageBackgroundColor = backgroundColor
    }
  }
})
