import {parseISO, formatDistanceToNow} from 'date-fns'


const TimeAgo = ({timestamp}) => {

    let timeAgo = ''
    if(timestamp) {
      const date = parseISO(timestamp)
      const timePeriod = formatDistanceToNow(date)
      timeAgo = `${timePeriod} ago`

    }

    return (
     <span title={timestamp} style={{marginLeft:"20px"}}>
        <i>{timeAgo}</i>
     </span>

    )
}


export default TimeAgo