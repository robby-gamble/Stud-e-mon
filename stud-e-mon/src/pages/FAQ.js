import React from "react";
import { Row, Accordion, Card, Col } from "react-bootstrap";
import ModuleDropdown from "../components/ModuleDropdown";
import { Redirect } from "react-router-dom";

export default function FAQ() {
 return (
    <div style={{ fontFamily: "Raleway" }}>
      <Row style={styles.center}>
        <h1 style={styles.h1}>FAQs</h1>
      </Row>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            How much time do I need to commit?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              That depends on how much time you can give and the type of
              volunteer opportunity that interests you. Evening hosting is just
              a few hours and is perfect for volunteers with busy schedules. For
              those with a bit more time, our ‘done in a day’ projects, like
              gardening at a Day Center and helping at a special event, work
              well. Whereas volunteering to teach financial literacy and
              technology skills is best for volunteers who are capable of a
              longer time commitment.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Can I volunteer one-time or do I have to make an ongoing commitment?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Family Promise volunteers can have a lasting impact on a family’s
              life without making a huge time commitment. One-time volunteer
              opportunities – such as helping at a special event or
              participating in a supply drive – exist and work well for those
              with full schedules. There are also plenty of opportunities for
              volunteers who are available to make a more long-term, regular
              commitment.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Will I receive volunteer training?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Family Promise wants every volunteer to feel comfortable, so we do
              offer training. Volunteers directly working with our families are
              required to go through an orientation. Additional training,
              tailored to the specific volunteer project, will also be provided.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Can I volunteer with my family?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              We offer opportunities for entire families to volunteer. For
              example, families often enjoy volunteering in the evenings when
              they can share a meal with the guest families and children can
              enjoy some play time together.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Are there opportunities to volunteer with my co-workers?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              There are opportunities for you to volunteer with a group of
              colleagues or even with just a single co-worker. When you are
              matched with an Affiliate, the volunteer coordinator will help you
              identify a project that works best for your team.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            What are the hours during which volunteers can help?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              Family Promise offers volunteer opportunities during the day, in
              the evening, and on weekends. Scheduling depends on the type of
              volunteer activity. For example, volunteers providing homework
              help will do so in the evenings or on the weekends. And volunteers
              assisting at our office may do so during regular business hours.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="6">
            Do you offer virtual volunteer opportunities?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              Yes, virtual volunteers are welcome. Virtual volunteers can help
              with public relations, fundraising, and even some administrative
              tasks.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="7">
            Are the projects listed on the Family Promise website the only
            volunteer opportunities?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              The Family Promise website provides an overview of the ways in
              which you can volunteer your time to help children and families.
              Once you are connected with one of our Affiliates, you will be
              able to explore other opportunities to contribute your time and
              talents.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

let styles = {
  h1: {
    textAlign: "center",
    paddingTop: 25,
    paddingBottom: 25,
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
};
