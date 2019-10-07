import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import Star from './Star'

function Stars({ count }) {

    const starsArray = [];

    for (let i = 0; i < count; i++) {
        starsArray.push(<Star />)
    }

    const starsIndex = starsArray.map(star => ({ id: shortid.generate(), item: star }))

    return (
        <> {count >= 1 && count <= 5 ?
            <ul className="card-body-stars u-clearfix">
                {starsIndex.map(star =>
                    <li key={star.id}>{star.item}</li>)}
            </ul> : null}
        </>
    )
}

Stars.propTypes = {
    count: PropTypes.number.isRequired
}

Stars.defaultProps = {
    count: 0
}

export default Stars

