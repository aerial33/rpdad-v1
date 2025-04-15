//todo make Team Image a component andd make it a prop optional
import Balancer from "react-wrap-balancer"

import Image from "next/image"

import { DotPattern } from "@/components/DotPattern"
import { FadeLeft, FadeUp } from "@/components/motion/animations"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const soustitre =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate quidem natus."

export function HeroLogo({
  title,
  description = soustitre,
}: {
  title: string
  description: string
}) {
  return (
    <>
      <section className="bg-flamingo-lightest">
        <FadeLeft className="mx-auto flex max-w-7xl gap-6 py-8 md:pt-16">
          <div className="hidden grid-cols-2 grid-rows-2 gap-4 px-4 lg:grid">
            <DotPattern
              className="col-span-1 row-start-1"
              dotColor="bg-primary"
              dotSize="lg"
              rows={7}
              cols={5}
            />
            <DotPattern
              className="col-span-1 col-start-2 row-start-2"
              dotColor="bg-flamingo"
              rows={6}
              cols={6}
            />
          </div>
          <div className="flex flex-col items-start px-4 py-6 sm:py-8 lg:items-center lg:px-0">
            <Badge variant="secondary" className="mb-4 text-white uppercase">
              <span className="font-bold">Le RPDAD</span>
            </Badge>
            <h1 className="text-foreground mb-4 max-w-4xl text-4xl font-semibold text-balance lg:text-center lg:text-5xl lg:leading-tight">
              {title || "Le RPDAD"}
            </h1>
            <h3 className="text-muted-foreground">
              <Balancer>{description}</Balancer>
            </h3>
            <div className="!mt-8 flex items-center gap-2">
              <Button>Contactez-nous</Button>
            </div>
          </div>
          <div className="hidden grid-cols-2 grid-rows-2 gap-4 px-4 md:grid">
            <DotPattern
              className="col-span-1 col-start-1 row-start-2"
              dotColor="bg-primary"
              rows={6}
              cols={6}
            />
            <DotPattern
              className="col-span-1 col-start-2 row-start-1"
              dotColor="bg-picton-blue-light"
              dotSize="lg"
              rows={7}
              cols={5}
            />
          </div>
        </FadeLeft>

        {/* Team Image */}
        <FadeUp className="relative h-80 w-full md:h-[500px]">
          <Image
            src="/img/rpdad-inclusion-1.png"
            alt="Diverse team members smiling together"
            fill
            priority
            className="object-cover object-top"
          />
        </FadeUp>
        <div className="before:to-primary-lightest before:border-flamingo-lightest relative border-0 bg-gradient-to-bl before:absolute before:top-[-4rem] before:right-0 before:z-0 before:block before:border-0 before:border-t-[4rem] before:border-r-[100vw] before:!border-y-transparent before:border-l-transparent before:bg-gradient-to-bl before:content-[''] after:absolute after:right-0 after:bottom-[-4rem] after:z-0 after:block after:border-0 after:border-r-[100vw] after:!border-y-transparent after:border-l-transparent after:bg-gradient-to-bl after:content-['']"></div>
      </section>
    </>
  )
}
