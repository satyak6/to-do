import { useState } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../services/firebase.js";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignup, setIsSignup] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const getFirebaseError = (err) => {
        switch (err.code) {
            case "auth/invalid-credential":
                return "Invalid email or password.";

            case "auth/email-already-in-use":
                return "An account already exists with this email.";

            case "auth/weak-password":
                return "Password should be at least 6 characters.";

            case "auth/invalid-email":
                return "Please enter a valid email address.";

            case "auth/popup-closed-by-user":
                return "Google sign-in was cancelled.";

            case "auth/popup-blocked":
                return "Google sign-in was blocked by your browser.";

            case "auth/network-request-failed":
                return "Network error. Please check your internet connection.";

            default:
                return (
                    err.message ||
                    "Something went wrong. Please try again."
                );
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            if (isSignup) {
                await createUserWithEmailAndPassword(
                    auth,
                    email.trim(),
                    password
                );
            } else {
                await signInWithEmailAndPassword(
                    auth,
                    email.trim(),
                    password
                );
            }
        } catch (err) {
            setError(getFirebaseError(err));
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setError("");
        setLoading(true);

        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            setError(getFirebaseError(err));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-200 dark:bg-zinc-950 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-zinc-900 w-full max-w-md rounded-2xl shadow-lg p-6 sm:p-8">
                <h1 className="text-3xl font-bold text-orange-500">
                    TaskFlow
                </h1>

                <p className="text-gray-500 dark:text-gray-400 mt-2">
                    {isSignup
                        ? "Create your account"
                        : "Welcome back"}
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-4"
                >
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="Enter your email"
                            required
                            autoComplete="email"
                            className="w-full border border-gray-300 dark:border-zinc-700 rounded-lg p-3 outline-none bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            placeholder="Enter your password"
                            required
                            minLength={6}
                            autoComplete={
                                isSignup
                                    ? "new-password"
                                    : "current-password"
                            }
                            className="w-full border border-gray-300 dark:border-zinc-700 rounded-lg p-3 outline-none bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading
                            ? "Please wait..."
                            : isSignup
                            ? "Create Account"
                            : "Login"}
                    </button>
                </form>

                <div className="flex items-center gap-3 my-6">
                    <div className="h-px bg-gray-200 dark:bg-zinc-700 flex-1" />

                    <span className="text-gray-400 text-sm">
                        OR
                    </span>

                    <div className="h-px bg-gray-200 dark:bg-zinc-700 flex-1" />
                </div>

                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    disabled={loading}
                    className="w-full border border-gray-300 dark:border-zinc-700 py-3 rounded-lg text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-zinc-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Continue with Google
                </button>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
                    {isSignup
                        ? "Already have an account?"
                        : "Don't have an account?"}

                    <button
                        type="button"
                        onClick={() => {
                            setIsSignup(!isSignup);
                            setError("");
                        }}
                        className="text-orange-500 font-semibold ml-1"
                    >
                        {isSignup ? "Login" : "Sign up"}
                    </button>
                </p>
            </div>
        </div>
    );
}