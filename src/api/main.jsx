import {instance} from "./apis";

export const postHome = async () =>{
    try{
        const res = await instance.post('/api/home', {
            
        });
        return res;
    }   catch(err) {
        throw new Error(err);
    }
};


