import { FC, HTMLAttributes } from 'react'
import { AirRounded as AirRoundedIcon } from '@mui/icons-material'
import cn from 'classnames'

// Components 'n UI
import { Badge } from 'ui'

// Nested component
import { AirCardInfo, IAirCardInfoProps } from './AirCardInfo/AirCardInfo'

// Styles
import styles from './AirCard.module.scss'

export interface AirCardProps extends HTMLAttributes<HTMLDivElement> {
  //
}

export const AirCard: FC<AirCardProps> = ({ className, ...rest }) => {
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
    <div className={cn(styles.card, className)} {...rest}>
      <h3 className={styles.heading}>Air Quality Index</h3>

      <Badge
        type="good"
        title="Air quality condition"
        className={styles.badge}
      />

      <div className={styles.data}>
        <AirRoundedIcon sx={{ fontSize: '4.8rem' }} />

        <ul className={styles.data__list}>
          {airData.map((props) => (
            <AirCardInfo component="li" {...props} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AirCard
