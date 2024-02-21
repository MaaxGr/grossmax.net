import {reactive} from "vue";

export const notificationStore: {messages: Notification[]} = reactive({
    messages: []
})

export function sendNotification(notification: Notification) {
    notificationStore.messages.push(notification)
    setTimeout(() => {
        notificationStore.messages.shift()
    }, 2000)

}

export interface Notification {
    message: string
    type: string
}