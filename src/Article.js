import React from 'react'
import moment from 'moment';

const Article = ({title, date, snippet}) => {
  return (
    <article className="article">
    <h1>{title}</h1>
    <p className="time">{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</p>
    <p className="description">{snippet}</p>
  </article>
  )
}

export default Article