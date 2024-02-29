import './App.css';
import Navbar from './components/Navbar';
import ResultsNavbar from './components/ResultNavbar';
import Sidebar from './components/sidebar';
import BidTable from './components/table';

function App() {
  const data = [
    {
      sNo: 1,
      bidNumber: '#1223456789',
      createdBy: 'sundar yadav',
      startDate: '14/2/2024 ',
      bidTimeRemaining: '7hr 20min',
      fromCity: 'Banglore',
      toCity: 'Chennai',
      vehicleType: 'Close Body',
      sizeBody: '4000kg',
      numOfVehicles: 1,
      materialWeight: '4000kg',
      response: '4',
      assignedStaff: 'Mohit',
      details: 'View Details',
    },
    
    {
      sNo: 2,
      bidNumber: '#1223456789',
      createdBy: 'sundar yadav',
      startDate: '14/2/2024 ',
      bidTimeRemaining: '7hr 20min',
      fromCity: 'Banglore',
      toCity: 'Chennai',
      vehicleType: 'Close Body',
      sizeBody: '4000kg',
      numOfVehicles: 1,
      materialWeight: '4000kg',
      response: '4',
      assignedStaff: 'Mohit',
      details: 'View Details',
    },
    {
      sNo: 3,
      bidNumber: '#1223456789',
      createdBy: 'sundar yadav',
      startDate: '14/2/2024 ',
      bidTimeRemaining: '7hr 20min',
      fromCity: 'Banglore',
      toCity: 'Chennai',
      vehicleType: 'Close Body',
      sizeBody: '4000kg',
      numOfVehicles: 1,
      materialWeight: '4000kg',
      response: '4',
      assignedStaff: 'Mohit',
      details: 'View Details',
    },
    {
      sNo: 4,
      bidNumber: '#1223456789',
      createdBy: 'sundar yadav',
      startDate: '14/2/2024 ',
      bidTimeRemaining: '7hr 20min',
      fromCity: 'Banglore',
      toCity: 'Chennai',
      vehicleType: 'Close Body',
      sizeBody: '4000kg',
      numOfVehicles: 1,
      materialWeight: '4000kg',
      response: '4',
      assignedStaff: 'Mohit',
      details: 'View Details',
    },
    {
      sNo: 5,
      bidNumber: '#1223456789',
      createdBy: 'sundar yadav',
      startDate: '14/2/2024 ',
      bidTimeRemaining: '7hr 20min',
      fromCity: 'Banglore',
      toCity: 'Chennai',
      vehicleType: 'Close Body',
      sizeBody: '4000kg',
      numOfVehicles: 1,
      materialWeight: '4000kg',
      response: '4',
      assignedStaff: 'Mohit',
      details: 'View Details',
    },
  ];

  return (
    <div className='main-container'>
    <Navbar />
    <ResultsNavbar />
    <Sidebar />
   
    <BidTable data={data}/>
    </div>
  );
};

export default App;



