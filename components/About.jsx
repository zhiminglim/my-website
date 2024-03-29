export default function About(props) {
  return (
    // Section
    <div className="flex flex-col h-screen px-[15%] py-[10%] w-fit">
      {/* Title */}
      <div className="flex flex-col mb-12">
        <p className="flex justify-center font-extralight text-[54px] tracking-[0.5em] -mr-4">
          ABOUT
        </p>
        <div className='flex h-0.5 w-1/6 mx-auto bg-[#30475E]'></div>
      </div>

      {/* Section Body */}
      <div className="font-light py-8 text-[20px] tracking-wide">
        <p>
        Software engineer by profession, I tinker with some of the latest cloud technologies at work. Kubernetes is my main orchestration tool and I love prototyping and building microservices.
        <br />
        <br />
        When I&apos;m not working, I look at real-life clouds and ponder what life would be as a glorified bus driver in the skies.
        </p>
      </div>
    </div>
  )
}