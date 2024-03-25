
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

function ExtractForm() {
  return (
    <Form className="extract">
      {/* <Form.Group className="mb-3 extract style={TextLoginStyle}"> */}
      <Form.Group className="mb-3">
        <Form.Label>select Extract Audio</Form.Label>
        <Form.Control type="file" accept=".wav"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Secret Message</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>
      <Button className="mb-3" variant="primary">Embed</Button>{''}
    </Form>
  );
}

export default ExtractForm;
