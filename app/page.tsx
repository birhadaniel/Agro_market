import { steps } from "@/assets/asset";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";


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
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto shadow">
          {steps.map((step, i) =>(
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <div className="text-green-600 text-3xl mb-3"></div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
