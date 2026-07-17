import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const GetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("chat-token");
        console.log("tokens send ",token)

        if (!token) {
          throw new Error("Unauthorized - No Token Provided");
        }

        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";
        const res = await fetch(`${apiUrl}/api/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });


        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default GetConversations;
