# 💡 Vocabulary Learning Website

Welcome to the **Vocabulary Learning Website**, an interactive platform designed to help users enhance their vocabulary through flashcards, quizzes, and real-time progress tracking. Built with **ReactJS** and **Firebase**, this application ensures a seamless and engaging learning experience🚀

---

## **✨ Core Features**

### **🔑 User Authentication**
- Secure login and signup using **Firebase Authentication**.
- Supports Google Sign-In for quick access.

### **📖 Vocabulary Flashcards**
- Users can create, edit, and delete flashcards.
- Organize words into different categories.

### **📊 Progress Tracking**
- Tracks user learning progress in real-time.
- Displays quiz scores and completed flashcards.

### **📡 Real-Time Database**
- Uses **Firebase Firestore** to store and sync data instantly.
- Ensures fast and efficient retrieval of vocabulary lists.

### **🎨 Smooth User Experience**
- Built with **ReactJS**, ensuring seamless interactions without page reloads.
- **React Router** enables smooth navigation.

### **📱 Fully Responsive Design**
- Optimized for **desktop, tablet, and mobile** users.

---

## **🚀 Live Demo**

[🔗 Vocabulary Learning Website - Live Version](https://your-live-project-url.web.app)

---

## **📚 Tech Stack**

### **Frontend:**
- React.js
- Tailwind CSS
- Daisy UI
- React Router
- React Toastify (Notifications)

### **Backend (Firebase Services):**
- Firebase Authentication (User Login & Signup)
- Firebase Firestore (Real-time Database)

### **Additional Tools:**
- Axios for API requests
- Sweet Alert for user-friendly popups

---

## **📦 Dependencies**

### **Frontend Dependencies (`package.json`)**
- `react`
- `react-router-dom`
- `tailwindcss`
- `daisyui`
- `react-toastify`
- `firebase`
- `react-icons`

---

## **💻 Installation & Setup**

Follow these steps to set up **Vocabulary Learning Website** on your local machine.

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/vocabulary-learning.git
cd vocabulary-learning
```

### **2️⃣ Install Dependencies**
```bash
npm install  # Install required npm packages
```

### **3️⃣ Configure Firebase**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new Firebase project.
3. Enable **Authentication** (Google Sign-In and Email/Password Login).
4. Enable **Firestore Database** and set up security rules.
5. Copy your Firebase configuration details and add them to a `.env` file.

### **4️⃣ Set Up Environment Variables**
Create a `.env` file inside your project and add:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_PROJECT_ID=your_firebase_project_id
VITE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_APP_ID=your_firebase_app_id
```

### **5️⃣ Start the Development Server**
```bash
npm run dev  # Runs the React frontend
```

Now, open **http://localhost:5173/** in your browser to start learning new words! 🚀

---

## **🛠️ Contributing**
We welcome contributions! Follow these steps to contribute:
1. **Fork** the repository.
2. **Create a feature branch** (`git checkout -b feature-name`).
3. **Commit your changes** (`git commit -m "Added new feature"`).
4. **Push to your branch** (`git push origin feature-name`).
5. **Create a Pull Request**.

---

## **📜 License**
This project is **open-source** and licensed under the **MIT License**.

---

