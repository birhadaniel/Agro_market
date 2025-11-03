import { features, prices, steps } from "@/assets/asset";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { LuCloudSunRain } from "react-icons/lu";


export default function Home() {
  return (
    <main>
      <Navbar/>
      {/* Hero page */}
      <section className="text-center py-20 bg-linear-to-b from-green-50 to-green-100">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Smart Digital Agriculture</h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">A web-based platform that empowers Ethiopian farmers with direct access to buyers and fair trade opportunities.</p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-green-600! text-white px-5 py-2 rounded hover:bg-green-700!">
            Register Now
          </button>
          <button className="border border-green-600 text-green-700 px-5 py-2 rounded hover:bg-green-50!">
            Learn More
          </button>
        </div>
      </section>

      {/* how to work */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) =>(
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 text-3xl mb-4">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* features */}
      <section className="bg-green-50 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">Feature Highlights</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((f,i) =>(
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <div className="text-green-600 text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* market info */}
      <section className="py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">Stay Informed. Trade Smarter.</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="bg-white shadow rounded-xl p-6 w-full max-w-2xl">
            <h3 className="font-semibold mb-4">Today&apos;s Prices</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50 text-gray-700">
                    <th className="py-2 px-3 text-left font-semibold">Crop</th>
                    <th className="py-2 px-3 text-left font-semibold">Price</th>
                    <th className="py-2 px-3 text-left font-semibold">Region</th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((p, i) =>(
                    <tr key={i} className="border-b last:border-0 hover:bg-gray-50 transition-colors border-gray-200">
                      <td className="py-2 px-3 font-medium text-gray-800">{p.crop}</td>
                      <td className="py-2 px-3 text-gray-600">{p.price}</td>
                      <td className="py-2 px-3 text-gray-600">{p.region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow w-full max-w-2xl ">
            <h3 className="font-semibold">Weather Forecast</h3>
            <div className="flex items-center justify-between mt-2">
              <div className="text-left">
                <p className="text-2xl font-bold mt-2">24°C</p>
                <p className="text-gray-600 text-sm">Jimma, Ethiopia</p>
              </div>
              <LuCloudSunRain className="text-4xl text-green-500"/>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
