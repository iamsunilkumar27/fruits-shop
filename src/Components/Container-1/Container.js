import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import img from './delivery boy.png';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Fruits',
    'Vegetables',
    'Groceries',
    'Spices',
    'Eggs&Meat',
];



function MultipleSelect() {
    const classes = useStyles();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };


    return (
        <div className='container  d-block d-md-flex justify-content-between my-5'>

            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-checkbox-label">Categories</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<Input />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
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
            <div className=' ms-sm-1 ms-md-5 '>
                <div className='d-flex justify-content-between'>
                    <h3>
                        Category Name
                    </h3>
                    <a className="nav-link dropdown-toggle btn   border border-dark text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort By
                    </a>
                </div>
                <div className='d-flex flex-wrap my-5'>
                    <div className='row'>

                        <div className="card col-md-3   mx-4">
                            <div className="card-body">
                                <h5 className="card-title btn border border-dark ">Label</h5>
                            </div>
                            <div>
                                <img className='text-center' src={img}></img>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p>
                                        Name
                                    </p>
                                    <p>
                                        Price
                                    </p>
                                </div>
                                <div className='d-flex justify-content-center align-items-center px-4'>
                                    <button className='btn btn border border-dark '>Add</button>
                                </div>
                            </div>

                        </div>
                        <div className="card col-md-3 mx-4">
                            <div className="card-body">
                                <h5 className="card-title btn border border-dark ">Label</h5>
                            </div>
                            <div>
                                <img className='text-center' src={img}></img>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p>
                                        Name
                                    </p>
                                    <p>
                                        Price
                                    </p>
                                </div>
                                <div className='d-flex justify-content-center align-items-center px-4'>
                                    <button className='btn btn border border-dark '>Add</button>
                                </div>
                            </div>

                        </div>
                        <div className="card col-md-3 mx-4">
                            <div className="card-body">
                                <h5 className="card-title btn border border-dark ">Label</h5>
                            </div>
                            <div>
                                <img className='text-center' src={img}></img>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p>
                                        Name
                                    </p>
                                    <p>
                                        Price
                                    </p>
                                </div>
                                <div className='d-flex justify-content-center align-items-center px-4'>
                                    <button className='btn btn border border-dark '>Add</button>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
}
export default MultipleSelect;