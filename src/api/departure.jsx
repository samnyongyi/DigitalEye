import {instance} from "./apis";

export const patchSelectCity = async (id,region) =>{
    console.log("ID and Region" , id, region)
    try{
        const res = await instance.patch('/api/basic/departure/regions',{
            id,
            region,
        });
        return res;
    }   catch(err){
        throw new Error(err);
    }
};

export const patchSelectStation = async (id,station) => {
    try{
        const res = await instance.patch('/api/basic/departure',{
            id,
            station,
        });
        return res;
    }   catch(err) {
        throw new Error(err);
    }
};


// export const postSelectCityVoice = async (check,region) =>{
//     try{
//         const res = await apis.post('/api/audio/departure/regions',{
//             check,
//             region,
//         });
//         return res;
//     }   catch(err){
//         throw new Error(err);
//     }
// };
// 음성인식 부분은 나중에 api완료후 다시 작성


