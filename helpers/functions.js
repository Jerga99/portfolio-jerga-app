
import moment from 'moment';

export const formatDate = (date, dateFormat = 'LL') =>
  date && moment(date).format(dateFormat)
