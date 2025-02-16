import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const DatesAction = ({ deleteData, showData, addData }) => {
    const [showModal, setShowModal] = useState(false);
    const [newName, setNewName] = useState('');
    const [newDate, setNewDate] = useState('');

    // إضافة موعد جديد
    const handleAdd = () => {
        addData({ id: Date.now(), name: newName, date: newDate, img: "photo.png" });
        setNewName('');
        setNewDate('');
        setShowModal(false);
    };

    return (
        <>
            <Row className="justify-content-center my-2">
                <Col sm="8" className="d-flex justify-content-between">
                    <button onClick={deleteData} className="btn-style p-2">
                        مسح الكل
                    </button>
                    <button onClick={() => setShowModal(true)} className="btn-style p-2">
                        إضافة موعد
                    </button>
                    <button onClick={showData} className="btn-style p-2">
                        عرض الكل
                    </button>
                </Col>
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>إضافة موعد جديد</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>الاسم</Form.Label>
                            <Form.Control
                                type="text"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>التاريخ</Form.Label>
                            <Form.Control
                                type="text"
                                value={newDate}
                                onChange={(e) => setNewDate(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        إلغاء
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        إضافة
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DatesAction;