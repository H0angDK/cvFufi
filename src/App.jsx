import tele from "./assets/telegram.svg";
import email from "./assets/email.svg";
import face from "./assets/face.jpg";

const Project = ({ title, content, link }) => {
  return (
    <div>
      <h1 className="text-3xl mb-2">{title}</h1>
      <span className="cursor-pointer">
        <strong>Link:</strong>{" "}
        <a href={link} className="underline">
          {link}
        </a>
      </span>
      <div>{content}</div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Delivary banner",
    link: "https://goo.su/FUxF8H",
    content:
      "The project involves creating an animated banner for a restaurant. The banner will feature attractive images of dishes and beverages, along with effects to grab visitors' attention and create an atmosphere that reflects the restaurant's uniqueness. The goal is to attract new customers and enhance the restaurant's online visibility.",
  },
  {
    id: 2,
    title: "Landing page",
    link: "https://github.com/H0angDK/landingPage.git",
    content:
      "The projects involves creating a landing page for a bakery. The goal of our bakery landing page is to present our bakery in the best possible light, generate interest among visitors, and convert them into satisfied and loyal customers. We aim to create a positive impression of our bakery and showcase our expertise in the art of baking.",
  },
  {
    id: 3,
    title: "Bakery banner",
    link: "https://goo.su/rqWow7",
    content:
      "The project involves creating a banner for a pastry shop. The goal was to design an attractive banner that would grab visitors' attention and motivate them to place an order to receive a complimentary croissant with a purchase of 6 rubles or more. The aim is to enhance the appeal of the pastry shop and attract more customers through the effective use of an enticing offer.",
  },
];
const App = () => {
  return (
    <div className="w-2/3 mx-auto mt-3 pb-4 sm:w-full sm:p-4">
      <div className="flex items-center gap-3 lg:flex-wrap">
        <div className="w-32 h-48 md:hidden">
          <img src={face} className="w-full h-full" />
        </div>

        <div className="flex flex-col gap-4 lg:flex-1">
          <span className="text-6xl uppercase">Darya Ananich</span>
          <span className="text-3xl">Graphic Designer</span>
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
            {projects.map((x) => (
              <Project
                key={x.id}
                title={x.title}
                content={x.content}
                link={x.link}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:order-1">
          <div>
            <h2 className="text-3xl border-b-2 border-black pb-2 sm:pb-1">
              Education
            </h2>
            <ul>
              <li>BSU 2022-now</li>
              <li>RS School</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl border-b-2 border-black pb-2 sm:pb-1">
              Skills
            </h2>
            <div className="flex flex-col">
              <span>
                <strong className="text-lg">hardskills:</strong> 
                <ul className="list-disc px-6">
                  <li>Figma</li>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>Sketch</li>
                </ul>
              </span>
              <div>
                <strong className="text-lg">softskills:</strong>
                <ul className="list-disc px-6">
                  <li>beautiful</li>
                  <li>active</li>
                  <li>talkative</li>
                  <li>outgoing</li>
                  <li>brave</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl border-b-2 border-black pb-2 sm:pb-1">
              Language
            </h2>
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
