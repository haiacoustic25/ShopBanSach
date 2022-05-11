// import React from 'react'
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import {AdapterDateFns} from '@material-ui/lab/AdapterDateFns';
// import DateFnsUtils from "@date-io/date-fns";

// export default function DatePicker(props) {

//     const { name, label, value, onChange } = props


//     const convertToDefEventPara = (name, value) => ({
//         target: {
//             name, value
//         }
//     })

//     return (
//         <LocalizationProvider utils={DateFnsUtils}>
//             <AdapterDateFns disableToolbar variant="inline" inputVariant="outlined"
//                 label={label}
//                 format="MMM/dd/yyyy"
//                 name={name}
//                 value={value}
//                 onChange={date =>onChange(convertToDefEventPara(name,date))}

//             />
//         </LocalizationProvider>
//     )
// }