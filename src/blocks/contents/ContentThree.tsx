import { Cpu, Zap } from "lucide-react"

import Image from "next/image"

export function ContentThree() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-2xl text-4xl font-semibold lg:text-5xl">
          The Lyra ecosystem brings together our models.
        </h2>
        <div className="relative">
          <div className="relative z-10 space-y-4 md:w-1/2">
            <p className="feature-paragraph">
              Lyra is evolving to be more than just the models.{" "}
              <span className="text-title font-medium">
                It supports an entire ecosystem
              </span>{" "}
              — from products innovate.
            </p>
            <p>
              It supports an entire ecosystem — from products to the APIs and
              platforms helping developers and businesses innovate
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className="text-sm font-medium">Faaast</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  It supports an entire helping developers and innovate.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="text-sm font-medium">Powerful</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  It supports an entire helping developers and businesses.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 h-fit md:absolute md:inset-x-0 md:-inset-y-12 md:mt-0">
            <div
              aria-hidden
              className="to-flamingo-lightest absolute inset-0 z-1 hidden bg-linear-to-l from-transparent to-55% md:block"
            ></div>
            <div className="border-border/50 relative min-h-[400px] rounded-2xl border border-dotted p-2">
              <Image
                src="/about-9.jpg"
                className="rounded-[12px] object-cover object-top shadow dark:hidden"
                alt="payments illustration light"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
