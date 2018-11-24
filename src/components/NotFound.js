import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => (
    <div>
        <h3>Not Found!</h3>
        <p>404!</p>
        <Link to='/'>Back to Home &rarr;</Link>
    </div>
)

export default NotFound