export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-10 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Our Story</h1>
          <div className="h-1 w-20 bg-gray-300 mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            At WataShop, we're passionate about delivering exceptional online shopping experiences. 
            We carefully curate quality products across fashion, electronics, home essentials, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded with a mission to make shopping effortless and reliable, we've grown from a small startup 
              into a trusted platform known for quality and customer satisfaction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every day, we're inspired by our community of customers who motivate us to innovate and improve.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Our Promise</h2>
            <p className="text-gray-600 leading-relaxed">
              We're committed to providing seamless service, transparent policies, and products that add value 
              to your daily life. Your trust is our most valued achievement.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-2xl font-light text-gray-900 mb-6">Our Values</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Customer First</h4>
                <p className="text-gray-600">Exceptional service at every interaction</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Integrity</h4>
                <p className="text-gray-600">Honest and transparent in all we do</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Quality</h4>
                <p className="text-gray-600">Products that stand the test of time</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Innovation</h4>
                <p className="text-gray-600">Constantly evolving to serve you better</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}