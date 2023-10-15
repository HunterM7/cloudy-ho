import {
  Icon01d,
  Icon01n,
  Icon02d,
  Icon02n,
  Icon03d,
  Icon03n,
  Icon04d,
  Icon04n,
  Icon09d,
  Icon09n,
  Icon10d,
  Icon10n,
  Icon11d,
  Icon11n,
  Icon13d,
  Icon13n,
} from 'assets/images'

export const WeatherConditions = {
  clear: {
    title: 'ясно',
    image: {
      day: Icon01d,
      night: Icon01n,
    },
  },
  partlyCloudy: {
    title: 'малооблачно',
    image: {
      day: Icon02d,
      night: Icon02n,
    },
  },
  cloudy: {
    title: 'облачно с прояснениями',
    image: {
      day: Icon03d,
      night: Icon03n,
    },
  },
  overcast: {
    title: 'пасмурно',
    image: {
      day: Icon04d,
      night: Icon04n,
    },
  },
  lightRain: {
    title: 'небольшой дождь',
    image: {
      day: Icon09d,
      night: Icon09n,
    },
  },
  rain: {
    title: 'дождь',
    image: {
      day: Icon10d,
      night: Icon10n,
    },
  },
  // heavyRain: {
  //   title: 'сильный дождь',
  //   image: {
  //     day: Icon11d,
  //     night: Icon11n,
  //   },
  // },
  thunderstorm: {
    title: 'гроза',
    image: {
      day: Icon11d,
      night: Icon11n,
    },
  },
  // showers: {
  //   title: 'ливень',
  //   image: {
  //     day: Icon01d,
  //     night: Icon01n,
  //   },
  // },
  // wetSnow: {
  //   title: 'дождь со снегом',
  //   image: {
  //     day: Icon01d,
  //     night: Icon01n,
  //   },
  // },
  // lightSnow: {
  //   title: 'небольшой снег',
  //   image: {
  //     day: Icon01d,
  //     night: Icon01n,
  //   },
  // },
  snow: {
    title: 'снег',
    image: {
      day: Icon13d,
      night: Icon13n,
    },
  },
  // snowShowers: {
  //   title: 'снегопад',
  //   image: {
  //     day: Icon01d,
  //     night: Icon01n,
  //   },
  // },
  // hail: {
  //   title: 'град',
  //   image: {
  //     day: Icon01d,
  //     night: Icon01n,
  //   },
  // },

  // thunderstormWithRain: {
  //   title: 'дождь с грозой',
  //   image: {
  //     day: Icon01d,
  //     night: Icon01n,
  //   },
  // },
  // thunderstormWithHail: {
  //   title: 'гроза с градом',
  //   image: {
  //     day: Icon01d,
  //     night: Icon01n,
  //   },
  // },
}
