
   

class Helper  {

 userName = 'standard_user'
 password = 'secret_sauce'
 lockedUser='locked_out_user' 
 problemUser='problem_user'



    generateRandomString(length) {  
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    

}
}

export default new Helper();



