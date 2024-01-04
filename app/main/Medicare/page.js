'use client'
import * as React from 'react'
import { useEffect } from 'react';
import Content from '@/components/Content'
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';

function Display({Shirts}){
  if (Shirts.length == 0)
  {
    return (
        [{key: 1, word: ''},
         {key: 2, word: 'No Results Found'},
         {key: 3, word: 'Change Customizations'},
         {key: 4, word: ''}
        ].map((obj) => (
            <div key={obj.key} className = "bg-yellow-500 text-center font-bold text-lg sm:text-3xl text-indigo-800" style = {{margin:'auto'}}>{obj.word}</div>
        ))
    )
  }
  else
  {
      return(
          Shirts.map((Shirt) => (
              <Content key={Shirt.key} name={Shirt.name} price={Shirt.price} image={Shirt.image} details={Shirt.details} link={Shirt.link} review={Shirt.review}>
              </Content>
          ))
      )
  }
}
function valuetext(value) {
    return `${value}°C`;
};
const price = [
    {
      value: 0,
      label: '₹0',
    },
    {
      value: 2000,
      label: '₹2000',
    },
    {
      value: 4000,
      label: '₹4000',
    },
    {
      value: 6000,
      label: '₹6000',
    },
    {
      value: 8000,
      label: '₹8000',
    },
    {
      value: 10000,
      label: '₹10000',
    },
  ];
let sort = 'asc';
let brands = new Set();
let cat = new Set();
let lowprice = 0;
let highprice = 10000;
let obji1 = {
    checked1:false,checked2:false,checked3:false,checked4:false,checked5:false,checked6:false,checked7:false
  };
let obji2 = {
    checked8:false,checked9:false, checked10:false
  };

export default function Page() {
    const [product, setProduct] = React.useState([]);
    const [filterproduct, setfilterProduct] = React.useState([]);
    useEffect(() => {
       fetch("http://localhost:3000/api/medicines")
       .then(res => res.json())
       .then((data) => {
        setProduct(data["Medicines"]);
        setfilterProduct(data["Medicines"]);
       });
    }, []);
    const [state, setState] = React.useState({
        left: false,
      });
      const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
        if (open === false)
        {
            let Shirts = product;
            Shirts = Shirts.filter((Shirt) => (Shirt.price >= lowprice && Shirt.price <= highprice))
            if (brands.size > 0)
            {
                Shirts = Shirts.filter((Shirt) => (brands.has(Shirt.brand)));
            }
            if (cat.size > 0)
            {
                Shirts = Shirts.filter((Shirt) => (cat.has(Shirt.category)));
            }
            if (sort === 'asc')
            {
                Shirts.sort(function(a,b) {return a.price - b.price});
            }
            else if (sort === 'desc')
            {
                Shirts.sort(function(a,b) {return a.price - b.price});
            }
            else
            {
                Shirts.sort(function(a,b) {return b.review - a.review});
            }
            setfilterProduct(Shirts);
            sort = value;
            obji1 = checked;
            obji2 = check;
            lowprice = valuesl[0];
            highprice = valuesl[1];
        }
      };
      const [value, setValue] = React.useState(sort);

      const handleChange = (event) => {
        setValue(event.target.value);
        sort = event.target.value;
      };
      const [checked, setChecked] = React.useState(obji1);

      const handleChangeBox = (event) => {
        const value = event.target.value;
        setChecked(prevValue => {
            if (value == "MediKer")
            {
                prevValue.checked1 === true ? brands.delete(value) : brands.add(value);
                return {
                    checked1:!prevValue.checked1,
                    checked2: prevValue.checked2,
                    checked3: prevValue.checked3,
                    checked4: prevValue.checked4,
                    checked5: prevValue.checked5,
                    checked6: prevValue.checked6,
                    checked7: prevValue.checked7
                };
            }
            else if (value == "Mamaearth")
            {
                prevValue.checked2 === true ? brands.delete(value) : brands.add(value);
                return {
                    checked1: prevValue.checked1,
                    checked2:!prevValue.checked2,
                    checked3: prevValue.checked3,
                    checked4: prevValue.checked4,
                    checked5: prevValue.checked5,
                    checked6: prevValue.checked6,
                    checked7: prevValue.checked7
                };
            }
            else if (value == "Himalaya")
            {
                prevValue.checked3 === true ? brands.delete(value) : brands.add(value);
                return {
                    checked1: prevValue.checked1,
                    checked2: prevValue.checked2,
                    checked3:!prevValue.checked3,
                    checked4: prevValue.checked4,
                    checked5: prevValue.checked5,
                    checked6: prevValue.checked6,
                    checked7: prevValue.checked7
                };
            }
            else if (value == "Apollo")
            {
                prevValue.checked4 === true ? brands.delete(value) : brands.add(value);
                return {
                    checked1: prevValue.checked1,
                    checked2: prevValue.checked2,
                    checked3: prevValue.checked3,
                    checked4:!prevValue.checked4,
                    checked5: prevValue.checked5,
                    checked6: prevValue.checked6,
                    checked7: prevValue.checked7
                };
            }
            else if (value == "Khadi")
            {
                prevValue.checked5 === true ? brands.delete(value) : brands.add(value);
                return {
                    checked1: prevValue.checked1,
                    checked2: prevValue.checked2,
                    checked3: prevValue.checked3,
                    checked4: prevValue.checked4,
                    checked5:!prevValue.checked5,
                    checked6: prevValue.checked6,
                    checked7: prevValue.checked7
                };
            }
            else if (value == "Patanjali")
            {
                prevValue.checked6 === true ? brands.delete(value) : brands.add(value);
                return {
                    checked1: prevValue.checked1,
                    checked2: prevValue.checked2,
                    checked3: prevValue.checked3,
                    checked4: prevValue.checked4,
                    checked5: prevValue.checked5,
                    checked6:!prevValue.checked6,
                    checked7: prevValue.checked7
                };
            }
            else
            {
                prevValue.checked7 === true ? brands.delete(value) : brands.add(value);
                return {
                    checked1: prevValue.checked1,
                    checked2: prevValue.checked2,
                    checked3: prevValue.checked3,
                    checked4: prevValue.checked4,
                    checked5: prevValue.checked5,
                    checked6: prevValue.checked6,
                    checked7:!prevValue.checked7
                };
            }
        })
      };
      const [check, setCheck] = React.useState(obji2);
      const handleChangecat = (event) => {
        const value = event.target.value;
        setCheck(prevValue => {
            if (value == "Shampoo")
            {
                prevValue.checked8 === true ? cat.delete(value) : cat.add(value);
                return {
                    checked8:!prevValue.checked8,
                    checked9: prevValue.checked9,
                    checked10: prevValue.checked10
                };
            }
            else if (value == "Hairoil")
            {
                prevValue.checked9 === true ? cat.delete(value) : cat.add(value);
                return {
                    checked8: prevValue.checked8,
                    checked9:!prevValue.checked9,
                    checked10: prevValue.checked10
                };
            }
            else
            {
                prevValue.checked10 === true ? cat.delete(value) : cat.add(value);
                return {
                    checked8: prevValue.checked8,
                    checked9: prevValue.checked9,
                    checked10:!prevValue.checked10
                }
            }
        })
      };
      const [valuesl, setValuesl] = React.useState([lowprice, highprice]);

      const handleChangesl = (event, newValue) => {
        setValuesl(newValue);
        const [pr1, pr2] = newValue;
        lowprice = pr1;
        highprice = pr2;
      };
    return (
    <div className = "bg-slate-400">
        <div className="bg-slate-700 text-center">
            <Button onClick={toggleDrawer('left', true)} className = "bg-pink-500" style={{marginBottom:"0.5rem", marginTop:"0.5rem", marginLeft:"0.5rem"}}variant="contained">
                Apply Filters
            </Button>
            <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer('left', false)}
            >
            <div>
                <Box
                sx={{
                    width: 280,
                    height: 803,
                    backgroundColor: '#301934',
                }}
                >
                    <FormControl style={{marginLeft:'1rem'}}>
                        <FormLabel className = "text-red-500 font-bold text-xl" id="demo-controlled-radio-buttons-group">Sort By</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel className = "text-white font-bold hover:bg-yellow-500" value="asc" control={<Radio />} label="Price Ascending" />
                            <FormControlLabel className = "text-white font-bold hover:bg-yellow-500" value="desc" control={<Radio />} label="Price Descending" />
                            <FormControlLabel className = "text-white font-bold hover:bg-yellow-500" value="review" control={<Radio />} label="Reviews" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl style={{marginLeft:'1rem'}}>
                        <FormLabel className = "text-red-500 font-bold text-xl">Select Your Brand</FormLabel>
                            <FormControlLabel className = "text-white font-bold hover:bg-yellow-500" value="MediKer" control={<Checkbox checked={checked.checked1} onChange={handleChangeBox} inputProps={{ 'aria-label': 'controlled' }}/>} label="MediKer" />
                            <FormControlLabel className = "text-white font-bold hover:bg-yellow-500" value="Mamaearth" control={<Checkbox checked={checked.checked2} onChange={handleChangeBox} inputProps={{ 'aria-label': 'controlled' }}/>} label="Mamaearth" />
                            <FormControlLabel className = "text-white font-bold hover:bg-yellow-500" value="Himalaya" control={<Checkbox checked={checked.checked3} onChange={handleChangeBox} inputProps={{ 'aria-label': 'controlled' }}/>} label="Himalaya" />
                            <FormControlLabel className = "text-white font-bold hover:bg-yellow-500" value="Apollo" control={<Checkbox checked={checked.checked4} onChange={handleChangeBox} inputProps={{ 'aria-label': 'controlled' }}/>} label="Apollo" />
                            <FormControlLabel className = "text-white font-bold hover:bg-yellow-500" value="Khadi" control={<Checkbox checked={checked.checked5} onChange={handleChangeBox} inputProps={{ 'aria-label': 'controlled' }}/>} label="Khadi" />
                            <FormControlLabel className = "text-white font-bold hover:bg-yellow-500" value="Patanjali" control={<Checkbox checked={checked.checked6} onChange={handleChangeBox} inputProps={{ 'aria-label': 'controlled' }}/>} label="Patanjali" />
                            <FormControlLabel className = "text-white font-bold hover:bg-yellow-500" value="Vatika" control={<Checkbox checked={checked.checked7} onChange={handleChangeBox} inputProps={{ 'aria-label': 'controlled' }}/>} label="Vatika" />
                    </FormControl>
                    <FormControl  style={{marginLeft:'1rem'}}>
                        <FormLabel className = "text-red-500 font-bold text-xl">Select Your Category</FormLabel>
                            <FormControlLabel className = "text-white font-bold hover:bg-yellow-500" value="Shampoo" control={<Checkbox checked={check.checked8} onChange={handleChangecat} inputProps={{ 'aria-label': 'controlled' }}/>} label="Shampoo" />
                            <FormControlLabel className = "text-white font-bold hover:bg-yellow-500" value="Hairoil" control={<Checkbox checked={check.checked9} onChange={handleChangecat} inputProps={{ 'aria-label': 'controlled' }}/>} label="Hairoil" />
                            <FormControlLabel className = "text-white font-bold hover:bg-yellow-500" value="Equipments" control={<Checkbox check10={check.checked10} onChange={handleChangecat} inputProps={{ 'aria-label': 'controlled' }}/>} label="Equipments" />
                    </FormControl>
                    <FormLabel  style={{marginLeft:'1rem'}} className = "text-red-500 font-bold text-xl">Enter Your Range Of Price</FormLabel>
                    <div className = "bg-white">
                        <Box sx={{ width: 230 }} style={{marginLeft:'1rem'}}>
                            <Slider
                                min = {0}
                                max = {10000}
                                step = {500}
                                getAriaLabel={() => 'Temperature range'}
                                value={valuesl}
                                onChange={handleChangesl}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                marks={price}
                            />
                        </Box>
                    </div>
                    <div>
                        <Button size="large" onClick={toggleDrawer('left', false)} className = "bg-pink-500" style={{marginBottom:"0.5rem", marginTop:"0.5rem", marginLeft:"5.5rem"}}variant="contained">
                            Apply
                        </Button>
                    </div>
                </Box>
            </div>
            </Drawer>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-1">
            <Display Shirts = {filterproduct}></Display>
        </div>
    </div>
  )
}

