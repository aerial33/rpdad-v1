import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">RPDAD</h1>
      <p className="text-lg">
        RPDAD is a project that allows you to create and manage your own RPDAD.
      </p>
      <div className="flex gap-4">
        <Button>Get Started</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary" className="text-white">
          Secondary
        </Button>
      </div>
    </div>
  )
}
