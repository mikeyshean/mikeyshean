import Image from 'next/image'

export function SuperImage({src, caption=false, alt="", center=false, squared=false, priority=false}) {
  return (
    <div className={`${squared ? "not-prose" : ""} ${center ? "flex justify-center" : ""}`}>
      <figure>
        <Image src={src} alt={alt} priority={priority} />
        <div className="flex justify-center">
          {
            caption && (
              <figcaption>{caption}</figcaption>
            )
          }
        </div>
      </figure>
    </div>
  )
}