export const Footer = () => {
  return (
    <footer className="bg-stone-200 text-black">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center xl:text-left">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-4 xl:grid-cols-5">
          <div>
            <h2 className="text-xl font-semibold mb-2">Resources</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-700">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Release Notes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Community</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-700">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-700">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Legal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <ul>
              <li>
                <a href="mailto:info@shop.com" className="hover:text-gray-700">
                  info@shop.com
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col col-span-full xl:col-auto order-last justify-center xl:text-right ">
            <a
              style={{ fontFamily: "'Playwrite HU', cursive" }}
              className="text-xl font-bold text-primary"
            >
              Shop
            </a>
            <ul>
              <li>&copy; Copyright 2025</li>
              <li>Shop Studio Design, Inc.</li>
              <li>All rights reserved</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
