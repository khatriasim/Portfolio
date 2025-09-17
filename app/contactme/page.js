"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const ContactMe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");


        if (!name.trim() || !email.trim() || !message.trim()) {
            setError("All fields are required");
            setIsSubmitting(false);
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await res.json();

            if (data.success) {
                const now = new Date().toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                });

                setError(`✅ Message sent successfully at ${now}!`);
                // Clear form
                setName("");
                setEmail("");
                setMessage("");
            } 
        } catch (err) {
            setError("Something went wrong! Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-4 flex flex-col items-center text-center font-ovo max-w-4xl mx-auto">
            <h2 className="text-xl font-ovo">Connect with me</h2>
            <h1 className="font-ovo font-extralight text-5xl md:text-5xl">Get in touch</h1>

            <form onSubmit={handleSubmit} className="w-full max-w-2xl mt-6">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex-1 border p-3 font-ovo rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-teal-300"
                        disabled={isSubmitting}
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 border p-3 font-ovo rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-teal-300"
                        disabled={isSubmitting}
                    />
                </div>

                <textarea
                    placeholder="Your Message"
                    rows="8"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border p-4 font-ovo rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-teal-300"
                    disabled={isSubmitting}
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-8 font-ovo relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200 disabled:opacity-50"
                >
                    <span className="relative px-8 py-3 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent">
                        {isSubmitting ? "Sending..." : "Submit"}
                    </span>
                </button>

                {error && (
                    <p className={`mt-4 ${error.includes('✅') ? 'text-green-500' : 'text-red-500'}`}>
                        {error}
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactMe;