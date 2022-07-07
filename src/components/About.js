import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function About() {
    return(
        <div>
            <Container>
    <Card border="info" >
        <Card.Header className="blockquote mb-0 card-body">About Me</Card.Header>
        <Card.Body>
            <Card.Text>
            Housecleaning Service in Cook County, IL
            </Card.Text>
            <Card.Text>
            Se habla español
            </Card.Text>
        </Card.Body>
    </Card>
</Container>
        </div>
    )
}