import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../AuthProvider";


const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>User not authenticated</div>;
    }

    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");
    const [error, setError] = useState("");

    const handleUpdate = () => {
        if (!name || !photo) {
            setError("Please fill in the all fields.");
            return;
        }

        updateProfile(user, { displayName: name, photoURL: photo })
            .then(() => {
                navigate("/profile");
            })
            .catch((err) => {

                console.error("Error updating profile:", err);
                setError("Failed to update profile. Please try again.");
            });
    }

    return (
        <div className="p-10 bg-[#f3f3f3]  flex items-center justify-center">
            <div className="bg-white shadow-lg shadow-black rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Update Profile</h1>

                <div className="mb-4">
                    <label className="block font-semibold mb-2">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-2">Photo URL:</label>
                    <input
                        type="text"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter photo URL"
                    />
                </div>

                {error && <p className="text-red-600 mb-4">{error}</p>}
                <button
                    onClick={handleUpdate}
                    disabled={loading}
                    className={`w-full py-2 text-white rounded ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                        }`}
                >
                    {loading ? "Updating..." : "Update Information"}
                </button>

            </div>
        </div>
    );
};

export default UpdateProfile;
