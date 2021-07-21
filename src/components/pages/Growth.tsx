import React, { memo, VFC } from 'react';
import Form from '@rjsf/core'; 
import form from '../../form'; 

export const Growth: VFC = memo(() => {
  const schema = form;

  const uiSchema = {
    SDMD: {
      properties: {
        'ui:options': {
          addable: false,
          orderable: false,
          removable: false,
        },
      },
    },
  };

  const onFormSubmit = (event: any) => { // eslint-disable-line
    console.log('送信されました'); // eslint-disable-line
    console.log(JSON.stringify(event.formData)); // eslint-disable-line
    document.write(JSON.stringify(event.formData)); // eslint-disable-line
  };

  const onFormChange = (event: any) => { // eslint-disable-line
    console.log('変更されました'); // eslint-disable-line
    let before: any = event.formData; // eslint-disable-line
    console.log(before); // eslint-disable-line
    // eslint-disable-line
  };

  const schemaAsObject = JSON.parse(schema); // eslint-disable-line
  console.log('レンダリングされました'); // eslint-disable-line

  return (
    <Form
      schema={schemaAsObject} // eslint-disable-line
      onSubmit={onFormSubmit} // eslint-disable-line
      onChange={onFormChange} // eslint-disable-line
      uiSchema={uiSchema}
    />
  );
});

export default Growth;
