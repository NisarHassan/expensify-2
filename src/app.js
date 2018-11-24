import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {addExpense, editExpense, removeExpense} from './actions/expenses'
import getVisibleExpenses from './selectors/getVisibleExpenses'
import { setTextFilter, sortByDate, sortByAmount , setEndDate, setStartDate} from './actions/filters'
import 'normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({description: 'Water Bill', amount: 101}))
store.dispatch(addExpense({description: 'Gass Bill', amount: 23123}))


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)



const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'))