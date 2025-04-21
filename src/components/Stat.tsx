interface StatProps {
  value: string
  label: string
  showDot?: boolean
}

function Stat({ value, label, showDot = false }: StatProps) {
  return (
    <div className="relative text-center lg:text-left">
      <div className="gradient-primary mb-2 text-3xl font-bold xl:text-4xl">
        {value}
      </div>
      <div className="text-left text-xs tracking-wider text-gray-500">
        {label}
      </div>
      {showDot && (
        <div className="bg-flamingo-light absolute top-1/2 hidden h-4 w-4 translate-y-2 transform rounded-full md:-right-12 md:block lg:-right-5" />
      )}
    </div>
  )
}

export { Stat }
