import React, { VFC } from 'react';
import Form from '@rjsf/core';

import form from '../../form';
import formCss from '../../formCss';

export const JsonForm: VFC = () => {
  const schema = form;

  const uiSchema = formCss;

  const onFormSubmit = (event: any) => {
    console.log('送信されました'); // eslint-disable-line
    console.log(JSON.stringify(event.formData)); // eslint-disable-line
    document.write(JSON.stringify(event.formData)); // eslint-disable-line
  };

  // const test = (event: any) => {
  //   console.log(event.formData)  // eslint-disable-line
  //   let before: any = event.formData; // eslint-disable-line
  //   const test = before.Thinning.Diameter = [2, 4, 5,6,7,8,9,10,11, 12, 13] // eslint-disable-line
  //   console.log("てst")
  // }

  const onFormChange = (event: any) => {
    console.log('変更されました'); // eslint-disable-line
    let before: any = event.formData; // eslint-disable-line
  };

  const schemaAsObject = JSON.parse(schema); // eslint-disable-line
  // console.log(schemaAsObject.properties.Thinning.properties.Price.items) // eslint-disable-line
  // console.log("処理が終わりました")

  return (
    <Form
      schema={schemaAsObject} // eslint-disable-line
      onSubmit={onFormSubmit} // eslint-disable-line
      onChange={onFormChange} // eslint-disable-line
      uiSchema={uiSchema}
    />
  );
};

export default JsonForm;
