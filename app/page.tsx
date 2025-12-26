 

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center space-y-6">

        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-white">
            Your Name
          </h1>
          <p className="text-sm text-neutral-400">
            Frontend / Creative Developer
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">

          <LinkButton href="https://webhjerte.com">
            WebHjerte — студія, кейси
          </LinkButton>

          <LinkButton href="https://github.com/username">
            GitHub — код і проєкти
          </LinkButton>

          <LinkButton href="https://your-portfolio.com">
            Portfolio / Projects
          </LinkButton>

          <LinkButton href="mailto:your@email.com">
            Contact — email / DM
          </LinkButton>

          <LinkButton href="https://linkedin.com/in/username" optional>
            LinkedIn / Résumé
          </LinkButton>

        </div>

        {/* Footer */}
        <p className="pt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Your Name
        </p>
      </div>
    </main>
  )
}

function LinkButton({
  href,
  children,
  optional = false,
}: {
  href: string
  children: React.ReactNode
  optional?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={`
        block w-full rounded-xl border 
        px-5 py-3 text-sm font-medium
        transition-all duration-200
        ${
          optional
            ? 'border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600'
            : 'border-neutral-700 text-white hover:border-white'
        }
      `}
    >
      {children}
    </a>
  )
}

