import React, { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name field should contains atleast 3 characters." }),
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "Age must be at least 18" }),
});

// After applying zod in the project
type formData = z.infer<typeof schema>;

// this code is when we have applied zod in the project
// interface formData {
//   name: string;
//   age: number;
// }

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />

        {errors.name && <p className="text-danger"> {errors.name.message} </p>}
      </div>

      <div className="mb-3 form-group">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger"> {errors.age.message} </p>}
      </div>

      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ReactHookForm;
