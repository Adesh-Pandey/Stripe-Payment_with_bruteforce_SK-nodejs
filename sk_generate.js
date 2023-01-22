const UPPERcharacters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERcharacters ='abcdefghijklmnopqrstuvwxyz';
const NUMBERS ='0123456789';


function generateString(length) {
    let result = 'sk_live_';
    // const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        let val=Math.random() ;
        if(val<0.27){
            result += UPPERcharacters.charAt(Math.floor(val * UPPERcharacters.length));
        }else if (val<0.59){
            result += NUMBERS.charAt(Math.floor(val * NUMBERS.length));
        }else{
        result += LOWERcharacters.charAt(Math.floor(Math.random() * LOWERcharacters.length));
    }}

    return result;
}

for (let index = 0; index < 10; index++) {
    const my_sk=generateString(24);
    console.log(my_sk);

}