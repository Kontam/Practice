import axiosFactory from 'axios';
import jwt from 'jsonwebtoken';

import { appConst } from './appConst';

if (!appConst.NEXT_PUBLIC_API_KEY) console.error("you must provide environment variable API_KEY");
if (!appConst.NEXT_PUBLIC_API_SECRET) console.error("you must provide environment variable API_SECRET");

export const apiKey = jwt.sign(appConst.NEXT_PUBLIC_API_KEY || "", appConst.NEXT_PUBLIC_API_SECRET|| ""); 

const axios = axiosFactory.create({
    baseURL: appConst.NEXT_PUBLIC_BACKEND_BASE_URL,
    timeout: 20000,
    headers: {
      'X-Api-Key': apiKey, 
    },
});

export default axios;
