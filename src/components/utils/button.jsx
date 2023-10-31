import classNames from 'classnames'
import { Loading } from './loading'

const sizeClasses = {
  tiny: 'btn-xs',
  small: 'btn-sm',
  normal: '',
  large: 'btn-lg',
}

const shapeClasses = {
  full: 'btn-full',
  round: 'btn-round',
  square: 'btn-square',
  curve: 'btn-curve',
  default: '',
}

export const Button = ({
  variant,
  size = 'normal',
  isDisabled = false,
  isOutline = false,
  shape = 'default',
  isLoading = false,
  isLink = false,
  mobileFull = false,
  loadingType = 'spinner',
  loadingText = 'در حال ارسال درخواست',
  type = 'button',
  children,
  className,
  animatedIcon = false,
  ...props
}) => {
  const classes = classNames(
    'btn',
    className,
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size },
    { 'btn-link': isLink },
    { 'btn-mobile-full': mobileFull },
    { 'btn-outline': isOutline },
    { [`${shapeClasses[shape]}`]: shape },
    { 'animated-icon': animatedIcon },
    { 'pointer-events-none opacity-80': isLoading }
  )

  return (
    <button type={type} disabled={isDisabled} className={classes} {...props}>
      {isLoading && <Loading size='tiny' type={loadingType} />}
      {isLoading ? loadingText : children}
    </button>
  )
}
