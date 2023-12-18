import React from "react";
import tele from "./assets/telegram.svg";
import email from "./assets/email.svg";
import face from "./assets/face.jpg";
const Project = ({ title = "ssss" }) => {
  return (
    <div>
      <h1 className="text-3xl mb-2">{title}</h1>
      {/* desc */}
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        nostrum corrupti qui dolore? Deleniti, harum dolorum ut at saepe veniam
        similique consectetur beatae in quod nobis, iure ipsa quisquam suscipit.
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="w-2/3 mx-auto mt-3 sm:w-full sm:p-4">

      <div className="flex items-center gap-3 lg:flex-wrap">
        <div className="w-56 h-56 md:hidden">
          <img src={face} className="w-full h-full" />
        </div>

        <div className="flex flex-col gap-4 lg:flex-1">
          <span className="text-6xl uppercase">Darya Ananich</span>
          <span className="text-3xl">UX/UI Designer</span>
        </div>

        <div className="flex-1 flex justify-end lg:flex-none">
          <ul className="flex flex-col gap-2 lg:flex-row lg:gap-6">
            <li className="text-lg cursor-pointer flex gap-2 justify-end">
              <img src={email} className="w-8 h-8" />
              <span className="underline">
                <a href="mailto:mmf.ananich@bsu.by">mmf.ananich@bsu.by</a>
              </span>
            </li>
            <li className="text-lg cursor-pointer flex gap-2 justify-end">
              <img src={tele} className="w-8 h-8" />
              <span className="underline">
                <a href="https://t.me/fufifufifu">@fufifufifu</a>
              </span>
            </li>
          </ul>
        </div>
      </div>


      <div className="grid grid-cols-[2fr,1fr] gap-24 mt-6 sm:grid-cols-1 sm:gap-12">
        <div className="sm:order-2">
          <h2 className="text-3xl border-b-2 border-black pb-2 mb-2 sm:pb-1">
            Projects
          </h2>
          <div className="flex flex-col gap-5">
            <Project title="2" />
            <Project title="1" />
            <Project title="3" />
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:order-1">
          <div>
            <h2 className="text-3xl border-b-2 border-black pb-2 sm:pb-1">Education</h2>
            <ul>
              <li>BSU 2022-now</li>
              <li>RS School</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl border-b-2 border-black pb-2 sm:pb-1">Skills</h2>
            <div className="flex flex-col">
              <span>
                <strong className="text-lg">hardskills:</strong> А тебя это
                ебать не должно;
              </span>
              <div>
                <strong className="text-lg">softskills:</strong>
                <ul className="list-disc px-6">
                  <li>beautiful</li>
                  <li>active</li>
                  <li>talkative</li>
                  <li>outgoing</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl border-b-2 border-black pb-2 sm:pb-1">Language</h2>
            <ul className="mt-3">
              <li>
                <strong>English:</strong> B2
              </li>
              <li>
                <strong>Russian:</strong> Native
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
