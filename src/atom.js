import {atom, atomFamily, selector} from 'recoil'
import { TODO } from './Todo'

// export const networkAtom = atom({
//     key:"networkatom",
//     default:100
// })

// export const jobAtom = atom({
//     key:"jobatom",
//     default:130
// })

// export const messageAtom = atom({
//     key:"messageatom",
//     default:10
// })

// export const notificationAtom = atom({
//     key:"notificationatom",
//     default:13
// })

// export const totalNotificationSelector = selector({
//     key:"totalnotificationSelector",
//     get:({get})=>{
//         const networkCount = get(networkAtom)
//         const messageCount = get(messageAtom)
//         const jobCount = get(jobAtom)
//         const notificationCount = get(notificationAtom)
//         return networkCount + messageCount + jobCount + notificationCount
//     }
// })


// Asynchrounous data queries 
// export const notifications = atom({
//     key: 'notifications',
//     default: selector({
//         key: 'notifications/default',
//         get: async () => {
//             const res = await axios.get('https://sum-server.100xdevs.com/notifications')
//             return res.data
//         },
//     }),
// })


// export const totalNotificationSelector = selector({ 
//      key:"totalNotificationSelector",
//         get:({get})=>{
//             const notifications = get(notifications)
//             return notifications.network + notifications.message + notifications.job + notifications.notification
//         }
//     })

export const TodoFamily = atomFamily({
    key:'TodoFamily',
    default: id => TODO.find(todo => todo.id === id)
})