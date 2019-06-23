import React from 'react';
import Container from '@material-ui/core/Container';
import EntityIdField from '../../molecules/EntityIdField/EntityIdField.jsx';
import EntityNameField from '../../molecules/EntityNameField/EntityNameField.jsx';
import EntityValueSynonyms from '../../molecules/EntityValueSynonyms/EntityValueSynonyms.jsx';
import EntitySendButton from '../../molecules/EntitySendButton/EntitySendButton.jsx';

export default function EntityEntry(props) {
  return (
    <Container>
      <EntityIdField
        id={props.entity_id}
        actions={props.actions}
      />
      <EntityNameField
        name={props.entity_name}
        actions={props.actions}
      />
      <EntityValueSynonyms
        values={props.values_temp}
        synonyms={props.synonyms_temp}
        actions={props.actions}
      />
      <EntitySendButton
        actions={props.actions}
      />
    </Container>
  );
}