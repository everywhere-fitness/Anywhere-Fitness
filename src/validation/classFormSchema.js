import * as yup from 'yup';

//describe the perfect formValues object to yup
const classFormSchema = yup.object().shape({
    name: yup.string().required('the Name of your class must be at least 2 characters long').min(2, 'Title must be at least 2 characters long'),    
    type: yup.string().required('please select type'),
    time: yup.string().required('your clients need to know when to come!'),
    duration: yup.string().required('please set class duration'),
    intensity: yup.number().required('how intense is the workout?'),
    location: yup.string().required('let the attendees know where to come').min(2, 'location must be at least 2 characters long'),
    max: yup.number().required('whats the maximum amount of participants?')
})

export default classFormSchema;   

