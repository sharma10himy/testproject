var jsonContent = JSON.parse(request.content);

// if (jsonContent.contractType !== undefined){
//     print("before replacing : "+jsonContent.contractType);
//     jsonContent.contractType = jsonContent.contractType.replace(/ä/g, "&auml;");
// print("After replacing : "+jsonContent.contractType);
// }

var valid = tv4.validate(jsonContent, schema, true, true);
print(valid);
//context.setVariable("raiseFaultRuleSchemaValidation",valid );
context.setVariable("raiseFaultRuleSchemaValidation", !valid);
//print(context.setVariable("raiseFaultRuleSchemaValidation", !valid));
if (!valid) {
    var errorMessageFull = JSON.stringify(tv4.error, null, 2);
    
    var resultStatus = 101;
    if(tv4.error.code === 302)
    {
        resultStatus = 103;
    }
    var errorMessage = JSON.stringify(tv4.error.message, null, 2).slice(1, -1);
    var dataPath = JSON.stringify(tv4.error.dataPath, null, 2).slice(1, -1);
   // print(errorMessage);
   // print(dataPath);
    var splitString = errorMessage.split(":");
  // print(splitString[0]);
    if(splitString[0] == "Missing required property"){
        errorMessage = splitString[0]+": "+dataPath+"/"+splitString[1].slice(1);
    }
    else{
        errorMessage = errorMessage+""+dataPath;
    }
    print(errorMessage);
    print(resultStatus);
    print(errorMessageFull);
    context.setVariable("raiseFaultRuleSchemaValidationerrorMessage", errorMessage);
    context.setVariable("raiseFaultRuleSchemaValidationResultStatus", resultStatus);
    context.setVariable("raiseFaultRuleSchemaValidationMessage", errorMessageFull);
    
}