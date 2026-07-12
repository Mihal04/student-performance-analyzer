function Hero() {
  return (
    <section className="bg-gradient-to-r from-violet-100 via-purple-100 to-pink-100 py-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 px-8">

        <div>

          <h1 className="text-6xl font-extrabold leading-tight text-gray-900">

            Analyze Student

            <span className="block bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">

              Performance

            </span>

            using Artificial Intelligence

          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-8">

            Upload marks, attendance and academic details.

            Get AI-powered insights, prediction, recommendations,

            and personalized study plans instantly.

          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-full hover:scale-105 transition duration-300 shadow-xl">

              Analyze Now

            </button>

            <button className="border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-full hover:bg-violet-600 hover:text-white transition">

              Learn More

            </button>

          </div>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
            alt="Students"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;