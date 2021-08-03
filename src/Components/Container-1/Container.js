import { React, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import './Container.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 250,
        maxWidth: 300,
    },
    // noLabel: {
    //     marginTop: theme.spacing(3),
    // },
}));


const names = [
    'Fruits',
    'Vegetables',
    'Groceries',
    'Spices',
    'Eggs&Meat',
];



function MultipleSelect() {
    const classes = useStyles();
    const [personName, setPersonName] = useState([]);
    const [data, setData] = useState([]);
    const handleChange = (event) => {
        setPersonName(event.target.value);
    };


    useEffect(() => {
        getData();

    }, []);

    const getData = async () => {
        try {
            const result = await axios.get('https://test.sunnybee.in/Cron/productList')
            const value = result.data.product_list;
            // const homeContent = value.slice(0,3)
            setData(value)
            // console.log(homeContent)
        } catch (error) {
            console.log(error);
        }
    }
    console.log(data);



    return (
        <div className='container my-4'>
            <div className="row">

                <div className="col-12 col-lg-4 my-2">
                    <FormControl variant='outlined' className={classes.formControl}>
                        <InputLabel id="demo-multiple-checkbox-label">Categories</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                        >
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className='col-12 col-lg-8 border border-dark my-2'>
                    <div className='d-flex justify-content-between'>
                        <h3 className='p-2'>
                            Category Name
                        </h3>

                        <div className="form-floating mt-2">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                {
                                    data.map((x) => {
                                        return (
                                            <option value="1" key={x.id}>{x.product_sub_category}</option>
                                        )
                                    })
                                }
                            </select>
                            <label for="floatingSelectGrid">Sort By</label>
                        </div>
                    </div>
                    {/* card section */}
                    <div className='row my-4 card-section' >

                        {
                            data.map((x) => {
                                return (
                                    <div className="card shadow-sm col-md-6 col-lg-4 my-3">
                                        <div className="card-body">
                                            <h5 className="card-title btn border border-dark ">Label</h5>
                                        </div>
                                        <div>
                                            <img className='text-center w-100 h-100' src={x.image_url}></img>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <p>
                                                    {
                                                        x.app_display_name
                                                    }
                                                </p>
                                                <p>
                                                    <span>$ : </span>
                                                    {
                                                        x.product_selling_price
                                                    }
                                                </p>
                                            </div>
                                            <div className='d-flex justify-content-center align-items-center px-4'>
                                                <button className='btn btn border border-dark '>Add</button>
                                            </div>
                                        </div>
                                    </div>

                                );

                            })
                        }
                    </div>
                </div>


            </div>

        </div>
    );
}
export default MultipleSelect;