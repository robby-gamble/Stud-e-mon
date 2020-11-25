import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Player } from 'video-react';
import {PropTypes} from 'prop-types';
import Video from '../components/Video';

function Lesson(props) {
    return (
        <Row>
            <Col>
                Lesson {props.num}.{props.subNum}
                <Video name={props.num} url={props.videoUrl}/>
            </Col>
        </Row>
    );
}

Lesson.propTypes = {
    num: PropTypes.string.isRequired,
    subNum: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired

};

export default Lesson;