// ** Toolkit imports
import { combineReducers, configureStore } from '@reduxjs/toolkit'

// ** Reducers
import chatReducer from 'src/store/apps/chat'
import userReducer from 'src/store/apps/user'
import emailReducer from 'src/store/apps/email'
import invoiceReducer from 'src/store/apps/invoice'
import calendarReducer from 'src/store/apps/calendar'
import permissionReducer from 'src/store/apps/permission'
import ticketsReducer from 'src/store/apps/tickets'
import helpDeskReducer from 'src/store/apps/help-desk'
import permissionsReducer from 'src/store/apps/permissions'

const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
  email: emailReducer,
  invoice: invoiceReducer,
  calendar: calendarReducer,
  permission: permissionReducer,
  permissions: permissionsReducer,
  tickets: ticketsReducer,
  helpdesk: helpDeskReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
