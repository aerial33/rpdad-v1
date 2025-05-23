import { Check } from "lucide-react"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

type FeatureProps = {
  title: string
  description: string
  image?: {
    src: string
    alt: string
  }
  badge?: string
  button?: {
    label: string
    url: string
  }
  checkList?: {
    title: string
    description: string
  }[]
  imagePosition?: "left" | "right"
  className?: string
}

function FeatureThird({
  title,
  description,
  image,
  badge,
  button,
  checkList,
  imagePosition = "right",
  className,
}: FeatureProps) {
  return (
    <div className="w-full py-16 lg:py-20">
      <div className="container">
        <div
          className={`container mx-auto grid grid-cols-1 gap-8 rounded-lg p-8 lg:grid-cols-2 ${className}`}
        >
          <div
            className={`order-2 flex flex-col gap-10 ${imagePosition === "left" ? "lg:order-1" : ""}`}
          >
            <div className="flex flex-col gap-4">
              {/* <div>
                <Badge variant="outline">{badge}</Badge>
              </div> */}
              <div className="flex flex-col gap-2">
                <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter lg:text-5xl">
                  {title}
                </h2>
                <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight text-balance">
                  {description}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:pl-6">
              {checkList?.map((item, index) => (
                <div key={index} className="flex flex-row items-start gap-4">
                  <Check className="text-primary mt-2 h-[16px] w-[16px]" />
                  <div className="flex flex-col gap-1">
                    <p>{item.title}</p>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-fit" asChild>
              <Link href={button?.url || ""}>{button?.label}</Link>
            </Button>
          </div>
          <div
            className={`max-h-auto order-1 aspect-square w-full self-end overflow-hidden rounded-md ${
              imagePosition === "left" ? "lg:order-2" : ""
            }`}
          >
            <Image
              src={image?.src || ""}
              alt={image?.alt || ""}
              width={500}
              height={500}
              className="overflow-hidden object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { FeatureThird }
