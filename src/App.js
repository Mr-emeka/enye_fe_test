import React,{useEffect,useState} from "react";
import "./App.css";
import Layout from "./components/Layout/";
import SearchBar from "material-ui-search-bar";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Table from "./components/custom/Table";
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
 const classes = useStyles();
  const [profiles,setProfiles] = useState([]);
  const [filterByPaymentMethod,setPaymentMethod]= useState('')
  const [filterByGender,setGender]= useState('')
const [searchTerm,setSearchTerm]= useState('')
 

useEffect(()=>{
fetch(`https://api.enye.tech/v1/challenge/records`)
.then(res=>res.json())
.then(({records})=>setProfiles(records.profiles))
.catch(err=>console.log(err)
)}
,[])

const filterFunc = (profiles,searchTerm,filterByPaymentMethod,filterByGender)=>{
  let filteredResult;
  filteredResult = profiles.filter(({FirstName,LastName}) => FirstName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    LastName.toLowerCase().includes(searchTerm.toLowerCase()));
return filteredResult;


}

  return (
    <Layout>
      <div className="filter">
        <div className="filter__search">
          <SearchBar
          value={searchTerm}
          onChange={(newValue) => setSearchTerm( newValue )}
          // onRequestSearch={() => filterFunc(searchTerm)}
          />
        </div>
        <div className="filter__filter">
        <div className="filter__text">
        <h4>Filter By:</h4>
        </div>
         <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">PaymentMethod</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={filterByPaymentMethod}
          onChange={(e)=>setPaymentMethod(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='paypal'>paypal</MenuItem>
          <MenuItem value='paypal'>money order</MenuItem>
          <MenuItem value='check'>check</MenuItem>
          <MenuItem value='cc'>cc</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Gender</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={filterByGender}
          onChange={(e)=>setGender(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Male'>Male</MenuItem>
          <MenuItem value='Female'>Female</MenuItem>
          <MenuItem value='Prefer to skip'>Prefer to skip</MenuItem>
        </Select>
      </FormControl>
        </div>
      </div>
      <div>
        <h4>Profiles</h4>
      </div>
      <div className="table" >
        <Table profiles={filterFunc(profiles,searchTerm,filterByGender,filterByPaymentMethod)}/>
      </div>
    </Layout>
  );
}

export default App;
