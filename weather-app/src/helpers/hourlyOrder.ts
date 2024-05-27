interface TimeOfTheDayInterface {
  [key: string]: string;
}

const timeOfTheDay: TimeOfTheDayInterface = {
  '06:00': 'morning',
  '07:00': 'morning',
  '08:00': 'morning',
  '09:00': 'morning',
  '10:00': 'morning',
  '11:00': 'morning',
  '12:00': 'day',
  '13:00': 'day',
  '14:00': 'day',
  '15:00': 'day',
  '16:00': 'day',
  '17:00': 'day',
  '18:00': 'evening',
  '19:00': 'evening',
  '20:00': 'evening',
  '21:00': 'evening',
  '22:00': 'evening',
  '23:00': 'evening',
  '00:00': 'night',
  '01:00': 'night',
  '02:00': 'night',
  '03:00': 'night',
  '04:00': 'night',
  '05:00': 'night',
};

export const hourlyOrder = (hour: string) => timeOfTheDay[hour];
