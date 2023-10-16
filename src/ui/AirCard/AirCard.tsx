import { FC } from 'react'
import { AirRounded as AirRoundedIcon } from '@mui/icons-material'

// Components 'n UI
import { Badge } from 'ui'

// Nested component
import { AirCardInfo, IAirCardInfoProps } from './AirCardInfo/AirCardInfo'

// Styles
import styles from './AirCard.module.scss'

export const AirCard: FC = () => {
  const airData: IAirCardInfoProps[] = [
    {
      heading: (
        <>
          PM<sub>2.5</sub>
        </>
      ),
      value: '23.3',
    },
    {
      heading: (
        <>
          SO<sub>2</sub>
        </>
      ),
      value: 0.6,
    },
    {
      heading: (
        <>
          NO<sub>2</sub>
        </>
      ),
      value: 0.3,
    },
    {
      heading: (
        <>
          O<sub>3</sub>
        </>
      ),
      value: 75.1,
    },
  ]

  return (
    <div className={styles.card}>
      <h3 className={styles.heading}>Air Quality Index</h3>

      <div className={styles.data}>
        <AirRoundedIcon sx={{ fontSize: '4.8rem' }} />

        <ul className={styles.data__list}>
          {airData.map((props) => (
            <AirCardInfo component="li" {...props} />
          ))}
        </ul>
      </div>

      <Badge type="good" title="Air quality condition" />
    </div>
  )
}

export default AirCard
