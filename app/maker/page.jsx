'use client';

export default function MakerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-1/4 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite]"></div>
        <div className="absolute -right-10 top-1/3 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite_2s]"></div>
        <div className="absolute left-1/3 bottom-1/4 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite_4s]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          {/* Header/Banner Section */}
          <div className="h-40 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)] animate-pulse"></div>
            </div>
          </div>
          
          {/* Profile Section */}
          <div className="relative px-4 sm:px-6 lg:px-8 pb-8">
            {/* Profile Image */}
            <div className="relative -mt-20 mb-8">
              <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden bg-white shadow-2xl mx-auto transform hover:rotate-6 transition-transform duration-300">
                <img 
                  src="https://lh3.googleusercontent.com/a/ACg8ocJavMDFBhMlQi6HuCVcJ9pCkle3HLLJpCFazZPsw45mlTB-s9O0=s288-c-no"
                  alt="Shivam Mishra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Content */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2 animate-[text_5s_ease_infinite] bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Shivam Mishra
              </h1>
              <p className="text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                Full Stack Web Developer & Digital Craftsman
              </p>
            </div>

            {/* Bio Section */}
            <div className="max-w-2xl mx-auto text-center mb-12 hover:transform hover:scale-105 transition-transform duration-300">
              <p className="text-gray-700 leading-relaxed text-lg italic">
                "Transforming ideas into digital reality. Where code meets creativity, 
                and every pixel tells a story. This is not just development – 
                this is digital artistry in motion."
              </p>
            </div>

            {/* Skills Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-center mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Tech Arsenal
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Next.js', 'React', 'Node.js', 'MongoDB', 
                  'JavaScript', 'TypeScript', 'TailwindCSS', 
                  'Python', 'AWS', 'Docker', 'GraphQL', 'REST APIs'
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 
                             text-indigo-600 rounded-full text-sm font-medium border border-indigo-200/50
                             hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Signature Quote */}
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px my-8 bg-gradient-to-r from-transparent via-gray-400 to-transparent border-0" />
                <span className="absolute px-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 -translate-x-1/2 bg-white left-1/2">
                  coding dreams into reality
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 