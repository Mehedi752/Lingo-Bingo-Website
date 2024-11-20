import { useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AuthContext } from "../AuthProvider";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="p-10 bg-[#f3f3f3]">
            <h1 className="text-4xl font-bold text-center mb-6">
                Welcome, {user?.displayName || "User"}!
            </h1>
            <div className="bg-white border-2 shadow-2xl shadow-black rounded-lg p-6 max-w-md mx-auto">
                <div className="flex items-center justify-center mb-4">
                    <img
                        src={user?.photoURL || "https://via.placeholder.com/150"}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-blue-600"
                    />
                </div>
                <div className="text-lg">
                    <p>
                        <strong>Name:</strong> {user?.displayName || "N/A"}
                    </p>
                    <p>
                        <strong>Email:</strong> {user?.email || "N/A"}
                    </p>
                </div>

                <button onClick={() => navigate("/profile/update-profile")}
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded"
                >
                    Update Profile
                </button>
            </div>

        </div>
    );
};

export default Profile;

// {
//     "uid": "BXdPlKEPkFN38Z0vYE97lyQjvso2",
//     "email": "mehedi@gmail.com",
//     "emailVerified": false,
//     "displayName": "Mehedi",
//     "isAnonymous": false,
//     "photoURL": "https://i.ibb.co/h7LjC19/formal-photo.png",
//     "providerData": [
//         {
//             "providerId": "password",
//             "uid": "mehedi@gmail.com",
//             "displayName": "Mehedi",
//             "email": "mehedi@gmail.com",
//             "phoneNumber": null,
//             "photoURL": "https://i.ibb.co/h7LjC19/formal-photo.png"
//         }
//     ],
//     "stsTokenManager": {
//         "refreshToken": "AMf-vBxix91yLiOomI1288gQ3EDEbbZ4LomgRl5F5e6WqefAPstautxNOl_n78EnAjyJktujK50QG-wOVOlbNQp2dPeTfi89z8CAlG6ITOtSlNDftmUWpypazumTfQAv2fOQBVi9HfjQWpIbe5dIdPs6EKZhOQ3geC9e7a_R8FUAT0I5sxImzCTQyvd__R10FQ7mizaP_x-Ym1YQRw631_fyJ-iR5NptpeZ4n96QoP8ji4yyYO7nTKs",
//         "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlNTIxYmY1ZjdhNDAwOGMzYmQ3MjFmMzk2OTcwOWI1MzY0MzA5NjEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTWVoZWRpIiwicGljdHVyZSI6Imh0dHBzOi8vaS5pYmIuY28vaDdMakMxOS9mb3JtYWwtcGhvdG8ucG5nIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3ZvY2FidWxhcnktbGVhcm5pbmctd2ViIiwiYXVkIjoidm9jYWJ1bGFyeS1sZWFybmluZy13ZWIiLCJhdXRoX3RpbWUiOjE3MzIwNDgwNDEsInVzZXJfaWQiOiJCWGRQbEtFUGtGTjM4WjB2WUU5N2x5UWp2c28yIiwic3ViIjoiQlhkUGxLRVBrRk4zOFowdllFOTdseVFqdnNvMiIsImlhdCI6MTczMjA0ODA0MSwiZXhwIjoxNzMyMDUxNjQxLCJlbWFpbCI6Im1laGVkaUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVoZWRpQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pSYCOl2J4mQd-rALpR-wjOd9IpT_iTWRAnfHJHznu3nilgNEZaT950302mF-PXGlkL0Yp9GdLb-eoMyynx1rbZr_vpOzKJHgFOMbq6ZzqfkpQpbsuGq9_mJj5dVGeSOJnxg3bp6md7yzMYloSeDeOR5-CwNehERHSCQFu3igp9yGjdsIkMaAgZB6gm9RXyH0UYhK-FlLnwnMW5nlR30CQ5eiXFx33PK4JYeCThDpx8agbyl2t9VstR0Ch7e_cSjTwr35nJQiF9du8QZ4tMlnBcbeWZReROXgJm3-6QnbYaxpT5jBBHlWWwPw9UHr7rNli6ZkeqZd76FTQ3EuRFRoCg",
//         "expirationTime": 1732008441840
//     },
//     "createdAt": "1732043118694",
//     "lastLoginAt": "1732048041105",
//     "apiKey": "AIzaSyB_UotGHSWd2HI_zdg0ME4aqibmIv_Cjtw",
//     "appName": "[DEFAULT]"
// }