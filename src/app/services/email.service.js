import axios from "axios"

export const SendEmail = async (name, phone, question) => {
    console.log(name, phone, question);
    try {
        const response = await axios.post("/api/sendEmail", { name, phone, question });
        console.log(response.data);
    } catch (error) {
        console.error("Error send    email:", error);
    }
}


