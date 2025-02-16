import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const DatesList = ({ person }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // تصفية المواعيد بناءً على نص البحث
  const filteredPersons = person.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="">
        <Form.Control
          type="text"
          placeholder="ابحث عن موعد..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-3"
        />
        <div className="rectangle p-2">
          {filteredPersons.length ? (
            filteredPersons.map((item) => {
              return (
                <div key={item.id} className="d-flex border-bottom mx-3 my-2">
                  <img className="img-avatar" src={item.img} alt="this-photo" />
                  <div className="px-3">
                    <p className="d-inline fs-5">{item.name}</p>
                    <p className="fs-6">{item.date} </p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="p-5 text-center">لا يوجد مواعيد اليوم </h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DatesList;