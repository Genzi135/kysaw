import axios from "axios"

export const SendEmail = async (name, phone, question) => {
    try {
        const response = await axios({
            url: "/api/sendEmail",
            method: "POST",
            data: { name, phone, question }
        })
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

