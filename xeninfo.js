/* Weather */

var weather = {
  // returns an object with address info. geocoded address of the weather update's location. might only be accurate on iOS 11
  address: {
    // the house number + street this location corresponds to
    street: '',
    
    // the local area the location is within
    neighbourhood: '',
    
    // the city the location is within. e.g., London, New York, etc...
    city: '',
    
    // the postal code the location is within. e.g., 95014, NG1 7AA, ...
    zipCode: '',
    
    // the county the location is within. e.g., Nottinghamshire, Santa Clara ...
    county: '',
    
    // current state the location is within. e.g., England (for UK users), California, ...
    state: '',
    
    // country the location is in. e.g., United States, Germany, ...
    country: '',
    
    // country the location is within as an ISO code. e.g., US, DE, UK, ...
    countryISOCode: '',
  },
  
  // formatted sunset time. e.g., 17:08 PM
  sunsetTimeFormatted: '',
  
  // formatted sunset time. e.g., 07:16 AM
  sunriseTimeFormatted: '',
  
  // info about the current city
  city: '',
  
  // info about the current temperature
  temperature: '',
  
  // Returns current low
  low: '',
  
  // Returns current high
  high: '',
  
  // info about the current feels like temperature
  feelsLike: '',
  
  // info about the current condition
  condition: '',
  
  // A detailed string about the current weather conditions
  naturalCondition: '',
  
  // This is an object that needs to be parsed to return upcoming forecast. JSON.parse(weather.dayForecasts);
  dayForecasts: '',
  
  // This is an object that needs to be parsed to return upcoming hourly forecast. JSON.parse(weather.hourlyForecasts);
  hourlyForecasts: '',
  
  // Returns latitude and longitude
  latlong: '',
  
  // returns true or false
  celsius: true,
  
  // Returns a number for condition. This can be used for icons or converting to text.
  conditionCode: '',
  
  // Returns the last time weather was updated.
  updateTimeString: '',
  
  // Returns current humidity.
  humidity: '',
  
  // Returns current dewpoint.
  dewPoint: '',
  
  // Returns current wind chill.
  windChill: '',
  
  // Returns wind direction in degrees
  windDirection: '',
  
  // Returns current wind speed.
  windSpeed: '',
  
  // Returns current visibility.
  visibility: '',
  
  // Returns sunset time
  sunsetTime: '',
  
  // Returns precipitation in last 24hrs
  precipitation24hr: '',
  
  // Returns heatIndex
  heatIndex: '',
  
  // Returns moonPhase
  moonPhase: '',
  
  // Returns pressure
  pressure: '',
  
  // Returns sunrise time
  sunriseTime: '',
  
  // Returns current chance of rain
  chanceofrain: '',
};

/* Statusbar */

// Returns amount of signal bars
var signalBars = '';

// Returns operator name
var signalName = '';

// Returns wifi strength
var wifiStrength = '';

// Returns amount of wifi bars
var wifiBars = '';

// Returns current wifi name
var wifiName = '';

// Returns true if bluetooth is enabled
var bluetooth = true;

/* Battery Information */

// Returns current percent
var batteryPercent = '';

// Returns true if batterys is charging
var batteryCharging = true;

// Returns free ram
var ramFree = '';

// Returns current ram used
var ramUsed = '';

// Returns available ram
var ramAvailable = '';

// Returns physical ram
var ramPhysical = '';

/* Alarm Information
 * When using an alarm object you need to check if it exists. If it doesn't exist return an empty string.
 */

// This object is an array of alarm entries, each with the following data
var alarms = [
  {
    // title of the alarm
    title: '',
  
    // the text content of the alarm, either 'Alarm' (needs translating) or user-set in Clock app.
    body: '',
  
    // the next fire date of the alarm (either the first fire time, or next one after snoozing), as a UNIX timestamp
    nextFireDateTimestamp: '',
  
    // The above, but parsed to e.g., 10:14am
    nextFireDateTimeParsed: '',
  
    // The above, but parsed to e.g., Tuesday
    nextFireDateDayParsed: '',
  
    // Returns true if this alarm allows snoozing
    allowSnooze: '',
  
    // Returns true if this alarm is rescheduled due to the user hitting snooze
    repeatingFromSnoozed: '',
  }
];

// Returns alarm time
var alarmString = '';

// Returns number for the day the alarm is set for
var alarmDay = '';

// Returns the hour for the alarm
var alarmHour = '';

// Returns the minute for the alarm (may have to append a 0 if less than 10)
var alarmMinute = '';


/* System Information */

// Returns name set in General/About
var deviceName = '';

// Returns the type of device Example: (iPhone X)
var deviceType = '';

// Returns firmware version
var systemVersion = '';

// Returns true if user has 24hr selected in General/Date + Time
var twentyfourhour = true;


/* Music Information
 * Artwork image is located at /var/mobile/Documents/Artwork.jpg
 */

// Returns current artist
var artist = '';

// Returns current album
var album = '';

// Returns current title
var title = '';

// Returns true if music is playing
var isplaying = true;


/* Event Information */

// events is an object that contains multiple entries based on how many events
var events = [
  {
    // Title of the calendar entry
    title: '',
  
    // User-set location of the calendar entry
    location: '',
  
    // Returns true if the event is set to cover the entire day
    isAllDay: true,
  
    // Formatted calendar date, e.g. 11/23/18, 23/11/18 (UK style), etc
    date: '',
  
    // Start time of the calendar event, as a UNIX timestamp
    startTimeTimestamp: '',
  
    // End time of the calendar event, as a UNIX timestamp
    endTimeTimestamp: '',
  
    // The title of the calendar this event is found on
    associatedCalendarName: '',
  
    // The in-app colour of the calendar this event is found on, as a hex code (includes the #)
    associatedCalendarHexColor: '',
  }
];


/* Reminder Information */

// reminders is an object that contains multiple entries based on how many reminders
var reminders = [
  {
    // Title of the reminder
    title: '',
  
    // Formatted reminder fire date, e.g. 11/23/18, 23/11/18 (UK style), etc
    dueDate: '',
  
    // Reminder fire date as a UNIX timestamp
    dueDateTimestamp: '',
  
    // The priority value of the reminder. Maps to the !/!!/!!! selector in the Reminders app
    priority: '',
  }
];


/* Functions */

// Play/Pause music
// window.location = 'xeninfo:playpause';

// Next track music
// window.location = 'xeninfo:nexttrack';

// Previous track music
// window.location = 'xeninfo:prevtrack';

// Open app
// window.location = 'xeninfo:openapp:com.apple.mobilemail';

// Open's Safari to url
// window.location = 'xeninfo:openurl:google.com';

// Opens SB spotlight
// window.location = 'xeninfo:openspotlight';

// Writes to console for debugging
// window.location = 'xeninfo:consolelog:message';