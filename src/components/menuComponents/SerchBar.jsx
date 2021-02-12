import React, { Component, useState } from 'react';
import { Input, Form, Icon, TextArea } from 'semantic-ui-react';

export default props => {
  // 
  const [ query, setState ] = useState('');

  return (
    <Form onSubmit={e => {
      props.setSearchQuery(query.query)
    }} >
      <Form.Input placeholder="search..." icon="search" onChange={(e) => {
        setState({
          query: e.target.value
        })
      }} />
    </Form>
  );
}