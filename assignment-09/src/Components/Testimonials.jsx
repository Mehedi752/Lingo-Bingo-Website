const testimonials = [
    {
        id: 1,
        name: "John Doe",
        feedback: "This platform has helped me tremendously in learning new vocabulary efficiently!",
        photo: "https://i.ibb.co.com/dB9XB6C/final1.webp",
    },
    {
        id: 2,
        name: "Jane Smith",
        feedback: "The lessons are interactive, and the pronunciation feature is a game-changer!",
        photo: "https://i.ibb.co.com/sjxYCBP/final2.png",
    },
    {
        id: 3,
        name: "Chris Martin",
        feedback: "The platform's simplicity and features have made my learning experience amazing.",
        photo: "https://i.ibb.co.com/wWPQ4GL/final3.jpg",
    },
];

const Testimonials = () => {
    return (
        <section
            className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 py-12"
        >
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
                What Our Learners Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
                {testimonials.map(({ id, name, feedback, photo }) => (
                    <div
                        key={id}
                        className="bg-gradient-to-br from-white via-blue-100 to-blue-200  shadow-xl p-6 flex flex-col gap-5 rounded-lg border hover:shadow-2xl transition"
                    >
                        <img
                            src={photo}
                            alt={name}
                            className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-gray-800"
                        />
                        <p className="text-center text-black text-lg" style={{ fontFamily: 'system-ui', fontStyle: 'italic' }}>"{feedback}"</p>
                        <h3 className="mt-4 text-lg text-end font-semibold text-gray-800" style={{ fontFamily: 'system-ui', fontStyle: 'italic' }}>
                            {name}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
