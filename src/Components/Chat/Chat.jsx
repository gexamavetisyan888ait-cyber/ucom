import React, { useEffect, useState, useRef } from "react";
import { ref, onValue, push , remove} from "firebase/database";
import { db } from "../../lib/firrebase";

export default function ChatUI() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const bottomRef = useRef(null);

    useEffect(() => {
        const chatRef = ref(db, "db/Chat");

        const unsubscribe = onValue(chatRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();

                const formatted = Object.keys(data).map((key) => ({
                    id: key,
                    message: data[key],
                }));

                setMessages(formatted);
            } else {
                setMessages([]);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        const chatRef = ref(db, "db/Chat");
        await push(chatRef, message);

        setMessage("");
    };

    const clearChat = async () => {
        await remove(ref(db, "db/Chat"));
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">

            <div className="w-full text-center py-4 bg-white shadow font-semibold text-lg">
                Chat
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg) => (
                    <div key={msg.id} className="flex">
                        <div className="max-w-xs px-4 py-2 rounded-2xl bg-green-500 text-white shadow">
                            {msg.message}
                        </div>
                    </div>
                ))}
                <div ref={bottomRef}></div>
            </div>

            <div className="flex items-center p-4 bg-white border-t gap-2">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter message..."
                    className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                    onClick={sendMessage}
                    className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
                >
                    Send
                </button>
                <button
                    onClick={clearChat}
                    className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
                >
                    Clear
                </button>
            </div>

        </div>
    );
}