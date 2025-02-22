'use client'
import React from 'react'
import clz from 'classnames'
import { Button, ButtonVariant } from './BaseButton'

interface NavMenuButtonProps {
  to?: string
  label: string | JSX.Element
  variant?: ButtonVariant
  onClick?: () => void
}

export default function NavMenuButton ({ label, to, variant, onClick }: NavMenuButtonProps): JSX.Element {
  return (
    <Button href={(onClick != null) ? undefined : to ?? '#'} onClick={onClick} label={label} variant={variant ?? ButtonVariant.TEXT_CONTRAST} />
  )
}

export interface NavMenuItemProps {
  to?: string
  label: string | JSX.Element
  type?: string
  onClick?: () => void
}

export const NavMenuItem: React.FC<NavMenuItemProps> = ({ label, to, type, onClick }) => {
  return (
    <a
      href={(onClick != null) ? undefined : to ?? '#'}
      onClick={onClick}
      className={clz('text-sm hover:underline tracking-tight', type)}
    >{label}
    </a>
  )
}
