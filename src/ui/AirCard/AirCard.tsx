import { FC, HTMLAttributes } from 'react'
import { AirRounded as AirRoundedIcon } from '@mui/icons-material'
import cn from 'classnames'

// Types 'n utils
import { TAirQualityIndex } from 'types'
import { toFixed } from 'utils'

// Components 'n UI
import { Badge } from 'ui'

// Nested component
import { AirCardInfo, IAirCardInfoProps } from './AirCardInfo/AirCardInfo'

// Styles
import styles from './AirCard.module.scss'

export interface IAirInfo {
  pm2_5: number
  so2: number
  no2: number
  o3: number
  aqi: TAirQualityIndex
}

export interface AirCardProps extends HTMLAttributes<HTMLDivElement> {
  airInfo: IAirInfo
}

export const AirCard: FC<AirCardProps> = ({ airInfo, className, ...rest }) => {
  const { pm2_5, so2, no2, o3, aqi } = airInfo

  const airData: IAirCardInfoProps[] = [
    {
      heading: (
        <>
          PM<sub>2.5</sub>
        </>
      ),
      value: toFixed(pm2_5, 1),
    },
    {
      heading: (
        <>
          SO<sub>2</sub>
        </>
      ),
      value: toFixed(so2, 1),
    },
    {
      heading: (
        <>
          NO<sub>2</sub>
        </>
      ),
      value: toFixed(no2, 1),
    },
    {
      heading: (
        <>
          O<sub>3</sub>
        </>
      ),
      value: toFixed(o3, 1),
    },
  ]

  return (
    <div className={cn(styles.card, className)} {...rest}>
      <h3 className={styles.heading}>Air Quality Index</h3>

      <Badge index={aqi} className={styles.badge} />

      <div className={styles.data}>
        <AirRoundedIcon className={styles.data__icon} />

        <ul className={styles.data__list}>
          {airData.map((props, index) => (
            <AirCardInfo key={index} component="li" {...props} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AirCard
