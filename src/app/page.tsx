import { RpdadLogo } from "@/components/LogoRpdad/logo"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4">
      <div>
        <RpdadLogo />
      </div>
      <h1 className="gradient-primary text-6xl font-bold">RPDAD</h1>
      <p className="text-lg">
        RPDAD is a project that allows you{" "}
        <span className="text-primary">to create</span> and manage your own
        RPDAD.
      </p>
      <div className="flex gap-4">
        <Button>Get Started</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary" className="text-white">
          Secondary
        </Button>
      </div>
    </main>
  )
}
