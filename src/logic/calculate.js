var operations = ["%", "*", "+", "-"];

function isNumber(item){
    return /[0-9]+/.test(item) ;
}

function calculateValue(item1, item2, operationValue){

    if(item1[item2.length - 1] === '.') item1+="0";
    var val1 = parseFloat(item1);
    var val2 = parseFloat(item2);

    if(operationValue === "+"){
        val1+=val2;
    }
    else if(operationValue === "-"){
        val1-=val2;
    }
    else if(operationValue === "*"){
        val1*=val2;
    }
    else if(operationValue === "%"){
        if(val2 === 0.0){
            return "error";
        }
        else {
            val1/=val2;
        }
    }

    var finalValue;
    if(Math.floor(val1) === val1){
        finalValue = parseInt(val1).toString();
    }
    else finalValue = val1.toString();
    if(!isNaN(parseFloat(finalValue))) return finalValue;
    return "error";
}

export default function calculate(obj, buttonName) {

    if(buttonName === "AC"){
        return {
            total: null,
            next: null,
            operation: null
        };
    }

    if(obj.total === "error"){
        return {
            total: null,
            next: null,
            operation: null
        };
    }

    if(isNumber(buttonName)){
        if(obj.operation){
            if(obj.next) return { next: obj.next+buttonName };
            if(obj.next === "0"){
                if(buttonName === "0") return {};
            }
            if(obj.next === "-0"){
                if(buttonName === "0") return {};
                return { next: "-"+buttonName };
            }
            return { next: buttonName };
        }
        else{
            if(obj.total) return {total: obj.total+buttonName };
            if(obj.total === "0"){
                if(buttonName === "0") return {};
            }
            if(obj.total === "-0"){
                if(buttonName === "0") return {};
                return { total: "-"+buttonName };
            }
            return { total: buttonName };
        }        
    }

    if(buttonName === "."){
        if(obj.operation){
            if(obj.next) return { next : obj.next+buttonName };
            return { next : "0"+buttonName };
        }
        else{
            if(obj.total) return { total : obj.total+buttonName };
            return { toal : "0"+buttonName };
        }
    }

    if(buttonName === "="){
        if(obj.total && obj.next && obj.operation){
            return {
                total: calculateValue(obj.total, obj.next, obj.operation),
                next: null,
                operation: "none"
            };
        }
        return {
            total: null,
            next: null,
            operation: null
        };
    }

    if(operations.includes(buttonName)){
        if(!obj.total){
            if(buttonName === "-") return{ total: buttonName };
            return {};
        }     
        if(!obj.operation || obj.operation === "none"){ 
            return { operation: buttonName };          
        }
        else{
            if(!obj.next){
                if(buttonName === "-") return {next: buttonName};
                return {};
            } 
        }
        return {
            total: calculateValue(obj.total, obj.next, obj.operation),
            next: null,
            operation: buttonName
        };
    }
}