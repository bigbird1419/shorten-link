import axios from "axios";

// import { accessToken } from "../constants/accessToken";
import {firebaseConfig} from './firebase'

// export const shortenUrl = async (longUrl) => {
//     try {
//         const response = await axios({
//             method: 'POST',
//             url: 'https://api-ssl.bitly.com/v4/shorten',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${accessToken}`
//             },
//             data: JSON.stringify({
//                 long_url: longUrl
//             })
//         });

//         return response.data.link;
//     } catch (error) {
//         console.error('Error shortening URL:', error);
//         throw error;
//     }
// };

export const shortenUrl = async (link) => {
    try {
        const response = await axios.post(
            `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${firebaseConfig.apiKey}`,
            {
                dynamicLinkInfo: {
                    domainUriPrefix: 'https://shly.page.link',
                    link,
                },
            }
        );
        return response.data.shortLink
    } catch (error) {
        console.log(error)
    }
}