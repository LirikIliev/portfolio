// export const mainCodesBeforeTranslation = {
//   400001: 'Invalid Body Parameters',
//   400002: 'Invalid Query Parameters',
//   400003: 'Missing Required Body Parameters',
//   400004: 'Missing Required Query Parameters',
//   400005: 'Rule Violation',
//   400006: 'Missing Required Header Parameters',
//   400007: 'Invalid Path Parameters',
//   401001: 'Invalid Key',
//   402001: 'Insufficient Tokens',
//   403001: 'Access Denied',
//   403002: 'Account Limit',
//   403003: 'Forbidden Action',
//   404001: 'Not Found',
//   500001: 'Unknown',
//   503001: 'Unavailable',
// } as const;

interface ForecastErrorCodeInterface {
  [key: number]: string;
}

export const defaultErrorMessage =
  'The service is currently unavailable. Please try again later.';

export const forecastResponseErrorCodes: ForecastErrorCodeInterface = {
  400001:
    'The information you entered is incorrect. Please check your details and try again.',
  400002:
    'The search information is incorrect. Please correct it and try again.',
  400003:
    'There is some mistakes in your search. Please provide all necessary details and try again.',
  400004:
    'Some required information is missing from the search. Please provide all necessary details and try again.',
  400005:
    'Your request does not follow the rules. Please review the guidelines and try again.',
  400006:
    'Some required information is missing. Please include all necessary details for search and try again.',
  400007:
    'The information in the URL path is incorrect. Please correct it and try again.',
  401001: defaultErrorMessage,
  402001: defaultErrorMessage,
  403001: defaultErrorMessage,
  403002: defaultErrorMessage,
  403003: defaultErrorMessage,
  404001: 'The search could not executed. Please check the URL and try again.',
  500001: 'An unknown error occurred. Please try again later.',
  503001: defaultErrorMessage,
};
