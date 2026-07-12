import { Brain, BarChart3, BookOpen } from "lucide-react";

function Features() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
              StudentAI?
            </span>
          </h2>

          <p className="text-gray-500 mt-5 text-lg max-w-2xl mx-auto">
            Experience next-generation AI technology that helps students
            understand their academic performance, identify weaknesses,
            and receive personalized study recommendations.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <div className="w-20 h-20 mx-auto rounded-full bg-violet-100 flex items-center justify-center">

              <Brain className="text-violet-600 w-10 h-10" />

            </div>

            <h3 className="text-2xl font-bold mt-6">
              AI Analysis
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              Our intelligent AI analyzes student marks, attendance,
              and academic trends to provide meaningful insights and
              identify improvement areas.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center">

              <BarChart3 className="text-purple-600 w-10 h-10" />

            </div>

            <h3 className="text-2xl font-bold mt-6">
              Smart Reports
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              Generate interactive performance reports with graphs,
              visual analytics, and detailed comparisons that make
              progress tracking easy.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

            <div className="w-20 h-20 mx-auto rounded-full bg-pink-100 flex items-center justify-center">

              <BookOpen className="text-pink-500 w-10 h-10" />

            </div>

            <h3 className="text-2xl font-bold mt-6">
              Personalized Learning
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              Receive AI-generated study plans, personalized learning
              suggestions, and subject-wise recommendations to improve
              overall academic performance.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Features;