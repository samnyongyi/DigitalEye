import {instance} from "./apis";

export const getTrainCheck = async(id)=>{
    try{
        const res = await instance.getTrainCheck('/api/both/trains', {
            id,
        });
        return res;
    }   catch(err){
        throw new Error(err);
    }
};

export const getSeatCheck = async(id) =>{
    try{
        const res = await instance.get('/api/both/seats',{
            id,
        });
        return res;
    }   catch(err){
        throw new Error(err);
    }
}

export const getFinalChoice = async(id,train_table_id) =>{
    try{
        const res = await instance.get('/api/both/choice',{
            id,
            train_table_id,
        });
        return res;
    }   catch(err){
        throw new Error(err);
    }
}

export const patchFinal = async(id, train_table_id) =>{
    try{
        const res = await instance.patch('/api/basic/confirm',{
            id,
            train_table_id,
        });
        return res;
    }   catch(err){
        throw new Error(err);
    }
}