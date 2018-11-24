import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'

const ExpenseList = (props) => (
    <div>
        <h2>Expenses</h2>
        {
            props.expenses.map(
                expense => <ExpenseListItem key={expense.id} {...expense}/>
            )
        }
    </div>
)

const mapStateToProps = (state) => ({
    expenses: state.expenses
})

export default connect(mapStateToProps)(ExpenseList)