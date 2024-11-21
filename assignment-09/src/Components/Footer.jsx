import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#126C4D] text-white py-10">
            <div className="container mx-auto px-10 lg:px-0">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ fontFamily: 'system-ui', fontStyle: 'italic' }}>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                        <p className="">
                            123 Learning Lane, Language City, 56789
                        </p>
                        <p className="mt-2">Email: info@vocabplatform.com</p>
                        <p className="mt-1">Phone: +1 (555) 123-4567</p>
                    </div>


                    <div>
                        <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                        <div className="flex flex-col gap-2">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-500"
                            >
                                <div className="flex gap-2 items-center">
                                    <FaFacebook className="text-white w-5 h-5"></FaFacebook>
                                    <p className="text-md text-white">Facebook</p>
                                </div>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400"
                            >
                                <div className="flex gap-2 items-center">
                                    <FaTwitter className="text-white w-5 h-5"></FaTwitter>
                                    <p className="text-md text-white">Twitter</p>
                                </div>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-700"
                            >
                                <div className="flex gap-2 items-center">
                                    <FaLinkedin className="text-white w-5 h-5"></FaLinkedin>
                                    <p className="text-md text-white">Linkedin</p>
                                </div>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-pink-500"
                            >
                                <div className="flex gap-2 items-center">
                                    <FaInstagram className="text-white w-5 h-5"></FaInstagram>
                                    <p className="text-md text-white">Instagram</p>
                                </div>
                            </a>
                        </div>
                    </div>


                    <div className="">
                        <h4 className="text-lg font-bold mb-4">About</h4>
                        <p className="">
                            Empowering learners to expand their vocabulary with
                            interactive lessons and resources.
                        </p>

                        <form className="mt-6">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="rounded-l-md px-4 py-2 w-2/3 focus:outline-none"
                            />
                            <button className="bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600">
                                Subscribe
                            </button>
                        </form>

                    </div>

                </div>

                <p className="text-xs text-center mt-8">
                    © {currentYear} VocabPlatform. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
