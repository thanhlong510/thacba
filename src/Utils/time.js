import dayjs from 'dayjs';

const ONE_SEC = 1e3;
const ONE_MIN = 60e3;
const ONE_HOUR = 3600e3;
const ONE_DAY = 24 * ONE_HOUR;

const StartOf = {
  Day: (time = dayjs()) => dayjs(time).startOf('day').valueOf(),
  Month: (time = dayjs()) => dayjs(time).startOf('month').valueOf(),
}

const EndOf = {
  Day: (time = dayjs()) => dayjs(time).endOf('day').valueOf(),
  Month: (time = dayjs()) => dayjs(time).endOf('month').valueOf(),
}

const Add = {
  Hour: (hours, time = dayjs()) => dayjs(time).add(hours, 'hours').valueOf(),
  Day: (days, time = dayjs()) => dayjs(time).add(days, 'day').valueOf(),
  Month: (month, time = dayjs()) => dayjs(time).add(month, 'month').valueOf()
}

const Subtract = {
  Hour: (hours, time = dayjs()) => dayjs(time).subtract(hours, 'hours').valueOf(),
  Day: (days, time = dayjs()) => dayjs(time).subtract(days, 'day').valueOf(),
  Month: (month, time = dayjs()) => dayjs(time).subtract(month, 'month').valueOf()
}

const FormatVNTime = {
  DatePicker: (time = dayjs()) => dayjs(time).format('DD/MM/YYYY'),
  DataTable: (time = dayjs()) => dayjs(time).format('hh:mm:ss, DD/MM/YYYY'),
  DashBoard: (time = dayjs()) => dayjs(time).format('hh:mm, DD/MM/YYYY'),
};

export { ONE_SEC, ONE_MIN, ONE_DAY, ONE_HOUR, StartOf, EndOf, Add, Subtract, FormatVNTime }