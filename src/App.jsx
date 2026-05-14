import { useState } from "react"

import img1 from "./imagenes/1.jpeg"
import img2 from "./imagenes/2.jpeg"
import img4 from "./imagenes/4.jpeg"
import img6 from "./imagenes/6.jpeg"

function App() {

  const [selectedTask, setSelectedTask] = useState(null)

  const tasks = [
    {
      title: "Activity 01. Introducing yourself.",
      image: img1,
    },

    {
      title: "Activity 02. Individual Entry Test.",
      image: img2,
    },

    {
      title: "Activity 03. Recording myself. Video.",
      image: null,
    },

    {
      title: "Activity 04. Active listening skills.",
      image: img4,
    },

    {
      title: "Activity 05. Brief Summary & Shadowing Technique.",
      image: null,
    },

    {
      title: "Activity 06. Note-taking and Graphic Organizer.",
      image: img6,
    },
  ]


  return (

    <div className="
      min-h-screen
      relative
      overflow-hidden
      bg-gradient-to-br
      from-[#1a1024]
      via-[#241335]
      to-[#2d1639]
      text-white
    ">

      {/* BACKGROUND LIGHTS */}
      <div className="
        absolute
        top-[-100px]
        left-[-100px]
        w-[350px]
        h-[350px]
        bg-pink-300/20
        rounded-full
        blur-3xl
      "></div>

      <div className="
        absolute
        top-[30%]
        right-[-100px]
        w-[400px]
        h-[400px]
        bg-fuchsia-300/20
        rounded-full
        blur-3xl
      "></div>

      <div className="
        absolute
        bottom-[-120px]
        left-[35%]
        w-[320px]
        h-[320px]
        bg-purple-300/20
        rounded-full
        blur-3xl
      "></div>


      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-16 py-12">


        {/* NAVBAR */}
        <nav className="flex justify-between items-center mb-24">

          <h1 className="
            text-2xl
            font-bold
            bg-gradient-to-r
            from-pink-200
            to-purple-200
            bg-clip-text
            text-transparent
          ">
            Sandra Alexa
          </h1>

          <button className="
            px-6
            py-3
            rounded-full
            bg-gradient-to-r
            from-pink-400
            via-rose-300
            to-purple-400
            text-white
            font-medium
            shadow-lg
            shadow-pink-400/30
          ">
            English Portfolio
          </button>

        </nav>


        {/* HERO */}
        <section className="
          min-h-[60vh]
          flex
          flex-col
          justify-center
          items-center
          text-center
        ">

          <p className="
            uppercase
            tracking-[10px]
            text-pink-200
            text-sm
            mb-6
          ">
            English Class Project
          </p>

          <h1 className="
            text-6xl
            md:text-8xl
            font-extrabold
            leading-tight
            mb-8
          ">

            <span className="
              bg-gradient-to-r
              from-white
              via-pink-100
              to-purple-200
              bg-clip-text
              text-transparent
            ">
              MY
            </span>

            <br />

            <span className="
              bg-gradient-to-r
              from-pink-300
              via-rose-200
              to-purple-300
              bg-clip-text
              text-transparent
            ">
              PORTFOLIO
            </span>

          </h1>

          <h2 className="
            text-2xl
            md:text-4xl
            font-light
            text-pink-50
            mb-8
          ">
            Sandra Alexa Solis Atoche
          </h2>

        </section>


        {/* TASKS */}
        <section className="mt-10">

          <div className="text-center mb-16">

            <p className="
              uppercase
              tracking-[6px]
              text-pink-200
              mb-3
            ">
              Assignments
            </p>

            <h2 className="
              text-5xl
              font-bold
              bg-gradient-to-r
              from-white
              via-pink-100
              to-purple-200
              bg-clip-text
              text-transparent
            ">
              Portfolio Tasks
            </h2>

          </div>


          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          ">

            {tasks.map((task, index) => (

              <div
                key={index}
                onClick={() => setSelectedTask(task)}
                className="
                  group
                  relative
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-pink-200/10
                  rounded-[30px]
                  p-8
                  overflow-hidden
                  hover:scale-105
                  hover:border-pink-300/40
                  transition-all
                  duration-500
                  cursor-pointer
                  shadow-2xl
                  hover:shadow-pink-300/20
                "
              >

                <div className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  bg-gradient-to-br
                  from-pink-200/10
                  to-purple-200/10
                "></div>


                <div className="relative z-10">

                  <div className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-br
                    from-pink-300
                    to-purple-300
                    flex
                    items-center
                    justify-center
                    text-2xl
                    font-bold
                    text-black
                    mb-6
                    shadow-lg
                    shadow-pink-300/20
                  ">
                    {index + 1}
                  </div>

                  <h3 className="
                    text-2xl
                    font-semibold
                    mb-4
                    text-white
                  ">
                    {task.title}
                  </h3>

                  <p className="
                    text-pink-100/70
                  ">
                    Click to open activity
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* MODAL */}
        {selectedTask && (

          <div className="
            fixed
            inset-0
            bg-black/70
            backdrop-blur-md
            flex
            items-center
            justify-center
            z-50
            p-6
          ">

            <div className="
              bg-[#241335]
              border
              border-pink-300/20
              rounded-3xl
              max-w-4xl
              w-full
              p-6
              relative
            ">

              <button
                onClick={() => setSelectedTask(null)}
                className="
                  absolute
                  top-4
                  right-4
                  w-10
                  h-10
                  rounded-full
                  bg-pink-300
                  text-black
                  font-bold
                  hover:scale-110
                  transition-all
                "
              >
                X
              </button>

              <h2 className="
                text-3xl
                font-bold
                mb-6
                text-center
              ">
                {selectedTask.title}
              </h2>

              {selectedTask.image ? (

                <img
                  src={selectedTask.image}
                  alt="activity"
                  className="
                    w-full
                    rounded-2xl
                    object-cover
                    max-h-[70vh]
                  "
                />

              ) : (

                <div className="
                  h-[300px]
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white/5
                  text-pink-200
                  text-3xl
                  font-semibold
                ">
                  Coming Soon
                </div>

              )}

            </div>

          </div>

        )}


        {/* FOOTER */}
        <footer className="
          text-center
          mt-28
          pb-8
          text-pink-100/50
        ">
          © 2025 Sandra Alexa Solis Atoche • English Portfolio
        </footer>

      </div>

    </div>

  )
}

export default App