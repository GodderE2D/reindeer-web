import Image from "next/image";
import Link from "next/link";
import { HiOutlineShieldCheck } from "react-icons/hi2";

import imageReporting from "../../public/reporting.png";
import imageForum from "../../public/forum.png";
import imageTracking from "../../public/tracking.png";
import imageDMReports from "../../public/dm-reports-command.png";

export default async function Home() {
  return (
    <main>
      <div className="mx-4 mt-16 flex items-center justify-center">
        <div className="max-w-7xl">
          <div className="mb-20 flex flex-col gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <h1 className="mb-4 bg-gradient-to-tl from-yellow-500 via-orange-500 to-red-500 bg-300% bg-clip-text text-4xl font-bold text-transparent motion-safe:animate-gradient">
                Powerful user reports for your Discord server.
              </h1>
              <p className="mb-8 text-xl text-slate-300">
                Reindeer allows your server members to easily report messages and users. Reports get sorted into a
                neatly organised forum channel where you can track messages and users, discuss with your staff team, and
                take action.
              </p>
              <ul className="mb-8 text-lg text-slate-300">
                <li className="mb-2 flex items-center gap-1.5">
                  <HiOutlineShieldCheck className="h-7 w-7 text-red-500" />
                  <p>Powerful and highly configurable</p>
                </li>
                <li className="mb-2 flex items-center gap-1.5">
                  <HiOutlineShieldCheck className="h-7 w-7 text-red-500" />
                  <p>Setup reports in less than 5 minutes</p>
                </li>
                <li className="flex items-center gap-1.5">
                  <HiOutlineShieldCheck className="h-7 w-7 text-red-500" />
                  <p>Suitable for big servers</p>
                </li>
              </ul>
              <div className="flex gap-3">
                <a
                  href="/invite"
                  target="_blank"
                  className="rounded bg-red-700 px-6 py-3 text-lg font-semibold text-slate-300 transition-all duration-300 hover:bg-red-800"
                >
                  Add To Server
                </a>
                <Link
                  href="/docs/introduction/getting-started"
                  className="rounded bg-slate-700 px-6 py-3 text-lg font-semibold text-slate-300 transition-all duration-300 hover:bg-slate-800"
                >
                  Docs
                </Link>
              </div>
            </div>
            <div className="aspect-video lg:w-1/2">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/wK26PhL8meQ?autoplay=1&modestbranding=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className="lg:mx-24">
            <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
              <div className="max-w-prose">
                <h1 className="mb-4 text-2xl font-semibold text-slate-200 lg:text-3xl">
                  Streamlined reporting process
                </h1>
                <p className="mb-2">
                  Reindeer provides an intuitive experience to reporting messages and users. Members can right-click on
                  a message/user and select Apps &gt; Report message/user or use <code>/report</code> to start a report.
                </p>
                <p>
                  A modal is then shown with your server&apos;s custom values, such as a reason for the report. A
                  server-set confirmation message is then shown to the user, and the report will be sent to a forum
                  channel.
                </p>
              </div>
              <div className="h-fit w-fit">
                <Image
                  src={imageReporting}
                  alt="Example of a report modal"
                  className="h-full w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row-reverse lg:gap-16">
              <div className="max-w-prose">
                <h1 className="mb-4 text-2xl font-semibold text-slate-200 lg:text-3xl">
                  An organised forum channel for all reports
                </h1>
                <p className="mb-2">
                  Reports get sent to a private forum channel where you can easily track messages and users, discuss
                  with your staff team, and take appropriate action.
                </p>
                <p>Posts get tagged with the type of report and its status for easy filtering and searching.</p>
              </div>
              <div className="h-fit w-fit">
                <Image src={imageForum} alt="Example of a report forum channel" className="rounded-lg shadow-lg" />
              </div>
            </div>
            <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
              <div className="max-w-prose">
                <h1 className="mb-4 text-2xl font-semibold text-slate-200 lg:text-3xl">Track messages and users</h1>
                <p className="mb-2">
                  Easily track messages and users to ensure nothing slips through the cracks. Edited and deleted
                  messages along with user leaves and re-joins are tracked with Reindeer. As a bonus, targets and
                  original messages (if any) are automatically tracked.
                </p>
              </div>
              <div className="h-fit w-fit">
                <Image src={imageTracking} alt="Example of a report forum channel" className="rounded-lg shadow-lg" />
              </div>
            </div>
            <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row-reverse lg:gap-16">
              <div className="max-w-prose">
                <h1 className="mb-4 text-2xl font-semibold text-slate-200 lg:text-3xl">Verify DM reports easily</h1>
                <p className="mb-2">
                  Ever wanted a way to truly verify reports for DM messages? With Reindeer, you can let server members
                  report DM messages just like with server messages after adding the bot as a{" "}
                  <a
                    href="https://discord.com/developers/docs/tutorials/developing-a-user-installable-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white underline"
                  >
                    User App
                  </a>
                  .
                </p>
              </div>
              <div className="h-fit w-fit">
                <Image src={imageDMReports} alt="Report DM command command" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="mb-6 bg-gradient-to-tl from-yellow-500 via-orange-500 to-red-500 bg-300% bg-clip-text text-center text-3xl font-bold text-transparent motion-safe:animate-gradient">
              Manage reports better than ever.
            </h2>
            <a
              href="/invite"
              target="_blank"
              className="mb-2 rounded bg-red-700 px-6 py-3 text-lg font-semibold text-slate-300 transition-all duration-300 hover:bg-red-800"
            >
              Add To Server
            </a>
            <p>Doitdoitdoitdoit.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
