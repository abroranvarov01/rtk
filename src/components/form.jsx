import React from "react";
import { useAddUserMutation } from "../redux/service/user-service";
import { useForm } from "react-hook-form";
import { Button, TextField, Box } from "@mui/material";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addUser] = useAddUserMutation();

  const submit = (data) => {
    addUser(data)
      .unwrap()
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <Box component="div">
      <form onSubmit={handleSubmit(submit)}>
        <TextField
          placeholder="Название"
          {...register("title")}
          fullWidth
          margin="normal"
        />
        <TextField
          placeholder="Описание"
          {...register("email")}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? "Добавление..." : "Добавить"}
        </Button>
        {isSuccess && <p>Пользователь успешно добавлен!</p>}
        {isError && (
          <p>Не удалось добавить пользователя. Попробуйте еще раз.</p>
        )}
      </form>
    </Box>
  );
};

export default Form;
