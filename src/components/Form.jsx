import { Button, TextField } from "@mui/material";
import { Formik, Form } from "formik";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { variables } from "../config";
import * as Yup from "yup";

const { serviceId, templateId, userId } = variables;
const MyForm = () => {
  const form = useRef()
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        message: Yup.string().required("Message is required"),
      })}
      onSubmit={ (values) => {
        emailjs.sendForm( serviceId, templateId, form.current, userId )
          .then((result)=>{
            console.log(result)

            form.current.reset()
          })
          .catch(err => console.log(err))
        // console.log(serviceId, templateId, userId,import.meta.env)
          console.log('hola')
          
      }}
    >
      {(props) => (
        <Form style={{display:"flex", flexDirection:"column",gap:"1.5rem"}} ref={form} >
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={props.values.name}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            error={props.touched.name && Boolean(props.errors.name)}
            helperText={props.touched.name && props.errors.name}
            autoComplete=""
          ></TextField>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={props.values.email}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            error={props.touched.email && Boolean(props.errors.email)}
            helperText={props.touched.email && props.errors.email}
          ></TextField>
          <TextField
            fullWidth
            id="message"
            name="message"
            label="Message"
            value={props.values.message}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            error={props.touched.message && Boolean(props.errors.message)}
            helperText={props.touched.message && props.errors.message}
            multiline
            rows={4}
          ></TextField>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
