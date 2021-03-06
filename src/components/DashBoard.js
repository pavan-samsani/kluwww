import React from 'react';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import { Grid, Row, Col } from 'react-bootstrap';
import FeatureItem from './Feature';
import RegisterForm from './Register';
import Footer from './Footer';

// <span style={{ color: '#8E24AA' }}>K</span>
// <span style={{ color: '#43A047' }}>L</span>
// <span style={{ color: '#FDD835' }}>U</span>
// <span style={{ color: '#1565C0' }}>W</span>
// <span style={{ color: '#F4511E' }}>W</span>

const DashBoard = props => (
  <div style={{ backgroundColor: '#E0E0E0' }}>
    <Grid>
      <Row>
        <Row>
          <RegisterForm />
        </Row>
        <Row>
          <Col smOffset={3} sm={6} smOffset={3}>
            <h3
              style={{
                textAlign: 'center',
                fontFamily: 'Roboto',
                color: '#1565C0'
              }}
            >
              Top features of KLUWW
            </h3>
          </Col>
        </Row>
        <br />

        {props.features.map((feature, index) => (
          <Col md={6}>
            <FeatureItem key={feature.id} {...feature} />
            <br />
          </Col>
        ))}
      </Row>
      <br />
      <br />
    </Grid>
  </div>
);

const mapStateToProps = state => ({
  // state
  features: state
});

export default connect(mapStateToProps)(DashBoard);
