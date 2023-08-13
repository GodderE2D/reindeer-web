import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import { HiExternalLink } from "react-icons/hi";

const PATHS: Record<string, { path: string; name: string; newTab?: boolean }[]> = {
  Reindeer: [
    { path: "/", name: "Home" },
    { path: "/docs/introduction/getting-started", name: "Docs" },
    { path: "/metrics", name: "Stats" },
  ],
  Links: [
    { path: "/invite", name: "Invite", newTab: true },
    { path: "/discord", name: "Discord", newTab: true },
    { path: "/vote", name: "Vote", newTab: true },
    { path: "/github", name: "GitHub", newTab: true },
  ],
  Legal: [
    { path: "/docs/legal/terms", name: "Terms of Service" },
    { path: "/docs/legal/privacy", name: "Privacy Policy" },
  ],
};

export default function Footer({ commitSha }: { commitSha?: string }) {
  return (
    <footer className="mb-12 mt-24 flex justify-center">
      <div className="flex w-full max-w-5xl flex-col gap-6 px-4 text-left lg:flex-row lg:gap-0">
        <div className="flex flex-col lg:min-w-max">
          <div className="mb-4 flex items-center gap-2">
            <Image src={logo} className="h-12 w-12 rounded-full" alt="Reindeer Logo" />
            <h1 className="text-2xl font-bold text-slate-300">Reindeer</h1>
          </div>
          <p className="mb-1 whitespace-pre-line">Reindeer is not endorsed nor affiliated with Discord, Inc.</p>
          <div className="flex gap-3">
            <span>© {new Date().getFullYear()} Blue Shark River</span>
            {commitSha ? (
              <a
                href={`https://github.com/GodderE2D/reindeer-web/commit/${commitSha}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-slate-800 px-1 pt-[2px] text-sm text-blue-500 hover:underline"
              >
                <code>{commitSha.slice(0, 7)}</code>
              </a>
            ) : (
              ""
            )}
            <a
              href="https://github.com/GodderE2D/reindeer-web"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 underline"
            >
              <span>Source</span>
              <HiExternalLink className="opacity-0 transition-all group-hover:opacity-100" />
            </a>
          </div>
        </div>
        <div className="flex w-full flex-col justify-end gap-4 text-left lg:flex-row lg:gap-16">
          {Object.entries(PATHS).map(([category, paths]) => (
            <div key={category} className="flex flex-col">
              <h2 className="mb-3 font-semibold uppercase tracking-wide">{category}</h2>
              <div className="flex gap-3 lg:flex-col lg:gap-2">
                {paths.map(({ path, name, newTab }) => (
                  <span key={path} className="group flex items-center gap-1">
                    {newTab ? (
                      <>
                        <a href={path} target="_blank" className="text-slate-300 transition-all hover:text-red-500">
                          {name}
                        </a>
                        <HiExternalLink className="opacity-0 transition-all group-hover:opacity-100" />
                      </>
                    ) : (
                      <Link href={path} className="text-slate-300 transition-all hover:text-red-500">
                        {name}
                      </Link>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
