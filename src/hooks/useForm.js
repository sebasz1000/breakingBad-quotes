import { useState } from "react";

export const useForm = (initForm = {}) => {
  const [form, setForm] = useState(initForm);
  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onReset = (e) => setForm(initForm);
  return {
    onChange,
    onReset,
    ...form,
  };
};
