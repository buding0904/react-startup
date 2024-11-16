import { FC } from 'react'

const ICONS = import.meta.glob('../assets/icons/*', { eager: true })

export const Icon: FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  const mod = ICONS[`../assets/imgs/${name}.svg`] as any
  const Comp = mod.default.ReactComponent

  return <Comp className={className} />
}

const IMGS = import.meta.glob('../assets/imgs/*', { eager: true })

export const Img: FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  const src = (IMGS[`../assets/imgs/${name}.png`] as any).default

  return (
    <img
      src={src}
      className={className}
    />
  )
}
