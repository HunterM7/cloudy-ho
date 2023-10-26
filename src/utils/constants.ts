// Types 'n utils
import { TWeatherConditionCodes } from 'types'

// Assets
import {
  Icon01d,
  Icon01n,
  Icon02d,
  Icon02n,
  // Icon03d,
  // Icon03n,
  // Icon04d,
  // Icon04n,
  Icon09d,
  Icon09n,
  Icon10d,
  Icon10n,
  Icon11d,
  Icon11n,
  Icon13d,
  Icon13n,
  Icon50d,
  Icon50n,
} from 'assets/images'

type IWeatherConditions = Record<
  TWeatherConditionCodes,
  {
    title: string
    image: {
      day: string
      night: string
    }
  }
>

export const WeatherConditions: IWeatherConditions = {
  // Group - Thunderstorm
  Thunderstorm: {
    title: 'Гроза',
    image: {
      day: Icon11d,
      night: Icon11n,
    },
  },

  // Group - Drizzle
  Drizzle: {
    title: 'Небольшой дождь',
    image: {
      day: Icon09d,
      night: Icon09n,
    },
  },

  // Group - Rain
  Rain: {
    title: 'Дождь',
    image: {
      day: Icon10d,
      night: Icon10n,
    },
  },

  // Group - Snow
  Snow: {
    title: 'Снег',
    image: {
      day: Icon13d,
      night: Icon13n,
    },
  },

  // Group - Atmosphere
  Mist: {
    title: 'ясно',
    image: {
      day: Icon50d,
      night: Icon50n,
    },
  },

  Smoke: {
    title: 'ясно',
    image: {
      day: Icon50d,
      night: Icon50n,
    },
  },

  Haze: {
    title: 'ясно',
    image: {
      day: Icon50d,
      night: Icon50n,
    },
  },

  Dust: {
    title: 'ясно',
    image: {
      day: Icon50d,
      night: Icon50n,
    },
  },

  Fog: {
    title: 'ясно',
    image: {
      day: Icon50d,
      night: Icon50n,
    },
  },

  Sand: {
    title: 'ясно',
    image: {
      day: Icon50d,
      night: Icon50n,
    },
  },

  Ash: {
    title: 'ясно',
    image: {
      day: Icon50d,
      night: Icon50n,
    },
  },

  Squall: {
    title: 'ясно',
    image: {
      day: Icon50d,
      night: Icon50n,
    },
  },

  Tornado: {
    title: 'ясно',
    image: {
      day: Icon50d,
      night: Icon50n,
    },
  },

  // Group - Clear
  Clear: {
    title: 'Ясно',
    image: {
      day: Icon01d,
      night: Icon01n,
    },
  },

  // Group - Clouds
  Clouds: {
    title: 'Облачно',
    image: {
      day: Icon02d,
      night: Icon02n,
    },
  },
}

export const countries = [
  'ab',
  'af',
  'ak',
  'am',
  'an',
  'ar',
  'ascii',
  'av',
  'ay',
  'az',
  'ba',
  'be',
  'bg',
  'bi',
  'bn',
  'bo',
  'br',
  'bs',
  'ca',
  'ce',
  'ch',
  'co',
  'cs',
  'cu',
  'cv',
  'cy',
  'da',
  'de',
  'dv',
  'dz',
  'el',
  'en',
  'eo',
  'es',
  'et',
  'eu',
  'fa',
  'fi',
  'fo',
  'fr',
  'fy',
  'ga',
  'gd',
  'gl',
  'gn',
  'gv',
  'he',
  'hi',
  'hr',
  'ht',
  'hu',
  'hy',
  'ia',
  'id',
  'ie',
  'io',
  'is',
  'it',
  'iu',
  'ja',
  'jv',
  'ka',
  'kg',
  'kk',
  'kl',
  'kn',
  'ko',
  'ku',
  'kv',
  'kw',
  'ky',
  'la',
  'lg',
  'li',
  'ln',
  'lt',
  'lv',
  'mg',
  'mi',
  'mk',
  'ml',
  'mn',
  'mr',
  'ms',
  'mt',
  'my',
  'na',
  'nb',
  'nl',
  'nn',
  'no',
  'oc',
  'os',
  'pl',
  'ps',
  'pt',
  'qu',
  'ro',
  'ru',
  'sc',
  'se',
  'sg',
  'sh',
  'sk',
  'sl',
  'sm',
  'so',
  'sq',
  'sr',
  'ss',
  'st',
  'su',
  'sv',
  'sw',
  'ta',
  'te',
  'tg',
  'th',
  'tk',
  'tl',
  'tr',
  'tt',
  'ty',
  'ug',
  'uk',
  'ur',
  'uz',
  'vi',
  'vo',
  'wa',
  'wo',
  'yi',
  'yo',
  'za',
  'zh',
  'zu',
] as const
