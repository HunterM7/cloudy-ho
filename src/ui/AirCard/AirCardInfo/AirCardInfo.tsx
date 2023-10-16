import { FC, ElementType, HTMLAttributes } from 'react'

// Styles
import styles from './AirCardInfo.module.scss'

export interface IAirCardInfoProps extends HTMLAttributes<HTMLOrSVGElement> {
  heading: string | React.ReactElement
  value: string | number
  component?: ElementType
}

export const AirCardInfo: FC<IAirCardInfoProps> = ({
  component: Tag = 'div',
  heading,
  value,
  ...rest
}) => {
  return (
    <Tag className={styles.wrapper} {...rest}>
      <p className={styles.heading}>{heading}</p>
      <p className={styles.value}>{value}</p>
    </Tag>
  )
}

export default AirCardInfo
