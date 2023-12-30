function formatToCurrency(str){
    if(str.length>3){
        let temp = str.split('');
        let amt = '';
        amt = temp.splice(str.length - 3).join('');
        while(temp.length>0){
            amt = temp.splice(temp.length - 2).join('') + ',' + amt;
        }
        return '&#8377;'+amt;
    }else{
        return str;
    }
}