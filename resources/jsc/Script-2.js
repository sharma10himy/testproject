var schema={
  "$schema": "https://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "required": [
      "firstName",
      "lastName",
      "age",
      "email"
    ],
    "oneOf": [
      {
        "required": [
          "rollNumber"
        ]
      },
      {
        "required": [
          "classNumber"
        ]
      }
    ],
    "properties": {
      "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "age": {
        "type": "integer"
      },
      "email": {
        "type": "string",
        "format": "email",
        "pattern": "^[A-Za-z0-9]*@gmail.com$"
      },
      "rollNumber": {
        "type": "string",
        "pattern": "[a-zA-Z]{1}[0-9]"
      },
      "classNumber": {
        "type": "integer"
      }
    }
  }
};