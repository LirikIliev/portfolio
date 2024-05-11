const dateOptions = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
} as const;

export const dateFromString = (date: string) => {
  const getDate =
    date?.length > 0
      ? new Date(date)
          .toLocaleDateString('en-UK', dateOptions)
          ?.replace(',', '')
          ?.replace('at ', '')
          .trim()
          .split(' ')
      : '';
  const [day = '', dateOfMonth = '', month = '', hour = ''] =
    getDate && getDate?.length > 0 ? getDate : [];

  return {
    day,
    dateOfMonth,
    month,
    hour,
  };
};
