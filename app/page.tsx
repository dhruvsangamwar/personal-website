import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tighter">
        Dhruv Sangamwar.
      </h1>
      <h3 className="mb-8 text-l font-semibold tracking-lighter">
        Engineer by profession, human by design, cat dad by choice.
      </h3>

      <p className="mb-4">
        {`I am currently working as a software engineer at `}
        <Link href="https://www.pnisensor.com" className="underline">
          {` PNI Sensor`}
        </Link>
        , where I develop software supporting alternative positioning,
        navigation, and timing sensors. Lately I have been working in C++, C,
        Rust, and Kotlin. My interests include embedded systems, databases, distributed systems,
        computer networks, and natural language processing.
      </p>

      <p className="mb-4">
        I studied Computer Science at
        <span className="font-semibold"> University of California, Davis</span>
        {`, where I had the opportunity to `}
        <Link
          href="https://dhruvsangamwar.notion.site/ECS-198F-Diving-deep-into-the-world-of-Algorithms-Competitive-programming-and-more-4faece565e2e4c25a517970354a66102"
          className="underline"
        >
          {`teach`}
        </Link>
        {` a class on algorithms and competitive programming
        and help manage Neurotech@Davis. I also contributed to research studying governance in Apache Open Source projects.`}
      </p>

      <p className="mb-4">
        When I’m not at my computer, you can find me hiking, traveling, or
        bouldering.
      </p>
    </section>
  );
}
