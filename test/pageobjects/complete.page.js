import { $ } from '@wdio/globals'



class CompletePage {

    get completeMessage() {
        return $('h2=Thank you for your order!');
    }


   
   
 }



export default new CompletePage();