import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <div className="text-xl font-bold tracking-wide text-blue-700">SMARTRAILNAV</div>
          <nav className="space-x-6 text-sm">
            <a href="#stations" className="hover:text-blue-600">Stations</a>
            <a href="#facilities" className="hover:text-blue-600">Facilities</a>
            <a href="#locations" className="hover:text-blue-600">Locations</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-4 flex flex-col-reverse lg:flex-row items-center container mx-auto gap-10">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Explore Railway Station Facilities and Locations</h1>
          <p className="text-gray-600 mb-6">Find your nearest station, explore facilities, and get directions with ease.</p>
          <a href="#stations" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Find a Station</a>
        </div>
        <div className="flex-1">
          <Image src="/rail3.jpg" alt="Train Station" width={600} height={400} className="rounded-lg shadow" />
        </div>
      </section>

      {/* Stations Section */}
      <section id="stations" className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-10 text-center">Stations Overview</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "New York Central",
              desc: "Located in the heart of NYC, offering fast connections to major cities.",
            },
            {
              name: "Los Angeles Union",
              desc: "One of the largest stations on the West Coast with state-of-the-art services.",
            },
            {
              name: "Chicago Union",
              desc: "Historic station with modern amenities, providing easy access to the Midwest.",
            },
          ].map((station, idx) => (
            <div key={idx} className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{station.name}</h3>
              <p className="mb-4 text-sm text-gray-600">{station.desc}</p>
              <a href="#facilities" className="text-blue-600 hover:underline">Explore Facilities</a>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-16 bg-gray-50 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-10 text-center">Facilities Available</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { src: "waiting room.jpg", title: "Comfortable Waiting Rooms", desc: "Relax in spacious waiting areas with free Wi-Fi, seating, and refreshments." },
            { src: "food court.jpg", title: "Food Courts", desc: "Enjoy a variety of cuisines at our food courts available at major stations." },
            { src: "charging station.jpg", title: "Charging Stations", desc: "Charge your devices at convenient stations throughout the premises." },
          ].map((facility, idx) => (
            <div key={idx} className="text-center">
              <Image src={`/${facility.src}`} alt={facility.title} width={120} height={120} className="mx-auto mb-4 rounded" />
              <h3 className="font-medium text-lg">{facility.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{facility.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Station Locations</h2>
        <p className="text-center text-gray-600 mb-6">Explore our interactive map to find stations near you or discover new destinations.</p>
        <div className="flex justify-center">
          <Image src="/location.jpg" alt="Station Map" width={700} height={400} className="rounded shadow" />
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Station Tour</h2>
        <div className="flex justify-center">
          <video controls poster="/video-thumbnail.jpg" className="w-full max-w-4xl rounded shadow">
            <source src="/station1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-600 py-16 text-white text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">Need Help Finding a Station?</h2>
        <a href="mailto:contact@SmartRailNav.com" className="inline-block mt-4 bg-white text-blue-600 px-6 py-3 rounded font-medium hover:bg-gray-100">Contact Support</a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 space-y-4 sm:space-y-0">
          <nav className="space-x-4">
            <a href="#stations" className="hover:underline">Stations</a>
            <a href="#facilities" className="hover:underline">Facilities</a>
            <a href="#locations" className="hover:underline">Locations</a>
            <a href="#contact" className="hover:underline">Contact Us</a>
          </nav>
          <p>© 2025 SmartRailNav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

