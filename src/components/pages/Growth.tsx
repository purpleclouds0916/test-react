import React, { memo, VFC } from 'react';
import Form from 'react-jsonschema-form';

export const Growth: VFC = memo(() => {
    const schema = `{
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "age": {
            "type": "integer",
            "minimum": 10,
            "maximum": 100
          },
          "married": {
            "type": "boolean",
            "default": false
          }
        },
        "required": [
          "name",
          "age",
          "married"
        ]
      }`;

      const schemaAsObject = JSON.parse(schema);　// eslint-disable-line
  
    return (
        <Form schema={schemaAsObject} />　// eslint-disable-line
    );
  });
  
  export default Growth;
  