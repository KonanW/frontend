// promise 

class Promise {
    constructor(executor) {
        this.status = 'pending';
        this.value = undefined ; 
        this.reason = undefined ;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        let resolve = (value) => {
            if(this.status == "pending"){
                this.status = 'resolved';
                this.value = value;
            }
        }
        let reject = (reason) => {
            if(this.status == "pending"){
                this.status = 'rejected';
                this.reason = reason;
            }
        }
        try {
            //
            executor(resolve,reject);
        }catch(err){
            reject(err)
        }
    }

    then(onFufilled,onRejected){
        if(this.status === 'resolved'){
            onFufilled(this.value);
        }
        if(this.status ==='rejected'){
            onRejected(this.reason)
        }
    }
}