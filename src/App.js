import Container from 'react-bootstrap/Container';
import { person } from './data.js';
import DatesCount from './components/DatesCount.js';
import DatesList from './components/DatesList.js';
import DatesAction from './components/DatesAction.js';
import { useState, useEffect } from 'react';

function App() {
  // تحميل البيانات من localStorage أو استخدام البيانات الافتراضية
  const [personData, setPersonData] = useState(() => {
    const savedData = localStorage.getItem('personData');
    return savedData ? JSON.parse(savedData) : person;
  });

  // حفظ البيانات في localStorage عند التغيير
  useEffect(() => {
    localStorage.setItem('personData', JSON.stringify(personData));
  }, [personData]);
  // حذف جميع المواعيد
  const onDelete = () => {
    setPersonData([]);
  };
  // عرض جميع المواعيد (البيانات الافتراضية)
  const onShow = () => {
    setPersonData(person);
  };
  // إضافة موعد جديد
  const onAdd = (newPerson) => {
    setPersonData([...personData, newPerson]);
  };

  return (
    <div className="font color-body">
      <Container>
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction deleteData={onDelete} showData={onShow} addData={onAdd} />
      </Container>
    </div>
  );
}

export default App;



